import type { MDXComponents } from "mdx/types";
import Callout from "@/components/mdx/Callout";
import Checklist from "@/components/mdx/Checklist";
import ExpandableSection from "@/components/mdx/ExpandableSection";
import LessonObjective from "@/components/mdx/LessonObjective";
import HandsOnExercise from "@/components/mdx/HandsOnExercise";
import PawPrintCheck from "@/components/mdx/PawPrintCheck";
import KeyVocabulary from "@/components/mdx/KeyVocabulary";
import TipBox from "@/components/mdx/TipBox";
import WarningBox from "@/components/mdx/WarningBox";
import StepByStep from "@/components/mdx/StepByStep";
import NextUp from "@/components/mdx/NextUp";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // HTML element overrides for prose styling
    h1: (props) => (
      <h1
        className="mt-8 mb-4 font-display text-3xl font-bold text-cream"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="mt-8 mb-3 font-display text-2xl font-bold text-cream"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mt-6 mb-2 font-display text-xl font-semibold text-cream"
        {...props}
      />
    ),
    p: (props) => <p className="my-3 text-sand leading-relaxed" {...props} />,
    a: (props) => (
      <a
        className="text-paw underline decoration-paw/30 underline-offset-2 hover:decoration-paw transition-colors"
        {...props}
      />
    ),
    ul: (props) => (
      <ul className="my-3 ml-6 list-disc text-sand space-y-1" {...props} />
    ),
    ol: (props) => (
      <ol className="my-3 ml-6 list-decimal text-sand space-y-1" {...props} />
    ),
    li: (props) => <li className="text-sand leading-relaxed" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="my-4 border-l-4 border-trail/40 pl-4 italic text-dust"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="rounded bg-stone/60 px-1.5 py-0.5 font-mono text-sm text-easy"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="my-4 overflow-x-auto rounded-xl border border-trail/20 bg-earth p-4 font-mono text-sm text-sand"
        {...props}
      />
    ),
    hr: () => <hr className="my-8 border-trail/20" />,
    strong: (props) => <strong className="font-semibold text-cream" {...props} />,
    table: (props) => (
      <div className="my-4 overflow-x-auto">
        <table className="w-full text-sm text-sand" {...props} />
      </div>
    ),
    th: (props) => (
      <th
        className="border-b border-trail/30 px-3 py-2 text-left font-display font-semibold text-cream"
        {...props}
      />
    ),
    td: (props) => (
      <td className="border-b border-trail/10 px-3 py-2" {...props} />
    ),

    // Custom MDX components
    Callout,
    Checklist,
    ExpandableSection,
    LessonObjective,
    HandsOnExercise,
    PawPrintCheck,
    KeyVocabulary,
    TipBox,
    WarningBox,
    StepByStep,
    NextUp,

    ...components,
  };
}
