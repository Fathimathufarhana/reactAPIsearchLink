import Display from "./Display";


 const Map = () => {
    let arr =[
        {
            name:"Farhana",
            age:21,
            place:"calicut",
            phone:9087453898
        },
        {
            name:"Farhan",
            age:21,
            place:"calicut",
            phone:982141411   
        }
    ]
    console.log(arr);
 
 return (
    <>
    {
        arr.map((values) => {
            return(
                <Display name={values.name} age={values.age} place={values.place} phone={values.phone}/>
            )
        })
    }
    </>
 )

 }
 export default Map 