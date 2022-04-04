import React, { useEffect, useState } from 'react';
import './Deshboard.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ComposedChart} from 'recharts';


const Deshboard = () => {
    const [chartdata, setChartdata]=useState([]);
    console.log(chartdata);


    useEffect(() =>{
        fetch("data1.json")
        .then((res) => res.json())
        .then((data) => setChartdata(data));
    },[])

      return (
          <div className='top-class'>

        <div width="100%" height="100%">
        <h2>SimpleBarChart</h2>
           <BarChart
          width={500}
          height={300}
          data={chartdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sell" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
        </div>


        <div width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={chartdata}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="sell" stroke="#ff7300" />
        </ComposedChart>
      </div>


    
        </div>
      );
      

};

export default Deshboard;