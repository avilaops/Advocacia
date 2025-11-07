import Link from "next/link";
import { Phone, ChatLines, Menu } from "iconoir-react";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-green-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-green-darker tracking-tight">
          Gonzales & Pitondo
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/areas" className="text-green-darker hover:text-green-800">
            Áreas
          </Link>
          <Link href="/equipe" className="text-green-darker hover:text-green-800">
            Equipe
          </Link>
          <Link href="/contato" className="text-green-darker hover:text-green-800">
            Contato
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:+5517981058013"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-green-darker hover:underline"
          >
            <Phone width={18} height={18} strokeWidth={1.5} />
            (17) 98105-8013
          </a>
          <a
            href="https://wa.me/5517981058013"
            className="inline-flex items-center gap-2 rounded-md bg-green-darker text-offwhite px-4 py-2 text-sm font-medium hover:bg-green-900"
          >
            <ChatLines width={18} height={18} strokeWidth={1.5} />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
