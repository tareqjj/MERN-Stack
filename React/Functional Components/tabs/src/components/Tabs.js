const Tabs = (props) => {
    const tabs = ["Tab 1 content is showing here.", "Tab 2 content is showing here.", "Tab 3 content is showing here."]

    const onClickHandler = (e, value) => {
        props.tabs(value);
    };

    const btnStyle = {
        margin: '10px',
        height: '50x',
        width:  '100px',
    };

    return tabs.map( (item, index) => {
        return <button style={btnStyle} key={ index } onClick={ e => onClickHandler(e, item) }>{ "Tab " + (index + 1) }</button>
    });
}

export default Tabs;