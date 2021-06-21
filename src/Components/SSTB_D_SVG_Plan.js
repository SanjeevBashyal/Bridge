import React from 'react';
import { useEffect,useRef,useState} from 'react';
import ReactDOM from 'react-dom';

const SSTB_D_SVG_Plan = (props) => {
    const scM=(x)=>{
        return x/100;
    }

    const r=4;
    const x0=50;
    const y0=5;
    const l=props.l;
    const WW=props.WW;
    const WWm=scM(WW);

    const idIndex=useRef(1);
    const idName=useRef("SSTB_D_SVG");
    const [sc,setSc]=useState(200);
    // console.log(l,WW)


    // useEffect(()=>{
    //     initialize();
    // },[]);

    // const initialize=()=>{
    //     WWm=scM(WW);
    // }



    const scale=(x)=>{
        if (x==1){
            let newsc=sc*1.2;
            setSc(newsc);
            console.log(WWm);
        }
        else if (x==0){
            let newsc=sc*0.8;
            setSc(newsc);
        }
    }


    const appendDiv=()=>{
        let varName="sstb"+idIndex.current;       
        
        ReactDOM.render(
            <div key={varName} id={varName}></div>,
          document.getElementById(idName.current)
        );
        idName.current=varName;
        idIndex.current=idIndex.current+1;
    }

    return ( 
        <div>
            <button onClick={()=>{scale(1)}}>+</button>
            <button onClick={()=>{scale(0)}}>-</button><br/><br/>
            <div id="SSTB_D_SVG"></div>
            <svg id={idName.current} width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" style={{width:sc,height:sc/r}}>
                <line  x1={x0} y1={y0} x2={x0+l} y2={y0} style={{strokeWidth:'0.1%',stroke:'black'}}/>
                <line  x1={x0} y1={y0+WWm} x2={x0+l} y2={y0+WWm} style={{strokeWidth:'0.1%',stroke:'black'}}/>
                <rect x={x0-0.4} y={y0-0.15} width="0.4" height="0.3" style={{strokeWidth:'0.05%',stroke:"black",fill:'none'}} />
                <rect x={x0-0.4} y={y0+WWm-0.15} width="0.4" height="0.3" style={{strokeWidth:'0.05%',stroke:"black",fill:'none'}} />
                <rect x={x0+l} y={y0-0.15} width="0.4" height="0.3" style={{strokeWidth:'0.05%',stroke:"black",fill:'none'}} />
                <rect x={x0+l} y={y0+WWm-0.15} width="0.4" height="0.3" style={{strokeWidth:'0.05%',stroke:"black",fill:'none'}} />

            </svg>

        </div>
    );
}
 
// vectorEffect="non-scaling-stroke"

export default SSTB_D_SVG_Plan;