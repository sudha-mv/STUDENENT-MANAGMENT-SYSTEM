import React, { useState } from "react";
import "../style/SecondPage.css"
import { Link } from "react-router-dom";
import first from "../img/1.webp"
import second from "../img/2.webp"
import third from "../img/3.webp"
import four from "../img/4.webp"
import five from "../img/5.webp"
import six from "../img/6.webp"
import seven from "../img/7.webp"
import eight from  "../img/8.webp"
import nine from "../img/9.webp"
import ten from "../img/10.webp"
import NavB from "./Nav";


function SecondPage() {
   const [sDate, setsDate] = useState(new Date());

   const findMonthDays = (y, m) => {
      return new Date(y, m + 1, 0).getDate();
   };

   const findFirstDay = (y, m) => {
      return new Date(y, m, 1).getDay();
   };

   const changeToPrevMonth = () => {
      setsDate((pDate) => {
         const pMonth = pDate.getMonth() - 1;
         const pYear = pDate.getFullYear();
         return new Date(pYear, pMonth);
      });
   };

   const changeToNextMonth = () => {
      setsDate((pDate) => {
         const nMonth = pDate.getMonth() + 1;
         const nYear = pDate.getFullYear();
         return new Date(nYear, nMonth);
      });
   };

   const handleDateClick = (date) => {
      setsDate(date);
   };

   const showCalendar = () => {
      const currDate = new Date();
      const y = sDate.getFullYear();
      const m = sDate.getMonth();
      const mDays = findMonthDays(y, m);
      const fDay = findFirstDay(y, m);

      const allDays = [];

      // For empty cells
      for (let p = 0; p < fDay; p++) {
         allDays.push(<div key = {`em-${p}`} className = "box empty"></div>);
      }

      // Show actual days
      for (let d = 1; d <= mDays; d++) {
         const date = new Date(y, m, d);
         const isSelected = sDate && date.toDateString() === sDate.toDateString();

         allDays.push(
            <div
               key = {`d-${d}`}
               className = {`box ${isSelected ? "selected" : ""}`}
               onClick = {() => handleDateClick(date)}
               >
               {d}
            </div>
         );
      }

      return allDays;
   };

   return (
      <div>
         <div className="mt-5 mb-5 ">
            <a href="" className="float-start" style={{textDecoration:"none"}}><h1><Link style={{textDecoration:"none"}} id="space" to="/FirstPage">&larr;</Link> </h1></a>
            <h1>Assignment</h1>
         </div>
         
      <center >
      <div className = "main shadow-lg p-3 mb-5 bg-body rounded" >
         <div className = "header">
            <button onClick = {changeToPrevMonth}> &#60; </button>
            <h2>
               {sDate.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
               })}
            </h2>
            <button onClick = {changeToNextMonth}> &#62;</button>
         </div>
         <div className = "body">{showCalendar()} </div>
            {sDate && (
               <div className = "selected-date">
                  Selected Date: {sDate.toLocaleDateString()}
               </div>
            )}
         </div>
         </center>
         
<center>
   <div className="mt-5 mb-5">
      <h1 className="text-start float-start ">Assignment(10)</h1>
      <p className="text-end">See all</p>
   </div>

<div className="p-3 mb-2 bg-light text-dark" style={{}} >
   <div><img src={first} className="float-start" style={{width:"70px"}} alt="" /></div> 
   <h5 style={{display:"inline-flex"}} >Theoretical Physics</h5>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati.</p>
   <a href="" style={{textDecoration:"none"}}><h6>📄 Downlode Pdf</h6></a>
   
</div>
<div className="p-3 mb-2 bg-light text-dark" style={{}} >
   <div><img src={second} className="float-start" style={{width:"70px"}} alt="" /></div> 
   <h5 style={{display:"inline-flex"}} >Mathemetics HomeTask</h5>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati.</p>
   <a href="" style={{textDecoration:"none"}}><h6>📄 Downlode Pdf</h6></a>
   
</div>
<div className="p-3 mb-2 bg-light text-dark" style={{}} >
   <div><img src={third} className="float-start" style={{width:"70px"}} alt="" /></div> 
   <h5 style={{display:"inline-flex"}} >Physical Exrcise</h5>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati.</p>
   <a href="" style={{textDecoration:"none"}}><h6>📄 Downlode Pdf</h6></a>
   
</div>
<div className="p-3 mb-2 bg-light text-dark" style={{}} >
   <div><img src={four} className="float-start" style={{width:"70px"}} alt="" /></div> 
   <h5 style={{display:"inline-flex"}} >Environmental studies</h5>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati.</p>
   <a href="" style={{textDecoration:"none"}}><h6>📄 Downlode Pdf</h6></a>
   
</div>
<div className="p-3 mb-2 bg-light text-dark" style={{}} >
   <div><img src={five} className="float-start" style={{width:"70px"}} alt="" /></div> 
   <h5 style={{display:"inline-flex"}} >General knowledge</h5>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati.</p>
   <a href="" style={{textDecoration:"none"}}><h6>📄 Downlode Pdf</h6></a>
   
</div>
<div className="p-3 mb-2 bg-light text-dark" style={{}} >
   <div><img src={six} className="float-start" style={{width:"70px"}} alt="" /></div> 
   <h5 style={{display:"inline-flex"}} >Art and Craft</h5>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati.</p>
   <a href="" style={{textDecoration:"none"}}><h6>📄 Downlode Pdf</h6></a>
   
</div>
<div className="p-3 mb-2 bg-light text-dark" style={{}} >
   <div><img src={seven} className="float-start" style={{width:"70px"}} alt="" /></div> 
   <h5 style={{display:"inline-flex"}} >Health and Physical Education</h5>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati.</p>
   <a href="" style={{textDecoration:"none"}}><h6>📄 Downlode Pdf</h6></a>
   
</div>
<div className="p-3 mb-2 bg-light text-dark" style={{}} >
   <div><img src={eight} className="float-start" style={{width:"70px"}} alt="" /></div> 
   <h5 style={{display:"inline-flex"}} >English</h5>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati.</p>
   <a href="" style={{textDecoration:"none"}}><h6>📄 Downlode Pdf</h6></a>
   
</div>
<div className="p-3 mb-2 bg-light text-dark" style={{}} >
   <div><img src={nine} className="float-start" style={{width:"70px"}} alt="" /></div> 
   <h5 style={{display:"inline-flex"}} >Hindhi</h5>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati.</p>
   <a href="" style={{textDecoration:"none"}}><h6>📄 Downlode Pdf</h6></a>
   
</div>
<div className="p-3 mb-2 bg-light text-dark" style={{}} >
   <div><img src={ten} className="float-start" style={{width:"70px"}} alt="" /></div> 
   <h5 style={{display:"inline-flex"}} >Kannada</h5>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati.</p>
   <a href="" style={{textDecoration:"none"}}><h6>📄 Downlode Pdf</h6></a>
   
</div>


</center>
<div>
   <NavB />
</div>
      </div>
   );
}

export default SecondPage;