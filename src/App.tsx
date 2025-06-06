import './App.css'
import meatImg from './assets/meat.jpeg';
import cheeseImg from './assets/cheese.jpeg';
import saladImg from './assets/salad.jpeg';
import baconImg from './assets/bacon.jpeg';
import { useState} from "react";
import ProductButton from "./Components/ProductButton/ProductButton.tsx";
import IngredientName from "./Components/IngredientName/IngredientName.tsx";
import PlusButton from "./Components/PlusButton/PlusButton.tsx";
import Count from "./Components/Count/Count.tsx";
import RemoveIngredient from "./Components/RemoveIngredient/RemoveIngredient.tsx";

interface Ingredient {
    name: string,
    price: number,
    image: string
}

const App = () => {
    interface Element {
        props: {
            className: string,
        }
    }
    const [array, setArray] = useState<Element[]>([]);

    const [sum, setSum] = useState(50);

    const [ingredients, setIngredients] = useState([
        {name: 'Meat' , count: 0 , id: '1'},
        {name: 'Cheese' , count: 0, id: '2'},
        {name: 'Salad' , count: 0 , id: '3'},
        {name: 'Bacon' , count: 0 , id: '4'},
    ]);

    const products: Ingredient[] = [
        {name: "Meat", price: 100, image: meatImg},
        {name: "Cheese", price: 100, image: cheeseImg},
        {name: "Salad", price: 100, image: saladImg},
        {name: "Bacon", price: 100, image: baconImg}
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

    const totalSum = () => {
        products.map(item => {
             setSum(sum + item.price)
            console.log(item.price);
        })
    }

    const remover = (className: string) => {

        setIngredients((prevState) => {
            return prevState.map(ingredient => {
                products.map(item => {
                    setSum(sum - (item.price * array.length))
                })
                if (ingredient.name === className) {
                    return {
                        ...ingredient,
                        count: ingredient.count - ingredient.count,
                    }
                }
                return ingredient;
            })
        })

        const something = array.filter((item) => item.props.className !== className)
        setArray(something)
    }

    const adder = (name : string , id :string) => {
       const copyArray = [...array];
       copyArray.push(<div className={name} id={id}></div>)
        setArray(copyArray);
    }

    return (
    <div className="container">
        <div className="ingredientsBlock">
            <div className="image">
                {products.map((product) => (
                    <ProductButton image={product.image} adder={() => adder(product.name, product.name)} sum={totalSum}/>
                ))}
            </div>
            <div className="name">
                {products.map(product => (
                    <IngredientName name={product.name} />
                ))}
            </div>
            <div className="plusOne">
                {ingredients.map((ingredient) => (
                    <PlusButton sum={totalSum} name={ingredient.name} adder={() => {adder(ingredient.name, ingredient.id)}} id={ingredient.id} plusOne={() => {plusOne(ingredient.id)
                    adder(ingredient.name , ingredient.id)}}  />
                ))}
            </div>
            <div className="count">
                {ingredients.map((ingredient) => (
                    <Count count={ingredient.count}/>
                ))}
            </div>
            <div className="removeIngredient">
                {ingredients.map((ingredient) => (
                    <RemoveIngredient name={ingredient.name} removeIngredient={() => remover(ingredient.name)}/>
                ))}
            </div>
        </div>
        <div className="burgerBlock">
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {array.map((item) => (
                   item
                ))}
                <div className="BreadBottom"></div>
            </div>
            <div>{sum} price</div>
        </div>
    </div>
    )
}

export default App
