import { TransactionType } from './transactionType';

export default interface Transaction {
  id?: string;
  description: string;
  amount: number;
  date: Date;
  type: TransactionType;
}

export const emptyTransactio: Transaction = {
  description: '',
  amount: 0,
  date: new Date(),
  type: TransactionType.EXPENSE,
};
