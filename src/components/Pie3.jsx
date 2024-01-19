import React from "react";
import {
	BarChart,
	Bar,
	XAxis
} from "recharts";

const Pie3 = () => {

	const data = [
		{ name: "Sat", students: 90 },
		{ name: "Mon", students: 70 },
		{ name: "Tue", students: 80 },
		{ name: "Wed", students: 90 },
		{ name: "Thu", students: 100 },
		{ name: "Fri", students: 50 },


	];

	return (
        <div className='shadow-lg p-3 mb-5 bg-white rounded'  style={{
            textAlign: "center",
            margin: "auto 10%",
        }}>
           <div style={{display:"flex",justifyContent:"space-around"}}>
            <div> <h3>Home work</h3></div>
            <div>Weekly</div>
           </div>
        <div className="d-flex justify-content-center" >
          
               
           
        <BarChart width={300} height={300} data={data}>
       

        <Bar w dataKey="students" fill="#FF007F"  barSize={20}/>
        <XAxis dataKey="name" />
        
    </BarChart>
 
    </div>
    </div>
	);
};

export default Pie3;
