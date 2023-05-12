interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function Content(props: ContentProps) {
  return (
    <div className={`flex flex-col p-7 ${props.className ?? ''}`}>{props.children}</div>
  );
}
