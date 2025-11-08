export default function Footer() {
  return (
    <footer className="mt-24 border-t border-green-200 bg-white py-10 text-sm text-green-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-2">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} Gonzales & Pitondo. Conteúdo informativo conforme normas da OAB.
          </p>
          <p className="text-xs text-green-600">
            Este site não faz publicidade agressiva. Uso restrito a informação jurídica.
          </p>
        </div>
        <p className="text-xs text-green-600">
          Desenvolvido por <a href="https://avila.inc" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-800">Ávila.inc</a>
        </p>
      </div>
    </footer>
  );
}
