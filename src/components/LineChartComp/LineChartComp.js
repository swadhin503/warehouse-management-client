import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const LineChartComp = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (
        <div className="mt-5 mb-5 container">
            <h2 className="text-center">Our Sales Per Month</h2>
            <div className="mt-5 d-flex justify-content-center">
                <LineChart width={500} height={400} data={data}>
                <Line dataKey={'sell'}></Line>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                </LineChart>
            </div>
        </div>
        
    );
};

export default LineChartComp;