import { IconArrowsDoubleNeSw, IconCash, IconCreditCard } from '@tabler/icons-react';
import Transaction from '../../logic/core/finance/transaction';
import { TransactionType } from '../../logic/core/finance/transactionType';
import SummaryItem from './SummaryItem';

interface SummaryProps {
  transactions: Transaction[];
  className?: string;
}

export default function Summary(props: SummaryProps) {
  const totalize = (total: number, r: Transaction) => total + r.amount;
  const income = props.transactions
    .filter((transaction) => transaction.type === TransactionType.INCOME)
    .reduce(totalize, 0);
  const expenses = props.transactions
    .filter((transaction) => transaction.type === TransactionType.EXPENSE)
    .reduce(totalize, 0);

  const total = income - expenses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <SummaryItem
        title="Receitas"
        value={income}
        icon={<IconCash />}
        classNameIcon="text-green-500"
      />
      <SummaryItem
        title="Despesas"
        value={expenses}
        icon={<IconCreditCard />}
        classNameIcon="text-red-500"
      />
      <SummaryItem
        title="Total"
        value={total}
        icon={<IconArrowsDoubleNeSw />}
        classNameIcon="text-blue-500"
        classNameValue={total > 0 ? 'text-green-500' : total < 0 ? 'text-red-500' : ''}
      />
    </div>
  );
}
