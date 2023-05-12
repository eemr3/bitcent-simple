import { useEffect, useState } from 'react';
import Transaction from '../../logic/core/finance/transaction';
import { fakeTransactions } from '../constants/fakeTransactions';
import Id from '../../logic/core/common/id';

export function useTransactonInMemory() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  useEffect(() => fetchTransactions, []);

  const fetchTransactions = () => {
    setTransactions(fakeTransactions);
  };

  const saveTransaction = (transaction: Transaction) => {
    const others = transactions.filter((trans) => trans.id !== transaction.id);
    setTransactions([
      ...others,
      {
        ...transaction,
        id: transaction.id ?? Id.newId(),
      },
    ]);
    setTransaction(null);
  };

  const deleteTransaction = (transaction: Transaction) => {
    const others = transactions.filter((trans) => trans.id !== transaction.id);
    setTransactions(others);
    setTransaction(null);
  };

  const selectTransaction = (transaction: Transaction) => {
    setTransaction(transaction);
  };

  const cancel = () => {
    setTransaction(null);
  };

  return {
    transactions,
    transaction,
    saveTransaction,
    deleteTransaction,
    selectTransaction,
    cancel,
  };
}
