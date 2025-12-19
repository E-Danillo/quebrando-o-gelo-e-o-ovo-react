    export function RecipeList({ recipes, onSelect }) {
    if (!recipes || recipes.length === 0) return null;

    const limited = recipes.slice(0, 10);

    return (
        <div id="blocoreceita">
        <h3>Resultados da Busca ({limited.length} encontrados)</h3>
        <ul id="lista-resultados-busca-nome">
            {limited.map((r) => (
            <li key={r.idMeal}>
                <a
                href="#"
                className="link-receita-detalhe"
                onClick={(e) => {
                    e.preventDefault();
                    onSelect(r.idMeal);
                }}
                >
                {r.strMeal}
                </a>
            </li>
            ))}
        </ul>
        </div>
    );
    }
