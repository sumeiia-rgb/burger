import './IngredientName.css';

interface IngredientNameProps {
    name: string;
}

const IngredientName = (props: IngredientNameProps) => {
    return (
        <div className="IngredientName">
            {props.name}
        </div>
    );
};

export default IngredientName;