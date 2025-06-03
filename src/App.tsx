import Ingredients from "./Components/Ingredients/Ingredients.tsx";
import Burger from "./Components/Burger/Burger.tsx";
import './App.css'
import meatImg from './assets/meat.jpeg';
import cheeseImg from './assets/cheese.jpeg';
import saladImg from './assets/salad.jpeg';
import baconImg from './assets/bacon.jpeg';
import {useState} from "react";
import ProductButton from "./Components/ProductButton/ProductButton.tsx";
import IngredientName from "./Components/IngredientName/IngredientName.tsx";

interface Ingredient {
    name: string,
    price: number,
    image: string
}

const App = () => {
    const [ingredients, setIngredients] = useState([
        {name: 'Meat' , count: 0},
        {name: 'Cheese' , count: 0},
        {name: 'Salad' , count: 0},
        {name: 'Bacon' , count: 0}
    ]);

    const products: Ingredient[] = [
        {name: "Meat", price: 100, image: meatImg},
        {name: "Cheese", price: 70, image: cheeseImg},
        {name: "Salad", price: 30, image: saladImg},
        {name: "Bacon", price: 80, image: baconImg}
    ]

    return (
    <div className="container">
        <div className="ingredientsBlock">
        <h3>ingredients</h3>
            {products.map(product => (
                <ProductButton image={product.image} />
            ))}
            {products.map(product => (
                <IngredientName name={product.name} />
            ))}
            <Ingredients />
        </div>
        <div className="burgerBlock">
            <h3>Burger</h3>
            <Burger />
        </div>
    </div>
  )
}

export default App
