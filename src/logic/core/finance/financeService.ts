import { Collection } from '../../firebase/db/collection';
import User from '../user/user';
import Transaction from './transaction';

export class FinaceService {
  private _collection = new Collection();

  async save(transaction: Transaction, user: User) {
    return this._collection.save(`finance/${user?.email}/transactions`, transaction);
  }

  async findAll(user: User) {
    return this._collection.findAll(
      `finance/${user?.email}/transactions`,
      'date',
      'desc',
    );
  }

  async remove(transaction: Transaction, user: User) {
    return this._collection.remove(`finance/${user?.email}/transactions`, transaction.id);
  }
}
