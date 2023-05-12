import { useCallback, useContext, useEffect, useState } from 'react';
import { service } from '../../logic/core';
import Transaction from '../../logic/core/finance/transaction';
import { AuthContext } from '../context/AuthContext';

export function useTransacton() {
  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  const fetchTransactions = useCallback(async () => {
    if (!user) return;

    const respose = await service.finaceService.findAll(user);

    setTransactions(respose);
  }, [user]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const saveTransaction = async (transaction: Transaction) => {
    if (!user) return;
    await service.finaceService.save(transaction, user);
    setTransaction(null);
    await fetchTransactions();
  };

  const deleteTransaction = async (transaction: Transaction) => {
    if (!user) return;
    await service.finaceService.remove(transaction, user);
    setTransaction(null);
    await fetchTransactions();
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
