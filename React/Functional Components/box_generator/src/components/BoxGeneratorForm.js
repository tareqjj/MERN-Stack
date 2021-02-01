import {useState} from "react";

const BoxGeneratorForm = (props) => {
  const [color, setColor] = useState("");
  const [dimension, setDimension] = useState("");

  const handleSubmit = e => {
      e.preventDefault();
      props.onNewBox(color, dimension);
      setColor("");
      setDimension("");
  };

  return (
      <form onSubmit={ handleSubmit }>
          <label htmlFor={"color"}>Color : </label>
          <input type={"text"} id={"color"} onChange={ e => setColor(e.target.value) } value={color}/>
          <label htmlFor={"dimension"}> Dimension : </label>
          <input type={"number"} id={"dimension"} onChange={ e => setDimension(e.target.value) } value={dimension}/>
          <input type={"submit"} value={"Add"}/>
      </form>
  );
};

export default BoxGeneratorForm;