import {Component} from "react/cjs/react.production.min";

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {age: this.props.age}
    }
    render() {
        const {firstName, lastName, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={ () => this.setState({age: this.state.age + 1}) }>Increment Age by 1</button>
            </div>
        );
    }
}

export default PersonCard;