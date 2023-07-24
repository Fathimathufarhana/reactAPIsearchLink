import React from "react";
function Form1(props) {
    console.log(props);

    const{myfun}=props;

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onclick=(params)=> {
        params.preventDefault()
        myfun(email,password);

    }
    const emails=(params)=> {
        console.log(params.target.value);
        setEmail(params.target.value)

    }
    const passwords=(params) =>{
        console.log(params.target.value);
        setPassword(params.target.value)

    }



    return (
        <>
            <form onSubmit={onclick}>
                Email:
                <input onChange={emails} type="email" name="Email" />

            {
                email.length === 0 ? <span style={{color:'red'}}>  This field cannot be null</span> : ''
            }<br/><br/><br/>

                Password:
                <input onChange={passwords} type="password" name="Password" />

                {
                    password.length === 0? <span style={{color:'red'}} > Please enter password</span> : ''
                }<br /><br /><br />


                <input type="submit" placeholder='Submit' />


            </form>
            {/* <div >{email}</div>
            <div >{password}</div> */}


        </>
    )
}
export default Form1