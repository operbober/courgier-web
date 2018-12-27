import * as React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const data = [
    {name: '10/12/2018', iPhoneSE: 63, LGQ6: 12 },
    {name: '11/12/2018', iPhoneSE: 50, LGQ6: 99},
    {name: '12/12/2018', iPhoneSE: 72, LGQ6: 70},
    {name: '13/12/2018', iPhoneSE: 32, LGQ6: 14},
    {name: '14/12/2018', iPhoneSE: 88, LGQ6: 33},
    {name: '15/12/2018', iPhoneSE: 90, LGQ6: 30},
    {name: '16/12/2018', iPhoneSE: 70, LGQ6: 25},
    {name: '17/12/2018', iPhoneSE: 43, LGQ6: 12 },
    {name: '18/12/2018', iPhoneSE: 50, LGQ6: 29},
    {name: '19/12/2018', iPhoneSE: 62, LGQ6: 40},
    {name: '20/12/2018', iPhoneSE: 32, LGQ6: 44},
    {name: '21/12/2018', iPhoneSE: 18, LGQ6: 33},
    {name: '22/12/2018', iPhoneSE: 40, LGQ6: 60},
    {name: '23/12/2018', iPhoneSE: 40, LGQ6: 75},
];

class Chart extends React.Component {


	public render() {


        return (
            <LineChart width={600} height={300} data={data}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="LGQ6" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="iPhoneSE" stroke="#82ca9d" />
            </LineChart>
        );
    }
}


export default Chart;
