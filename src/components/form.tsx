export default function Form() {
    
    return(
        <form className="bg-primary p-4 flex flex-col h-100 space-y-6 shadow-mist-500 shadow-md w-full max-sm:h-fit  rounded-xl">
            <div className="flex flex-row max-sm:flex-col space-y-6 space-x-4">
                <div className="flex flex-col gap-1 flex-1">
                    <label className="text-secundary anton-regular" htmlFor="email">NOME COMPLETO</label>
                    <input className="p-4 rounded-lg h-10 border-2 text-secundary border-secundary"  placeholder="Digite o seu nome"type="email" name="email" id="email" />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                    <label className="text-secundary anton-regular" htmlFor="social">REDE SOCIAL</label>
                    <input className="p-4 rounded-lg h-10 border-2 text-secundary border-secundary" placeholder="Digite seu username" type="text" name="social" id="social" />
                </div>
            </div>
            <div className="flex flex-row max-sm:flex-col space-y-6 space-x-4">
                <div className="flex flex-col gap-1 flex-1">
                    <label className="text-secundary anton-regular" htmlFor="telefone">TELEFONE</label>
                    <input className="p-4 rounded-lg h-10 border-2 text-secundary border-secundary" placeholder="(XX) XXXXX-XXXX" type="number" name="telefone" id="telefone" />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                    <label className="text-secundary anton-regular" htmlFor="conteudo">QUAL TIPO DE CONTEÚDO VOCÊ PRODUZ?</label>
                    <input className="p-4 rounded-lg h-10 border-2 text-secundary border-secundary" placeholder="Ex: Vlogs, Podcasts, Reels..." type="text" name="conteudo" id="conteudo" />
                </div>
            </div>
            <div className="flex flex-col gap-1 flex-1">
                <label className="text-secundary anton-regular" htmlFor="projeto">CONTE UM POUCO SOBRE O PROJETO</label>
                <textarea className="p-4 rounded-lg h-40 border-2 resize-none text-secundary border-secundary" placeholder="Ex: Vlogs, Podcasts, Reels..." name="projeto" id="projeto" rows={4} cols={50} />
            </div>
        </form>
    )
    
}