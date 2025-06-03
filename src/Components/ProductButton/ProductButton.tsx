import './ProductButton.css';

interface IProductButtonProps {
    image: string;
}

const ProductButton = (props: IProductButtonProps) => {
    return (
        <div>
            <button type={"button"}>
                <img width="30px" height="30px" src={props.image}/>
            </button>
        </div>

    );
};

export default ProductButton;