import { useState } from "react";
// import { act } from "react-dom/test-utils";
const Userbox = (prop) => {
   
    const {data}=prop;
    const {isExpand}=prop;
    console.log("getting data",data,isExpand);

 

    const [curr,setCurr]=useState(0);
    const [show,setShow]=useState(false);
    // let activeArr=[];
//   const [activeArr,setArr]=useState([]);
    // for(let i=0;i<data.length;i++)
    // {
    //     activeArr[i]=false;
    // }


 function toggleShow(i)
 {
//     console.log("in toggle show: active i val:",activeArr[i]," and i val is:",i);
//    let prev=activeArr;
//    prev[i]=!activeArr[i];
//    setArr(prev);



if(i===curr)
{
    setShow(!show);
}
else{
    setCurr(i);
    if(show===false)
    {
        setShow(true); 
    }
   
    // setShow(!show);
}
 }
 

  
    return ( 
    <div>
     {data.map((d,i)=>(
        <div className="user-box" key={d.id}>
        <div className="row-one">
            <h4 className="left-name" onClick={()=>{toggleShow(i)}} >{d.name}</h4>
            <h4 className="right-email" onClick={()=>{toggleShow(i)}}>{d.email}</h4>
        </div>
       {<div style={{display:curr===i&&show?"block":"none"}} className="row-two" >
           {d.body}
        </div>}
        {/* {<div style={{display:activeArr[i]?"block":"none"}} className="row-two" >
           {d.body}
        </div>} */}
      
    </div>
     ))}
     </div>
    
     );
}
 
export default Userbox; 