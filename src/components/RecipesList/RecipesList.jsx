import { useEffect, useState } from 'react';
import RecipeListItem from './RecipeListItem';
const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        let recipeList = [
            {
                id: 1,
                title: 'Sazerac',
                imageURL: 'https://www.liquor.com/thmb/qAybJQUD4Cx2L1XvYj3HREQhXBQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sazerac-1500x1500-hero-62326d995cdb4a79a6a0a3bd4a98cef9.jpg',
                ingredients: [
                    {
                        "category": "whiskey",
                        "variant": "rye whiskey"
                    },
                    {
                        "category": "bitters",
                        "variant": "peychaud's bitters"
                    },
                    {
                        "category": "sweetener",
                        "variant": "sugar"
                    },
                    {
                        "category": "anisette",
                        "variant": "absinthe"
                    }
                ]
            },
            {
                "id": 2,
                "title": "Mint Julep",
                "imageURL": "https://www.liquor.com/thmb/gjBtqPZIm4V39QNZJhEVz8oztcQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mint-julep-720x720-primary-5e2063b906384479b345687201992bd0.jpg",
                "ingredients": [
                    {
                        "category": "whiskey",
                        "variant": "bourbon"
                    },
                    {
                        "category": "sweetener",
                        "variant": "simple syrup"
                    },
                    {
                        "category": "produce",
                        "variant": "mint"
                    }
                ]
            },
            {
                "id": 3,
                "imageURL": "",
                "title": "Salty Dog",
                "ingredients": [
                    {
                        "category": "gin"
                    },
                    {
                        "category": "citrus juice",
                        "variant": "grapefruit juice"
                    },
                    {
                        "category": "misc",
                        "variant": "salt"
                    }
                ]
            },
            {
                "id": 4,
                "title": "Ramos Gin Fizz",
                "imageURL": "https://www.liquor.com/thmb/RxHAEt8_h1K9rt6HriZ6auCizzY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__04__08140002__Ramos-Gin-Fizz-720x720-recipe-8c5c98e081b84cdd8d0a587de32d9573.jpg",
                "ingredients": [
                    {
                        "category": "gin",
                        "variant": "london dry gin"
                    },
                    {
                        "category": "carbonated beverage",
                        "variant": "club soda"
                    },
                    {
                        "category": "sweetener",
                        "variant": "simple syrup"
                    },
                    {
                        "category": "citrus juice",
                        "variant": "lemon juice"
                    },
                    {
                        "category": "citrus juice",
                        "variant": "lime juice"
                    },
                    {
                        "category": "milk",
                        "variant": "heavy cream"
                    },
                    {
                        "category": "egg",
                        "variant": "egg white"
                    }
                ]
            },
        ]
        setRecipes(recipeList);
    }, [])
    return (
        <div className="recipes-list">
            <h2>Recipe List</h2>
            <ol>
                {
                    recipes.map((recipe, index) => (
                        <RecipeListItem recipe={recipe} key={index} />
                    ))
                }
            </ol>
        </div>
    )
}

export default RecipesList;