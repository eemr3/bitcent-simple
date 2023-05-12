import React from 'react';
import Transaction from '../../logic/core/finance/transaction';
import DateFormat from '../../logic/util/date';
import Currency from '../../logic/util/currency';
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';

interface ListProps {
  transactions: Transaction[];
  selectTransaction?: (transaction: Transaction) => void;
}

export default function List(props: ListProps) {
  function expenseTypeRender(transaction: Transaction) {
    return (
      <span
        className={`flex justify-center items-center h-8 w-8 sm:w-10 sm:h-10 p-1.5 rounded-full ${
          transaction.type === 'receita' ? 'bg-green-500' : 'bg-red-500'
        }`}
      >
        {transaction.type === 'receita' ? <IconTrendingUp /> : <IconTrendingDown />}
      </span>
    );
  }

  function renderRows(transaction: Transaction, index: number) {
    return (
      <div
        key={transaction.id}
        className={`flex items-center gap-3 p-3 ${
          index % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800'
        } cursor-pointer`}
        onClick={() => props.selectTransaction?.(transaction)}
      >
        {expenseTypeRender(transaction)}
        <span className="w-full md:w-1/2">{transaction.description}</span>
        <span className="flex-1 md:inline hidden">
          {DateFormat.ddmmyy.format(transaction.date)}
        </span>
        <span>{Currency.format(transaction.amount)}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col border border-zinc-700 rounded-xl overflow-hidden">
      {props.transactions.map(renderRows)}
    </div>
  );
}
