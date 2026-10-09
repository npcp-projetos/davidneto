import Form from "../components/form"

export default  function Contact() {

    return(
        <section id="contact" className="w-full h-screen  bg-secundary p-4">
            <div>
                <img src="" alt="" />
            </div>
            <div className="absolute right-0 w-2/3 mr-16">
                <h2 className="text-primary mt-10 mb-3 text-6xl anton-regular"><b> SEU CONTEÚDO MERECE UMA EDIÇÃO <span className="text-terciary">À ALTURA</span></b></h2>
                <p className="text-primary anton-regular">Preencha o formulário e vamos conversar <b>sobre o seu projeto.</b></p>  
                <Form />
            </div>
        </section>
    )
}