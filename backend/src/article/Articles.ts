import {
  Query,
  QuerySnapshot,
  addDoc,
  and,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { Article } from './ArticleType';
import { auth, fireDB, login } from '../firebase/FireApp';

const articlesCollection = collection(fireDB, 'articles');

let snap: QuerySnapshot;
let contents: Article[] = [];

async function makeSnap(): Promise<void> {
  if (!articlesCollection) return;
  const siteAuth = auth;
  await login();
  if (!siteAuth.currentUser) {
    return;
  }

  snap = await getDocs(articlesCollection);

  contents = snap.docs.map((doc) => {
    const theData = doc.data() as Article;
    theData.id = doc.id;
    return theData;
  });
  Articles.all = contents;
}

type AnyObj = Record<string, string>;

async function findById(id: string): Promise<Article> {
  const articleDoc = doc(articlesCollection, id);
  const articleSnap = await getDoc(articleDoc);
  const res = articleSnap.data() as Article;
  if (!res) return null;
  res.id = articleSnap.id;
  return res;
}

async function get(): Promise<Article[]>;
async function get(filter: AnyObj): Promise<Article[]>;
async function get(filter?: AnyObj): Promise<Article[]> {
  let docQuery: Query | undefined = undefined;

  if (filter) {
    const key = Object.keys(filter)[0] as keyof typeof filter;
    docQuery = query(
      articlesCollection,
      and(
        where(key, '>=', filter[key]),
        where(key, '<=', filter[key] + '\uf8ff'),
      ),
    );
  }

  const snap = docQuery
    ? await getDocs(docQuery)
    : await getDocs(articlesCollection);

  const res = snap.docs.map((doc) => {
    const theData = doc.data() as Article;
    theData.id = doc.id;
    return theData;
  });
  return res;
}

if (articlesCollection) {
  makeSnap();
}

async function write(newArticle: Partial<Article>): Promise<string> {
  const res = await addDoc(articlesCollection, newArticle);
  return res.id;
}

async function update(newArticle: Article): Promise<boolean> {
  await setDoc(doc(fireDB, 'articles', newArticle.id), newArticle);
  return true;
}

export const Articles = {
  makeSnap: makeSnap,
  all: contents,
  get: get,
  findById: findById,
  write: write,
  update: update,
};
