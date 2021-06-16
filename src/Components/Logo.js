import {useState,useRef} from 'react';
import './Logo.css'

const Logo = (props) => {
    const size=props.size;
    const id1=props.id1;
    const id2=props.id2;
    const [colourList,setColourList]=useState([0,30,60,90,120,150,180,210,240,270,300,330,360]);
    const interval_tracker=useRef(null);
    const hsl_value=useRef(0);

    const change =()=>{
        let val=hsl_value.current;
        val=val%361;
        // console.log(val);
        let a=[];
        let i=0;
        for (i=0;i<13;i++){
            a.push((val+i*30)%361);
        }
        setColourList(a);
        hsl_value.current=hsl_value.current-5;
    }

    const runThis=()=>{
        interval_tracker.current= setInterval(function(){change()},90)
    }

    const clearThis=()=>{
        clearInterval(interval_tracker.current);
        console.log(hsl_value);
        // console.log("Mouse leaved");
    }

    // useEffect(()=>{
    //     runThis();
    // },[]);
    
    


    return ( 
        <div className="logo_main">
            <div className="logo">
                <a href="https://lichal.com">
                    <svg onMouseEnter={runThis} onMouseLeave={clearThis} id="logo1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 384.765 402.9451">
                    <defs>
                    <linearGradient id={id1} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={"hsl(" + colourList[0]+",100%,50%)"}/>
                        <stop offset="17%" stopColor={"hsl(" + colourList[1]+",100%,50%)"}/>
                        <stop offset="34%" stopColor={"hsl(" + colourList[2]+",100%,50%)"}/>
                        <stop offset="50%" stopColor={"hsl(" + colourList[3]+",100%,50%)"}/>
                        <stop offset="66%" stopColor={"hsl(" + colourList[4]+",100%,50%)"}/>
                        <stop offset="82%" stopColor={"hsl(" + colourList[5]+",100%,50%)"}/>
                        <stop offset="100%" stopColor={"hsl(" + colourList[6]+",100%,50%)"}/>
                    </linearGradient>

                    <linearGradient id={id2} x1="1" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor={"hsl(" + colourList[6]+",100%,50%)"}/>
                        <stop offset="17%" stopColor={"hsl(" + colourList[7]+",100%,50%)"}/>
                        <stop offset="34%" stopColor={"hsl(" + colourList[8]+",100%,50%)"}/>
                        <stop offset="50%" stopColor={"hsl(" + colourList[9]+",100%,50%)"}/>
                        <stop offset="66%" stopColor={"hsl(" + colourList[10]+",100%,50%)"}/>
                        <stop offset="82%" stopColor={"hsl(" + colourList[11]+",100%,50%)"}/>
                        <stop offset="100%" stopColor={"hsl(" + colourList[12]+",100%,50%)"}/>
                    </linearGradient>

                    <linearGradient id="hue" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={"hsl(" + 0 +",50%,50%)"}/>
                        <stop offset="17%" stopColor={"hsl(" + 60 +",50%,50%)"}/>
                        <stop offset="34%" stopColor={"hsl(" + 120+",50%,50%)"}/>
                        <stop offset="50%" stopColor={"hsl(" + 180+",50%,50%)"}/>
                        <stop offset="66%" stopColor={"hsl(" + 240+",50%,50%)"}/>
                        <stop offset="82%" stopColor={"hsl(" + 300+",50%,50%)"}/>
                        <stop offset="100%" stopColor={"hsl(" + 360+",50%,50%)"}/>
                    </linearGradient>
                    </defs>
                        {/* <title>Lichal Corporation</title> */}
                        <path className="cls-1"
                            d="M344,503.8466v79.0985h78.7249a14.1213,14.1213,0,0,0-3.2154-4.5016,15.0558,15.0558,0,0,0-9.6462-3.8584H360.99a11.5637,11.5637,0,0,1-6.4308-3.8585,11.731,11.731,0,0,1-2.5723-8.36v-50.16a12.7606,12.7606,0,0,0-3.2154-5.1446C346.5431,504.898,345.1261,504.1279,344,503.8466Z"
                            transform="translate(-343 -181)" fill={"hsl(" + colourList[3]+",100%,50%)"}/>
                        <path className="cls-1"
                            d="M356.6621,556.3039V200.6392a22.4463,22.4463,0,0,1,13.7156,15.3233c-.4216,37.796-3.4413,311.7617-.0488,324.5529a23.3063,23.3063,0,0,0,4.0178,8.0384,25.47,25.47,0,0,0,12.0577,7.2347c9.7019,2.6827,129.668,2.5182,299.8346,0a26.6029,26.6029,0,0,1,15.2731,6.4307,25.4209,25.4209,0,0,1,5.6269,7.2346H365.5044a8.8423,8.8423,0,0,1-8.8423-8.8423Z"
                            transform="translate(-343 -181)" fill={"url(#"+id1+")"}/>
                        <path className="cls-1"
                            d="M726.765,261.0985V182H655.1423a14.2263,14.2263,0,0,0,2.888,4.5015,12.7374,12.7374,0,0,0,8.664,3.8585h43.8978a10.175,10.175,0,0,1,5.776,3.8585,12.7234,12.7234,0,0,1,2.31,8.36v50.16a13.101,13.101,0,0,0,2.888,5.1446A11.1682,11.1682,0,0,0,726.765,261.0985Z"
                            transform="translate(-343 -181)" fill={"hsl(" + colourList[9]+",100%,50%)"}/>
                        <path className="cls-1"
                            d="M713.57,208.0115V564.48a22.4463,22.4463,0,0,1-13.7156-15.3233c.4216-37.796,3.4414-312.5655.0488-325.3567a23.3086,23.3086,0,0,0-4.0178-8.0385,25.4716,25.4716,0,0,0-12.0577-7.2346c-9.7019-2.6827-130.4718-2.5182-300.6385,0a26.6029,26.6029,0,0,1-15.273-6.4307,25.4222,25.4222,0,0,1-5.627-7.2347H706.2682a7.3016,7.3016,0,0,1,7.3016,7.3016Z"
                            transform="translate(-343 -181)" fill={"url(#"+id2+")"} />
                        <path className="cls-2" d="M464,284.5726V465.7H646.6" 
                            transform="translate(-343 -181)" fill="none" stroke={"url(#"+id1+")"} strokeWidth="4px"/>
                        <path className="cls-2"
                            d="M646.6,465.7a32.3342,32.3342,0,0,0-7.3629-10.3081c-8.5-7.9293-18.8007-8.72-22.0887-8.8354H505.2323a26.4788,26.4788,0,0,1-14.7258-8.8355,26.8625,26.8625,0,0,1-5.89-19.1436V303.7161A29.07,29.07,0,0,0,464,284.5726"
                            transform="translate(-343 -181)" fill="none" stroke={"url(#"+id2+")"} strokeWidth="4px"/>
                        
                        {/* <path
                            d="M464,284.5726V465.7H646.6a32.3342,32.3342,0,0,0-7.3629-10.3081c-8.5-7.9293-18.8007-8.72-22.0887-8.8354H505.2323a26.4788,26.4788,0,0,1-14.7258-8.8355,26.8625,26.8625,0,0,1-5.89-19.1436V303.7161A29.07,29.07,0,0,0,464,284.5726Z"
                            transform="translate(-343 -181)" fill="white" stroke="red" strokeWidth="2px"/> */}
                    </svg>
                </a>
            </div>
            <div className="title">
                <div className="lichal">
                    <label>Lichal</label>
                </div>
                <div className="corp">
                    <label>Corporation</label>
                </div>
            </div>
            
        {/* <button onClick={runThis}>Click Me</button> */}
        </div>
     );
}
 
export default Logo;