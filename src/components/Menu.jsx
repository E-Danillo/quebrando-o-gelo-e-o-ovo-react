    import { useState } from "react"

    export function Menu() {
    const [open, setOpen] = useState(false)

    return (
        <section id="menu">
        <button id="btn-mobile" onClick={() => setOpen(!open)}>☰</button>

        <nav className={open ? "show" : ""}>
            <ol>
            <li><a href="#pagina-inicial">Página Inicial</a></li>
            <li><a href="#bem-vindo">Boas-Vindas</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#buscar">Buscar</a></li>
            <li><a href="#sua-receita">Sua Receita</a></li>
            </ol>
        </nav>
        </section>
    )
    }
