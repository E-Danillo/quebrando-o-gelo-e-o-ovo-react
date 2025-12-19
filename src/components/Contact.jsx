import contato from '../assets/contato.png'

function Contact() {
    return (
        <section id="contato">
        <div className="coluna-esquerda">
            <div id="contato-info">
                <h2>Entre em contato!"</h2>
                <ul>
                    <li>Rua Alegre, 123, Cidade Brasileira</li>
                    <li>Tel: (12) 3456-7890</li>
                    <li>ola@grandesite.com.br</li>
                </ul>
                <h2>Me acompanhe nas redes</h2>
            </div>
            <ul className="redes">
                <li><a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook fa-2x"></i></a></li>
                <li><a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram fa-2x"></i></a></li>
                <li><a href="https://youtube.com" target="_blank"><i className="fa-brands fa-youtube fa-2x"></i></a></li>
                <li><a href="https://wa.me/5500000000000" target="_blank"><i className="fa-brands fa-whatsapp fa-2x"></i></a></li>
            </ul>
        </div>
        <div className="coluna-direita">
            <img src={contato} alt="Ilustração de contatos do site"/>
        </div>
    </section>
    )
}

export default Contact