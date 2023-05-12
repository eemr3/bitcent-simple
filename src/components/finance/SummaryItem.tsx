import React from 'react';
import Currency from '../../logic/util/currency';

export interface SummaryItemProps {
  title: string;
  value: number;
  icon: any;
  classNameValue?: string;
  classNameIcon?: string;
}

export default function SummaryItem(props: SummaryItemProps) {
  return (
    <div
      className={`
      relative flex flex-col bg-black
      pt-4 pb-3 px-5 rounde-lg
      border border-zinc-800 text-white
    `}
    >
      <div className="text-sm text-zinc-500">{props.title}</div>
      <div className="flex justify-between items-center">
        <span className={`text-3xl font-black ${props.classNameValue ?? ''}`}>
          {Currency.format(props.value)}
        </span>
        <span>
          {React.cloneElement(props.icon, {
            size: 60,
            strokeWidth: 1,
            className: `${props.classNameIcon ?? ''}`,
          })}
        </span>
      </div>
    </div>
  );
}
