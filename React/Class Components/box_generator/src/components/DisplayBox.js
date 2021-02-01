

const DisplayBox = props => {
    const boxStyle = {
        background: props.color,
        margin: '10px',
        width: props.dimension + "px",
        height: props.dimension + "px"
    };

    return (
        <div style={boxStyle}/>
    );
};

export default DisplayBox;