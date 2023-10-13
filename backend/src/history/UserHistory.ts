import {
  QuerySnapshot,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { auth, fireDB, login } from '../firebase/FireApp';
import { UserHistoryItem } from './UserHistoryType';

const userHistoryCollection = collection(fireDB, 'history');

let snap: QuerySnapshot;
let contents: UserHistoryItem[] = [];

async function makeSnap(): Promise<void> {
  if (!userHistoryCollection) return;
  const siteAuth = auth;
  await login();
  if (!siteAuth.currentUser) {
    return;
  }

  snap = await getDocs(userHistoryCollection);

  contents = snap.docs.map((doc) => {
    const theData = doc.data() as UserHistoryItem;
    return {
      id: doc.id,
      articleId: theData.articleId,
      date: theData.date,
    };
  });
  UserHistory.all = contents;
}

async function findById(id: string): Promise<UserHistoryItem> {
  const articleDoc = doc(userHistoryCollection, id);
  const articleSnap = await getDoc(articleDoc);
  const res = articleSnap.data() as UserHistoryItem;
  if (!res) return null;
  res.id = articleSnap.id;
  return res;
}

if (userHistoryCollection) {
  makeSnap();
}

async function findByUserId(id: string): Promise<UserHistoryItem[]> {
  const q = query(userHistoryCollection, where('userId', '==', id));
  const querySnapshot = await getDocs(q);
  const res = [];
  querySnapshot.forEach((doc) => {
    res.push(doc.data());
  });
  return res;
}

async function write(
  newHistory: Partial<UserHistoryItem>,
): Promise<string | boolean> {
  try {
    const res = await addDoc(userHistoryCollection, newHistory);
    await makeSnap();
    return res.id;
  } catch (e) {
    return false;
  }
}

export const UserHistory = {
  makeSnap: makeSnap,
  all: contents,
  findById: findById,
  write: write,
  findByUserId: findByUserId,
};
