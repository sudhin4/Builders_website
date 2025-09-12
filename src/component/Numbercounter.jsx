import { useEffect, useState } from "react";
import '../component/Fullpage.css'
function Numbercounter({target = 1000,duration=4000}){

    const [count,setcount] = useState(0);
    useEffect(()=>{
        let start = 0;
        const increment = target/(duration/20)
        const timer = setInterval(()=>{
            start +=increment;
            if(start>=target){
                clearInterval(timer)
                setcount(target);
            }else{
                setcount(Math.ceil(start))
            }
        },20)
        return()=>clearInterval(timer);
    },[target,duration]);



    return(
        <>
        
        <span className="numbercountsectinspan">{count}+</span>
        </>
    )
}
export default Numbercounter;