import './PlusButton.css';

interface Props {
    plusOne:(id: string) => void;
    id: string;
}

const PlusButton = (props: Props) => {
    return (
        <div className="plusButton">
            <button onClick={() => props.plusOne(props.id)}>
                +1
            </button>
        </div>

    );
};

export default PlusButton;