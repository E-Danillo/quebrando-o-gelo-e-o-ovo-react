import apresentacao from '../assets/apresentacao.png'

export default function Welcome() {
    return (
        <section id="bem-vindo">
        <div className="coluna-esquerda">
            <img
            className="box"
            src={apresentacao}
            alt="Ilustração de apresentação"
            />
        </div>

        <div className="coluna-direita">
            <div id="apresentacao">
            <h2>
                Bem vindo ao
                <strong className="destaque">
                {" "}Quebrando o Gelo (e o Ovo)
                </strong>
            </h2>
            <p>
                O site foi criado para os cozinheiros amadores de primeira viagem,
                para quem quer aproveitar os ingredientes da geladeira mas
                principalmente para quem quer cozinhar e não sabe o quê!
            </p>
            </div>
        </div>
        </section>
    )
    }
