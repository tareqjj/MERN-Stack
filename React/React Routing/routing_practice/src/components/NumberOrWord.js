const NumberOrWord = props => {
    return isNaN(props.value) ? <p>The word is: { props.value }</p> : <p>The number is: { props.value }</p>
};

export default NumberOrWord;