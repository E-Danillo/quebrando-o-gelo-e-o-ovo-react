    export function RecipeDetails({ recipe }) {
    if (!recipe) return null;

    const ingredientes = [];
    for (let i = 1; i <= 20; i++) {
        const ing = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ing && ing.trim() !== "") ingredientes.push(`${measure} ${ing}`);
    }

    const instrucoes = recipe.strInstructions
        ? recipe.strInstructions.split("\r\n").filter((p) => p.trim() !== "")
        : ["Instruções não disponíveis."];

    return (
        <div id="sua-receita">
        <div id="info-receita">
            <h2 id="titulo-receita">{recipe.strMeal}</h2>
            <div className="info-imagem">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>
                Categoria: {recipe.strCategory || "N/A"} | País: {recipe.strArea || "N/A"}
            </p>
            </div>

            <div id="ingredientes">
            <h3>Ingredientes</h3>
            <ul>{ingredientes.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
            </div>

            <div id="modo-de-preparo">
            <h3>Modo de Preparo</h3>
            <ol>{instrucoes.map((i, idx) => <li key={idx}>{i}</li>)}</ol>
            </div>
        </div>
        </div>
    );
    }
