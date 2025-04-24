import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData =[
    {
      "student_id": 1,
      "name": "Alice",
      "physics": 85,
      "chemistry": 90,
      "math": 88
    },
    {
      "student_id": 2,
      "name": "Bob",
      "physics": 78,
      "chemistry": 82,
      "math": 92
    },
    {
      "student_id": 3,
      "name": "Charlie",
      "physics": 92,
      "chemistry": 88,
      "math": 85
    },
    {
      "student_id": 4,
      "name": "David",
      "physics": 80,
      "chemistry": 75,
      "math": 90
    },
    {
      "student_id": 5,
      "name": "Emily",
      "physics": 88,
      "chemistry": 92,
      "math": 80
    },
    {
      "student_id": 6,
      "name": "Frank",
      "physics": 75,
      "chemistry": 80,
      "math": 88
    },
    {
      "student_id": 7,
      "name": "Grace",
      "physics": 90,
      "chemistry": 85,
      "math": 92
    },
    {
      "student_id": 8,
      "name": "Henry",
      "physics": 82,
      "chemistry": 78,
      "math": 85
    },
    {
      "student_id": 9,
      "name": "Isabella",
      "physics": 85,
      "chemistry": 90,
      "math": 88
    },
    {
      "student_id": 10,
      "name": "Jack",
      "physics": 78,
      "chemistry": 82,
      "math": 92
    }
  ]
  

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={300} data={resultData}>
                <XAxis dataKey={name}></XAxis>
                <YAxis></YAxis>
                
                <Line type="monotone" dataKey="math" stroke="green" />
                <Line type="monotone" dataKey="chemistry" stroke="red" />
                <Line type="monotone" dataKey="physics" stroke="blue" />
            </LineChart>
        </div>
    );
};

export default ResultsChart;