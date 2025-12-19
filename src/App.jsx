import { useState } from "react"
import { API } from "./services/api"
import { Menu } from "./components/Menu"
import { Search } from "./components/Search"
import { RecipeList } from "./components/RecipeList"
import { RecipeDetails } from "./components/RecipeDetails"
import { Header } from "./components/header"
import Welcome from "./components/Welcome"
import Contact from "./components/Contact"

function App() {
  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  async function searchByName(name) {
    const res = await fetch(API.SEARCH_NAME + name)
    const data = await res.json()
    setRecipes(data.meals || [])
  }

  async function searchByIngredient(ingredient) {
    const res = await fetch(API.SEARCH_INGREDIENT + ingredient)
    const data = await res.json()
    setRecipes(data.meals || [])
  }

  async function loadDetails(id) {
    const res = await fetch(API.LOOKUP + id)
    const data = await res.json()
    setSelectedRecipe(data.meals[0])
    document.getElementById("sua-receita")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Header />
      <Welcome />
      <Contact />
      <Menu />
      <Search
        onSearchName={searchByName}
        onSearchIngredient={searchByIngredient}
      />
      <RecipeList recipes={recipes} onSelect={loadDetails} />
      <RecipeDetails recipe={selectedRecipe} />
    </>
  )
}

export default App
