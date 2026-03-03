import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-trail/20 bg-bark">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-xl text-cream">
          <Image
            src="/images/logo/haku-logo.webp"
            alt="Haku"
            width={28}
            height={28}
            className="rounded-full overflow-hidden"
          />
          <span>
            Haku&apos;s <span className="text-paw">Playground</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
