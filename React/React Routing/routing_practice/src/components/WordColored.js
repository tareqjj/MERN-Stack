const WordColored = props => {
    const wordStyle = {
        background: props.backgroundColor,
        color: props.color
    };

    return isNaN(props.value) ? <p style={ wordStyle }>The Word is: {props.value}</p> : <p>{ props.value } is not a word!</p>
};

export default WordColored;