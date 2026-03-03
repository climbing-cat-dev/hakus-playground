interface WarningBoxProps {
  children: React.ReactNode;
}

export default function WarningBox({ children }: WarningBoxProps) {
  return (
    <div className="my-4 rounded-xl border-l-4 border-alert/30 bg-alert/10 p-4">
      <p className="mb-1 flex items-center gap-2 font-display text-sm font-semibold text-alert">
        <span>⚠️</span> Warning
      </p>
      <div className="text-sm text-sand [&>p]:my-1">{children}</div>
    </div>
  );
}
