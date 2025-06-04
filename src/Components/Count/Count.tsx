import './Count.css';

interface ICount {
    count: number;
}

const Count = (props: ICount) => {
    return (
        <div className="count">
            {props.count}
        </div>
    );
};

export default Count;