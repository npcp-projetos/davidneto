import Form from "../components/form"

export default  function Contact() {

    return(
        <section id="contact" className="w-full h-200 max-sm:h-250">
            <div className="flex justify-between w-full h-full max-sm:justify-center bg-secundary">
                <div className="max-sm:hidden">
                    <img className="h-full" src="public/imagem_david.png" alt="" />
                </div>
                <div className="flex flex-col w-3/5 max-sm:w-4/5 mr-16 max-sm:mr-4 sm:mt-10">
                        <h2 className="text-primary self-end mt-10 text-6xl  w-lg max-sm:w-80 max-sm:text-5xl max-sm:translate-x-2 max-sm:leading-14 leading-18 anton-regular"> SEU CONTEÚDO MERECE UMA EDIÇÃO <span className="text-terciary">À ALTURA</span></h2>
                        <p className="text-primary self-end mr-26 max-sm:mr-0 mt-5 mb-5 anton-regular">Preencha o formulário e vamos conversar <b>sobre o seu projeto.</b></p>  
                    <Form />
                </div>
            </div>
        </section>
    )
}