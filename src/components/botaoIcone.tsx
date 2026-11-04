
export function BotaoIcone({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center h-10 w-10 gap-2 px-4 py-2 bg-[#845D51] text-white rounded-full hover:bg-[#a17667] transition-colors duration-300"
    >
      <span className="text-white text-2xl">{children}</span>
    </a>
  );
}