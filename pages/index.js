import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Graph from '../components/graph';

export default function Home() {
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
            backgroundColor: 'rgb(305, 40, 100)',
            data: res3,
            borderColor: 'green',
            borderWidth: 2,
          }
        ]
      }
    );
  }


  return (
    <div>
      <h1 className="display-9 fw-bold py-10">검색하기</h1>

<div>
      <Link href="/search">
        <button 
          className="btn btn-success btn-lg ml-6">
          표 조회
        </button>
        </Link>

      <Link href="/search">
        <button 
          className="btn btn-success btn-lg ml-6">
          차트 조회
        </button>
        </Link>
        </div>


<br></br>
<div>
      <Link href="/search">
        <button 
          className="btn btn-success btn-lg ml-6">
          키워드
        </button>
        </Link>

        
      <Link href="/search">
        <button 
          className="btn btn-success btn-lg ml-6">
          카테고리
        </button>
        </Link>

        </div>

    <div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Link href="/setup">
        <button 
          className='btn btn-outline-secondary btn-lg ml-6'
          >
            관리자 페이지
        </button>
        </Link>
        
    </div>


    </div>
  )
}