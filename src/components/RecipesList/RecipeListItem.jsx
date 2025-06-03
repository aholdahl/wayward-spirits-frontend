export default function RecipeListItem({recipe}) {
    const renderIngredients = (ingredients) => {
        let list = ingredients.map(ingredient => {
            return ingredient.variant || ingredient.category
        })
        return list.join(", ")
    }
    return (
        <li className="recipe-list-item" key={recipe.id}>
            <img src={recipe.imageURL || '/logo192.png'} alt={recipe.title} />
            <div>
                <h3>{recipe.title}</h3>
                <p>{renderIngredients(recipe.ingredients)}</p>{/* TODO: order ingredients by quantity */}
                <a href={`/recipes/${recipe.id}`}>View Recipe</a>
            </div>
        </li>
    )
}