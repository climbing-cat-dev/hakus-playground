interface Term {
  term: string;
  definition: string;
}

interface KeyVocabularyProps {
  terms: Term[];
}

export default function KeyVocabulary({ terms }: KeyVocabularyProps) {
  return (
    <div className="my-6 rounded-xl border border-trail/20 bg-pebble/20 p-5">
      <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-medium">
        Key Vocabulary
      </h3>
      <dl className="flex flex-col gap-3">
        {terms.map(({ term, definition }) => (
          <div key={term}>
            <dt className="font-display font-semibold text-cream">{term}</dt>
            <dd className="mt-0.5 text-sm text-sand">{definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
