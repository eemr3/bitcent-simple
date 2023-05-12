import Id from '../../logic/core/common/id';
import Transaction from '../../logic/core/finance/transaction';
import { TransactionType } from '../../logic/core/finance/transactionType';

export const fakeTransactions: Transaction[] = [
  {
    id: Id.newId(),
    description: 'Salário',
    date: new Date(2023, 4, 1),
    amount: 7123.34,
    type: TransactionType.INCOME,
  },
  {
    id: Id.newId(),
    description: 'Conta de Luz',
    amount: 320.0,
    date: new Date(2023, 4, 3),
    type: TransactionType.EXPENSE,
  },
  {
    id: Id.newId(),
    description: 'Aluguel + Cond.',
    amount: 1817.59,
    date: new Date(2023, 4, 3),
    type: TransactionType.EXPENSE,
  },
  {
    id: Id.newId(),
    description: 'Cartão de Crédito',
    amount: 2200.0,
    date: new Date(2023, 4, 10),
    type: TransactionType.EXPENSE,
  },
  {
    id: Id.newId(),
    description: 'Conta de Água',
    amount: 174.35,
    date: new Date(2023, 4, 8),
    type: TransactionType.EXPENSE,
  },
  {
    id: Id.newId(),
    description: 'Mensalidade MBA',
    amount: 750.0,
    date: new Date(2023, 4, 2),
    type: TransactionType.EXPENSE,
  },

  {
    id: Id.newId(),
    description: 'Investimentos',
    date: new Date(2023, 4, 1),
    amount: 2123.34,
    type: TransactionType.INCOME,
  },
];
