import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import Card from "./Card";
import Loading from "./Loading"
import { getCategories } from './api';
import "./style.css"
import { Link } from 'react-router-dom';

function Home() {

    const [categories, setCategories] = useState([]);
    // const [area, setArea] = useState([]);
    // console.log(categories.length,'cstegoties---');
    const [filterCount, setFilterCount] = useState(2);
    const [loading, setLoading] = useState(false)

    const getAllCategories = async () => {

        try {
            let response = await getCategories()
            let toConvetJSON = await response?.json();
            let filteredCategories = toConvetJSON?.meals?.filter((elements, index) => index < filterCount)
            setCategories(filteredCategories)
            setLoading(false)

        } catch (error) {

        }
    }


    useEffect(() => {
        setLoading(true)
        getAllCategories()

        return () => {

        }
    }, [filterCount])

    const handleSelectChange = (e) => {
        setFilterCount(e.target.value)
    }

    const ifSearchUpdateState = (argument) => {
        setCategories(argument)
    }



    return (
        <div style={{ textAlign: "center", paddingBottom: '5rem' }} >
            <SearchBox updateState={ifSearchUpdateState} />

            <select className='select-container' onChange={handleSelectChange}>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="14">14</option>
            </select>

            <div className="container">
                {
                    // console.log(categories.length, 'length of array')

                }
                {

                    loading ? <Loading /> :


                        categories?.length > 0 ?
                            categories?.map((item, index) => {

                                console.log(item, 'hhhhhhhhhhhhhh');
                                return (
                                    <Link to={`/product/${item.idMeal}`} key={index}>
                                        <Card data={item} key={index} />
                                    </Link>
                                )
                            })
                            :
                            <div className='notfound'> "NOT FOUND" </div>
                }
            </div>


        </div>
    )
}

export default Home