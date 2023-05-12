import { IconPlus } from '@tabler/icons-react';
import { useTransacton } from '../../data/hooks/useTransaction';
import { emptyTransactio } from '../../logic/core/finance/transaction';
import Content from '../template/Content';
import Header from '../template/Header';
import Page from '../template/Page';
import Form from './Form';
import List from './List';
import Summary from './Summary';
import NotFound from '../template/NotFound';

export default function Finace() {
  const {
    transactions,
    transaction,
    selectTransaction,
    saveTransaction,
    deleteTransaction,
    cancel,
  } = useTransacton();

  return (
    <Page>
      <Header />
      <Content className="gap-5">
        <Summary transactions={transactions} />
        <div>
          <button
            className="btn bg-blue-500"
            onClick={() => selectTransaction(emptyTransactio)}
          >
            <IconPlus />
            <span>Nova Transação</span>
          </button>
        </div>
        {transaction ? (
          <Form
            save={saveTransaction}
            transaction={transaction}
            cancel={() => cancel()}
            delete={deleteTransaction}
          />
        ) : transactions.length ? (
          <List transactions={transactions} selectTransaction={selectTransaction} />
        ) : (
          <NotFound>Nenhuma tranção encontrada</NotFound>
        )}
      </Content>
    </Page>
  );
}
