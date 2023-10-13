import {
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
import { Article, CensoredArticle } from './ArticleType';
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

async function findBy(filter: AnyObj): Promise<Article[]> {
  const key = Object.keys(filter)[0] as keyof typeof filter;
  const docQuery = query(
    articlesCollection,
    and(
      where(key, '>=', filter[key]),
      where(key, '<=', filter[key] + '\uf8ff'),
    ),
  );

  const snap = await getDocs(docQuery);

  const res = snap.docs.map((doc) => {
    const theData = doc.data() as Article;
    theData.id = doc.id;
    return theData;
  });
  return res;
}

async function getAll(): Promise<CensoredArticle[]> {
  const snap = await getDocs(articlesCollection);

  const res = snap.docs.map((doc) => {
    const theData = doc.data() as Article;
    return { title: theData.title, id: doc.id };
  });
  return res;
}

if (articlesCollection) {
  makeSnap();
}

async function write(newArticle: Partial<Article>): Promise<string | boolean> {
  try {
    const res = await addDoc(articlesCollection, newArticle);
    await makeSnap();
    return res.id;
  } catch (e) {
    return false;
  }
}

async function update(newArticle: Article): Promise<boolean> {
  await setDoc(doc(fireDB, 'articles', newArticle.id), newArticle);
  return true;
}

export const Articles = {
  makeSnap: makeSnap,
  all: contents,
  get: getAll,
  findBy: findBy,
  findById: findById,
  write: write,
  update: update,
};
