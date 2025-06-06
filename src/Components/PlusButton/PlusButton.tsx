import './PlusButton.css';

interface Props {
    plusOne:(id: string) => void;
    id: string;
    adder: (name: string, id: string) => void;
    name: string;
    sum: () => void
}

const PlusButton = (props: Props) => {
    return (
        <div className="plusButton" onClick={props.sum}>
            <button  onClick={() =>{ props.plusOne(props.id);
                props.adder(props.name, props.id)}}>
                +1
            </button>
        </div>

    );
};

export default PlusButton;