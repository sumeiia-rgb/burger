import './ProductButton.css';

interface IProductButtonProps {
    image: string;
    adder: () => void;
    sum: () => void;
}

const ProductButton = (props: IProductButtonProps) => {
    return (
        <div>
            <button type={"button"} onClick={props.adder}>
                <img width="30px" height="30px" src={props.image} onClick={props.sum} alt="ingredient"/>
            </button>
        </div>

    );
};

export default ProductButton;