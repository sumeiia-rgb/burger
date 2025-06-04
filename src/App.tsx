import Burger from "./Components/Burger/Burger.tsx";
import './App.css'
import meatImg from './assets/meat.jpeg';
import cheeseImg from './assets/cheese.jpeg';
import saladImg from './assets/salad.jpeg';
import baconImg from './assets/bacon.jpeg';
import {useState} from "react";
import ProductButton from "./Components/ProductButton/ProductButton.tsx";
import IngredientName from "./Components/IngredientName/IngredientName.tsx";
import PlusButton from "./Components/PlusButton/PlusButton.tsx";
import Count from "./Components/Count/Count.tsx";

interface Ingredient {
    name: string,
    price: number,
    image: string
}

const App = () => {
    const [ingredients, setIngredients] = useState([
        {name: 'Meat' , count: 0 , id: '1'},
        {name: 'Cheese' , count: 0, id: '2'},
        {name: 'Salad' , count: 0 , id: '3'},
        {name: 'Bacon' , count: 0 , id: '4'},
    ]);

    const products: Ingredient[] = [
        {name: "Meat", price: 100, image: meatImg},
        {name: "Cheese", price: 70, image: cheeseImg},
        {name: "Salad", price: 30, image: saladImg},
        {name: "Bacon", price: 80, image: baconImg}
    ]

    const plusOne = (id: string) => {
        setIngredients((prevState) => {
            return prevState.map(ingredient => {
                if (ingredient.id === id) {
                    return {
                        ...ingredient,
                        count: ingredient.count + 1,
                    }
                }
                return ingredient;
            })
            })
    }
    return (
    <div className="container">
        <div className="ingredientsBlock">
        {/*<h3>ingredients</h3>*/}
            <div className="image">
                {products.map(product => (
                    <ProductButton image={product.image} />
                ))}
            </div>
            <div className="name">
                {products.map(product => (
                    <IngredientName name={product.name} />
                ))}
            </div>
            {/*<Ingredients />*/}
            <div className="plusOne">
                {ingredients.map((ingredient) => (
                    <PlusButton id={ingredient.id} plusOne={() => plusOne(ingredient.id)} />
                ))}
            </div>
            <div className="count">
                {ingredients.map((ingredient) => (
                    <Count count={ingredient.count}/>
                ))}
            </div>
        </div>
        <div className="burgerBlock">
            <h3>Burger</h3>
            <Burger />
        </div>
    </div>
  )
}

export default App
