interface Step {
  title: string;
  content: React.ReactNode;
}

interface StepByStepProps {
  steps: Step[];
}

export default function StepByStep({ steps }: StepByStepProps) {
  return (
    <div className="my-6 flex flex-col gap-0">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paw text-sm font-bold text-white">
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className="w-0.5 flex-1 bg-trail/30" />
            )}
          </div>
          <div className="pb-6">
            <h4 className="font-display font-semibold text-cream">
              {step.title}
            </h4>
            <div className="mt-1 text-sm text-sand">{step.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
