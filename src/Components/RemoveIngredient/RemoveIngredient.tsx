import './RemoveIngredient.css';

interface IRemoveIngredient {
    removeIngredient: (name: string) => void;
    name: string
}

const RemoveIngredient = (props: IRemoveIngredient) => {
    return (
        <button className="removeIngredient" onClick={() => props.removeIngredient(props.name)}>
            remove
        </button>
    );
};

export default RemoveIngredient;