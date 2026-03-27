const footerLinks = ["Status", "Privacy", "API Docs"]

export function Footer() {
  return (
    <footer className="w-full py-6 mt-auto border-t border-white/5 bg-[#131315] flex justify-between items-center px-10">
      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
        © 2026 Kinetic Monolith. All rights reserved.
      </p>
      
      <div className="flex gap-8">
        {footerLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="text-[10px] uppercase tracking-widest text-gray-600 hover:text-white transition-colors font-bold"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}