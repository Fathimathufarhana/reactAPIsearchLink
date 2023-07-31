import React, { useEffect, useState } from "react";
import Card from "./Card"


function Fetch() {

    const [value, setValue] = useState([])
    const getData = async () => {


        let response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        let toCovertJSON = await response.json();
        console.log(toCovertJSON, 'toCovertJSON');
        setValue(toCovertJSON);

    }
    useEffect(() => {
        getData();
    }, [])


    return (
        <div>
            {
                value.map((items) => {
                    return (
                        <Card data={items} />
                    )
                })
            }
        </div>
    )
}
export default Fetch