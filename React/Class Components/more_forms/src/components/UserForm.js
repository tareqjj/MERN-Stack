import {useState} from "react";


const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const handleInput = (e) => {
        if (e.target.id === "firstName") {
            if (e.target.value.length < 1)
                setFirstNameError("First Name is Required");
            else if (e.target.value.length < 2)
                setFirstNameError("First Name must be 2 characters or longer!");
            else {
                setFirstNameError("");
                setFirstName(e.target.value);
            }
        }

        else if (e.target.id === "lastName") {
            if (e.target.value.length < 1)
                setLastNameError("Last Name is Required");
            else if (e.target.value.length < 2)
                setLastNameError("Last Name must be 2 characters or longer!");
            else {
                setLastNameError("");
                setLastName(e.target.value);
            }
        }

        else if (e.target.id === "email") {
            if (e.target.value.length < 1)
                setEmailError("Email is Required");
            else if (e.target.value.length < 2)
                setEmailError("Email must be 2 characters or longer!");
            else {
                setEmailError("");
                setEmail(e.target.value);
            }
        }

        else
            handlePassword(e);
    }

    const handlePassword = (e) => {
        if (e.target.id === "password")
            setPassword(e.target.value);
        else
            setConfirmPassword(e.target.value);
        if (e.target.value.length < 1)
            setPasswordError("Password and/or Confirm Password is Required");
        else if (e.target.value.length < 8)
            setPasswordError("Password and/or Confirm Password must be 8 characters or longer!");
        else if (password !== confirmPassword)
            setPasswordError("Password and Confirm Password must match");
        else
            setPasswordError("");
    }

    return(
        <>
            <form onSubmit={ (e) => e.preventDefault() }>
                <div>
                    { firstNameError ?  <p style={{color:'red'}}>{ firstNameError }</p> : "" }
                    <label htmlFor={"firstName"}>First Name: </label>
                    <input type={"text"} id={"firstName"} onChange={ handleInput }/>
                </div>
                <div>
                    { lastNameError ?  <p style={{color:'red'}}>{ lastNameError }</p> : "" }
                    <label htmlFor={"lastName"}>Last Name: </label>
                    <input type={"text"} id={"lastName"} onChange={ handleInput }/>
                </div>
                <div>
                    { emailError ?  <p style={{color:'red'}}>{ emailError }</p> : "" }
                    <label htmlFor={"email"}>Email: </label>
                    <input type={"email"} id={"email"} onChange={ handleInput }/>
                </div>
                <div>
                    <label htmlFor={"password"}>Password: </label>
                    <input type={"text"} id={"password"} onChange={ handleInput }/>
                </div>
                { passwordError ?  <p style={{color:'red'}}>{ passwordError }</p> : "" }
                <div>
                    <label htmlFor={"confirmPassword"}>Confirm Password: </label>
                    <input type={"text"} id={"confirmPassword"} onChange={ handleInput }/>
                </div>
                <input type={"submit"} value={"Create User"}/>
            </form>
            <h1>Your Form Data</h1>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </>
    );
}

export default UserForm;


// const handleFirstName = (e) => {
//     setFirstName(e.target.value);
//     if (e.target.value.length < 1)
//         setFirstNameError("First Name is Required");
//     else if (e.target.value.length < 3)
//         setFirstNameError("First Name must be 2 characters or longer!");
//     else
//         setFirstNameError("");
// }
//
// const handleLastName = (e) => {
//     setLastName(e.target.value);
//     if (e.target.value.length < 1)
//         setLastNameError("Last Name is Required");
//     else if (e.target.value.length < 3)
//         setLastNameError("Last Name must be 2 characters or longer!");
//     else
//         setLastNameError("");
// }
//
// const handleEmail = (e) => {
//     setEmail(e.target.value);
//     if (e.target.value.length < 1)
//         setEmailError("Email is Required");
//     else if (e.target.value.length < 3)
//         setEmailError("Email must be 2 characters or longer!");
//     else
//         setEmailError("");
// }