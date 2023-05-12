import {
  DocumentData,
  DocumentSnapshot,
  OrderByDirection,
  QueryConstraint,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore';
import { app } from '../config/app';
import Id from '../../core/common/id';

export class Collection {
  async save(path: string, entity: any, id?: string): Promise<any> {
    const db = getFirestore(app);
    const idFinal = id ?? entity.id ?? Id.newId();
    const docRef = doc(db, path, idFinal);
    await setDoc(docRef, entity);

    return {
      ...entity,
      id: entity.id ?? idFinal,
    };
  }

  async findAll(
    path: string,
    order?: string,
    direction?: OrderByDirection,
  ): Promise<any> {
    const db = getFirestore(app);
    const collectionRef = collection(db, path);
    const filter: QueryConstraint[] = [];
    const ordination = order ? [orderBy(order, direction)] : [];
    const findQuery = query(collectionRef, ...filter, ...ordination);
    const resutl = await getDocs(findQuery);
    return resutl.docs.map(this._convertFromFirebase) ?? [];
  }

  async remove(path: string, id?: string): Promise<boolean> {
    if (!id) return false;

    const db = getFirestore(app);
    const docRef = doc(db, path, id);
    const dataBaseItem = await getDoc(docRef);

    if (!dataBaseItem) return false;

    await deleteDoc(docRef);
    return true;
  }

  private _convertFromFirebase(snapshot: DocumentSnapshot<DocumentData>) {
    const entinty: any = { ...snapshot.data(), id: snapshot.id };

    if (!entinty) {
      return entinty;
    }

    return Object.keys(entinty).reduce((obj: any, attribute: string) => {
      const value: any = entinty[attribute];
      return { ...obj, [attribute]: value.toDate?.() ?? value };
    }, {});
  }
}
