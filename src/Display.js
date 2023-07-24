import React from "react";
function Display(props) {
console.log(props);
const{name,age,place,phone}=props
// const {emailprop,passwordprop} = props

    return(
      //   <React.Fragment>
      // <h1>{emailprop}</h1>
      // <h1>{passwordprop}</h1>

      //   </React.Fragment>


      <h1>
        Name:{name}<br/>
        Age:{age}<br/>
        Place:{place}<br/>
        Phone:{phone}<br/><br/>
      </h1>
    )
}
export default Display