
export function BotaoIcone({children}: {children: React.ReactNode}) {
  return (
    <button className="flex items-center justify-center h-10 w-10 gap-2 px-4 py-2 bg-[#845D51] text-white rounded-full hover:bg-[#a17667] transition-colors duration-300">
      <span className="text-white text-2xl">{children }</span>
    </button>
  );
}