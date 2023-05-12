import { IconCheck, IconTrash, IconX } from '@tabler/icons-react';
import Transaction from '../../logic/core/finance/transaction';
import DateFormat from '../../logic/util/date';
import { useState } from 'react';
import { TransactionType } from '../../logic/core/finance/transactionType';

interface FormProps {
  transaction: Transaction;
  save: (transaction: Transaction) => void;
  delete?: (transaction: Transaction) => void;
  cancel?: () => void;
}

export default function Form(props: FormProps) {
  const [data, setData] = useState<Transaction>(props.transaction);

  return (
    <div className="flex flex-col border border-zinc-700 rounded-xl overflow-hidden">
      <div className="bg-black py-3 px-7 text-zinc-400">Formulário</div>
      <div className="flex flex-col gap-4 p-4 sm:p-7">
        <input
          type="text"
          placeholder="Descrição"
          className="input"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Valor"
          className="input"
          value={data.amount ?? 0}
          onChange={(e) => setData({ ...data, amount: Number(e.target.value) })}
        />
        <input
          type="date"
          placeholder="Data"
          className="input"
          value={DateFormat.yymmdd.format(data.date) ?? new Date()}
          onChange={(e) => setData({ ...data, date: new Date(`${e.target.value} `) })}
        />
        <div className="flex gap-8">
          <div className="flex gap-2">
            <input
              type="radio"
              name="type"
              id="income"
              value="receita"
              checked={data.type === 'receita'}
              onChange={() => setData({ ...data, type: TransactionType.INCOME })}
            />
            <label htmlFor="income">Receita</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="type"
              id="expense"
              value="despesa"
              checked={data.type === 'despesa'}
              onChange={() => setData({ ...data, type: TransactionType.EXPENSE })}
            />
            <label htmlFor="expense">Despesa</label>
          </div>
        </div>
      </div>
      <div className="flex px-4 sm:px-7 py-4 gap-3 bg-zinc-800">
        <button className="btn bg-green-500" onClick={() => props.save?.(data)}>
          <IconCheck />
          <span className="hidden sm:inline">Salvar</span>
        </button>
        <button className="btn bg-zinc-500" onClick={() => props.cancel?.()}>
          <IconX />
          <span className="hidden sm:inline">Cancelar</span>
        </button>
        <span className="flex-1"></span>
        {props.transaction.id && (
          <button className="btn bg-red-500" onClick={() => props.delete?.(data)}>
            <IconTrash />
            <span className="hidden sm:inline">Excluir</span>
          </button>
        )}
      </div>
    </div>
  );
}
