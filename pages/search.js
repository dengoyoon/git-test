import MySearchBar from '@/components/MySearchBar';
import Link from 'next/link';
import Graph from '../components/graph';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Search() {
     

  let subject = 'My React';

  const [graphData, setGraphData] = useState({datasets : [ { type: '', label: '', borderColor: '',borderWidth: 0, data: [] } ] } )

  const searchItems = 
  [
    "가방",
    "여성가방"
      
]



 
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
          }
        ]
      }
    );
  }


    return (
        <div className="px-4 py-5 my-5 text-center">
                          <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">조회</li>
  </ol>
</nav>

              
              <h3 className="display-9 fw-bold py-10">[조회]</h3>
            <MySearchBar searchItems={searchItems}/>



        </div>
    );
};