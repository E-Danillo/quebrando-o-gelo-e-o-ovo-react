import background from '../assets/background.webp'
import ovo from '../assets/ovo.png'

export function Header() {
    return (
        <header
        id="pagina-inicial"
        style={{
            background: `url(${background}) center/cover no-repeat`,
            backgroundAttachment: 'fixed',
        }}
        >
        <div id="bloco-de-titulo">
            <img src={ovo} alt="ovo" className="ovo" />
            <h1>
            Quebrando o Gelo <br />
            <span className="destaque">(E o ovo)</span>
            </h1>
            <p>Seu guia culinário</p>
        </div>
        </header>
    );
}
