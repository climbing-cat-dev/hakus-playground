interface HandsOnExerciseProps {
  title: string;
  children: React.ReactNode;
}

export default function HandsOnExercise({
  title,
  children,
}: HandsOnExerciseProps) {
  return (
    <div className="my-6 rounded-xl border border-easy/30 bg-stone/40 p-5">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-lg">🛠️</span>
        <h3 className="font-display font-semibold text-easy">{title}</h3>
      </div>
      <div className="text-sm text-sand [&>p]:my-2 [&>ol]:ml-4 [&>ol]:list-decimal [&>ul]:ml-4 [&>ul]:list-disc">
        {children}
      </div>
    </div>
  );
}
