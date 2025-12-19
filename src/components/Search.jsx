import exemplo1 from '../assets/exemplo1.jpg'
import exemplo2 from '../assets/exemplo2.jpg'
import exemplo3 from '../assets/exemplo3.jpg'
import exemplo4 from '../assets/exemplo4.jpg'

import { useState } from "react"

    export function Search({ onSearchName, onSearchIngredient }) {
    const [name, setName] = useState("")
    const [ingredient, setIngredient] = useState("")

    return (
        <section id="buscar">
        <div className="coluna-esquerda">
            <div id="blocoreceita">

            <form onSubmit={(e) => {
                e.preventDefault()
                onSearchName(name)
            }}>
                <p>
                <label>Receita:</label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Digite sua Receita"
                />
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpar" onClick={() => setName("")} />
                </p>
            </form>
                    <p style={{ textAlign: "center", color: "var(--AmareloSol)", fontSize: "1rem", margin: "5px" }}>
                        Que tal buscar uma receita pelo nome?
                    </p>
            <form onSubmit={(e) => {
                e.preventDefault()
                onSearchIngredient(ingredient)
            }}>
                <p>
                <label>Ingredientes:</label>
                <input
                    type="text"
                    value={ingredient}
                    onChange={e => setIngredient(e.target.value)}
                    placeholder="Digite seus Ingredientes"
                />
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpar" onClick={() => setIngredient("")} />
                </p>
            </form>

                    <p style={{ textAlign: "center", color: "var(--AmareloSol)", fontSize: "1rem", margin: "5px" }}>
                        Ou buscar uma receita pelos ingredientes que você tem?
                    </p>


            </div>
        </div>

        <div className="coluna-direita">
            <div className="galeria">
            <img src={exemplo1} />
            <img src={exemplo2} />
            <img src={exemplo3} />
            <img src={exemplo4} />
            </div>
        </div>
        </section>
    )
    }
