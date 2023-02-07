import { useState } from "react";
const Clock =()=>{
    let time =new Date().toLocaleTimeString();
    let day = `${new Date().getFullYear()}/0${new Date().getMonth() +1}/0${new Date().getDate()}`
    const [currentTime,setCurrentTime] = useState(time)
    const updateTime = () =>{
        let time = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }
    setInterval(updateTime,1000)

    return(
        <div className="text-[#f7941d]">
             <span>{currentTime}</span>
             &nbsp;
             &nbsp;
             <span>{day}</span>
        </div>   
    )
}
export default Clock