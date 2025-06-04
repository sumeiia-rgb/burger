import './RemoveIngredient.css';

interface IRemoveIngredient {
    removeIngredient: (id: string) => void;
    id: string
}

const RemoveIngredient = (props: IRemoveIngredient) => {
    return (
        <button className="removeIngredient" onClick={() => props.removeIngredient(props.id)}>
            remove
        </button>
    );
};

export default RemoveIngredient;