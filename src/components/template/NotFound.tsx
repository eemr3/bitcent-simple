import { IconCircleX } from '@tabler/icons-react';
import React from 'react';

interface NotFoundProps {
  children: React.ReactNode;
}

export default function NotFound(props: NotFoundProps) {
  return (
    <div className="flex flex-col items-center rounded-lg text-zinc-700 py-7">
      <IconCircleX size={80} strokeWidth={1} />
      <span className="text-lg">{props.children}</span>
    </div>
  );
}
