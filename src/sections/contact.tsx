import Form from "../components/form"

export default  function Contact() {

    return(
        <section id="contact" className="w-full h-screen  bg-">
            <div className="flex justify-between w-full h-full bg-secundary">
                <div className="">
                    <img className="h-full" src="public/imagem_david.png" alt="" />
                </div>
                <div className="flex flex-col right-0 w-3/5 mr-16 mt-10">
                        <h2 className="text-primary self-end relative right-0 mt-10 text-6xl w-lg leading-18 anton-regular"> SEU CONTEÚDO MERECE UMA EDIÇÃO <span className="text-terciary">À ALTURA</span></h2>
                        <p className="text-primary self-end relative right-0 mr-26 mt-5 mb-5 anton-regular">Preencha o formulário e vamos conversar <b>sobre o seu projeto.</b></p>  
                    <Form />
                </div>
            </div>
        </section>
    )
}