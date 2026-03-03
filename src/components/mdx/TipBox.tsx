interface TipBoxProps {
  children: React.ReactNode;
}

export default function TipBox({ children }: TipBoxProps) {
  return (
    <div className="my-4 rounded-xl border-l-4 border-basecamp/30 bg-basecamp/10 p-4">
      <p className="mb-1 flex items-center gap-2 font-display text-sm font-semibold text-basecamp">
        <span>💡</span> Tip
      </p>
      <div className="text-sm text-sand [&>p]:my-1">{children}</div>
    </div>
  );
}
