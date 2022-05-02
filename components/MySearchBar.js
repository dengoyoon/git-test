//import React, { useState } from "react"
//import "./MySearchBar.css"
import Link from 'next/link';
import Graph from '../components/graph';
import axios from 'axios';
import { useState, useEffect } from 'react';


const MySearchBar = (props) => {
    const [graphData, setGraphData] = useState({datasets : [ { type: '', label: '', borderColor: '',borderWidth: 0, data: [] } ] } )
    let url = "/api/search-trend";
    const getConvertToXY = (array) =>{
        var resArr = [];
    
        array.forEach(element => {
          resArr.push({x: element.period, y: element.ratio});
        });
    
        return resArr;
      }
    
      const postAPI = async() => {
    
        const result = await axios.get(url);
        console.log("result data", result.data);
    
        let res1 = getConvertToXY(result.data.results[0].data);
        let res1title = result.data.results[0].title
        let res2 = getConvertToXY(result.data.results[1].data);
        let res2title = result.data.results[1].title
        let res3 = getConvertToXY(result.data.results[2].data);
        let res3title = result.data.results[2].title
    
        console.log(res1);
    
        setGraphData(
          {
            // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            // labels 대신 아래와 같이 각각의 데이터의 x값을 개별적으로 전달해줍니다.
            datasets: [
              {
                type: 'line',
                label: res1title,
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 2,
                data: res1,
              },
              {
                type: 'line',
                label: res2title,
                backgroundColor: 'rgb(255, 99, 132)',
                data: res2,
                borderColor: 'red',
                borderWidth: 2,
              },
              {
                type: 'line',
                label: res3title,
                backgroundColor: 'green',
                data: res3,
                borderColor: 'green',
                borderWidth: 2,
              }
            ]
          }
        );
      }
 

    const products = props.searchItems;


    // console.log(global);

    const [searchValue, setSearchValue] = useState("");
 
    const handleInputClear = () => {

        console.log(searchValue);
       // addSearchValue(searchValue);

        setSearchValue("")

    }
    const handleInputChange = (event) => {

        // console.log(event.target.value);        

        setSearchValue(event.target.value)

    }

 
    const shouldDisplayButton = searchValue.length >= 0;

  

    // products.map((product) => {

    //     console.log(product);

    // });

 

    const filteredProducts = products.filter((product) => {

        return product.includes(searchValue);

    })

    return(


        <div className="searchBar">


            <input type="text" value={searchValue} placeholder="search value" style = {{fontSize:"17px"}}  onChange={handleInputChange} />

            {shouldDisplayButton && <button onClick={ ()=> { handleInputClear() ; postAPI() } } >[검색]</button>}

            

            <ul>

                {filteredProducts.map((product) => {

                    return (<li key={product}>{product}</li>)

                })}

            </ul>

            <Graph data={graphData}/>
 

        </div>

    )

    

}

 

export default MySearchBar;