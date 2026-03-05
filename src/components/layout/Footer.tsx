import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-trail/20 bg-bark/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <div className="flex items-center gap-2 text-sm text-sand">
          <Image src="/images/logo/haku-logo.webp" alt="Haku" width={24} height={24} className="rounded-full" />
          <span>
            Haku&apos;s Playground — made by{" "}
            <a href="https://climbingcat.dev" target="_blank" rel="noopener noreferrer" className="text-cream underline decoration-dust/50 hover:decoration-cream transition-colors">
              climbing cat
            </a>
          </span>
        </div>
        <nav className="flex gap-4 text-sm text-dust" aria-label="Footer navigation">
          <Link href="/overview" className="hover:text-cream transition-colors">
            Course
          </Link>
          <Link href="/resources" className="hover:text-cream transition-colors">
            Resources
          </Link>
        </nav>
      </div>
    </footer>
  );
}
