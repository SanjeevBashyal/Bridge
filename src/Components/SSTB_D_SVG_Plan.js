import React from 'react';
import { useEffect,useRef,useState} from 'react';
import ReactDOM from 'react-dom';

const SSTB_D_SVG_Plan = (props) => {
    const out=props.out;
    const data=props.data;
    const scM=(x)=>{
        return x/100;
    }

    const refreshSVG=()=>{
        // console.log(rSVG);
        let a=rSVG-0.001;
        setrSVG(a);
    }

    const r=4;
    const x0=5000;
    const y0=500;
    const l=data.l;
    const WW=data.WW;
    const Dcon=30;

    const idIndex=useRef(1);
    const idName=useRef("SSTB_D_SVG");
    const [sc,setSc]=useState(200);
    const [rSVG,setrSVG]=useState(0.4);

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
        }
        else if (x==0){
            let newsc=sc*0.8;
            setSc(newsc);
        }
    }

    const giveDcon=(inp="HBlock")=>{
        const HBlock=[760,760,760,760,760,760,760,760,760,760,760,760,760];
        const AncLength=[110,110,110,110,110,110,110,110,110,110,110,110];
        const reducedDcon=Dcon-21;
        return eval(inp+"["+reducedDcon+"]");
    }

    const HB=giveDcon("HBlock");



    // const appendDiv=()=>{
    //     let varName="sstb"+idIndex.current;       
        
    //     ReactDOM.render(
    //         <div key={varName} id={varName}></div>,
    //       document.getElementById(idName.current)
    //     );
    //     idName.current=varName;
    //     idIndex.current=idIndex.current+1;
    // }

    const line=(x1,y1,x2,y2,sw=0.5,sc="black",sd="")=>{

            return <line vectorEffect='non-scaling-stroke' x1={x1} y1={y1} x2={x2} y2={y2} style={{strokeWidth:sw+'%',stroke:sc,strokeDasharray:sd}}/>
    }

    const lineP=(x1,y1,x2,y2,sw=0.5,sc="black",sd="")=>{
        return <line x1={x1} y1={y1} x2={x2} y2={y2} style={{strokeWidth:sw+'px',stroke:sc,strokeDasharray:sd}}/>
    }

    const dLineP=(x1,y1,x2,y2,sw=0.5,sc="black",sd="0.1,0.1")=>{
        return <line x1={x1} y1={y1} x2={x2} y2={y2} style={{strokeWidth:sw+'px',stroke:sc,strokeDasharray:sd}}/>
    }

    const centerLine=(x1,y1,x2,y2,sd="15,10,5,10")=>{
        return <line vectorEffect='non-scaling-stroke' x1={x1} y1={y1} x2={x2} y2={y2} style={{strokeWidth:'0.4%',stroke:"black",strokeDasharray:sd}}/>
    }

    const path=(ls,sw=0.5,sc="black",sd="",f="none")=>{
        let p="";
        for (let i=0;i<ls.length;i++){
            p=p+ls[i][0]+ls[i][1]+" "+ls[i][2]+" ";
        }
        return <path vectorEffect="non-scaling-stroke" d={p} style={{strokeWidth:sw+'%',stroke:sc,strokeDasharray:sd,fill:f}}/>
    }

    const rect=(x,y,w,h,sw=0.5,sc="black",sd="",f="none")=>{
        return <rect vectorEffect="non-scaling-stroke" x={x} y={y} width={w} height={h} style={{strokeWidth:sw+'%',stroke:sc,strokeDasharray:sd,fill:f}} />
    }

    const rectp=(x1,y1,x2,y2,sw=0.5,sc="black",sd="",f="none")=>{
        return <rect vectorEffect="non-scaling-stroke" x={x1} y={y1} width={x2-x1} height={y2-y1} style={{strokeWidth:sw+'%',stroke:sc,strokeDasharray:sd,fill:f}} />
    }

    const rect3=(x,y,w,h,p,sw=0.4,sc="black")=>{
        let p1=[x,y,x+w,y];
        let p2=[x+w,y,x+w,y+h];
        let p3=[x+w,y+h,x,y+h];
        let p4=[x,y+h,x,y];
        let ps=[p1,p2,p3,p4];
        ps.splice(p-1,1);
        return[
            line(ps[0][0],ps[0][1],ps[0][2],ps[0][3],sw+'%',sc),
            line(ps[1][0],ps[1][1],ps[1][2],ps[1][3],sw+'%',sc),
            line(ps[2][0],ps[2][1],ps[2][2],ps[2][3],sw+'%',sc),
        ]

    }

    const rect3p=(x1,y1,x2,y2,p,sw=0.4,sc="black",sd="")=>{
        let p1=[x1,y1,x2,y1];
        let p2=[x2,y1,x2,y2];
        let p3=[x2,y2,x1,y2];
        let p4=[x1,y2,x1,y1];
        let ps=[p1,p2,p3,p4];
        ps.splice(p-1,1);
        return[
            line(ps[0][0],ps[0][1],ps[0][2],ps[0][3],sw,sc,sd),
            line(ps[1][0],ps[1][1],ps[1][2],ps[1][3],sw,sc,sd),
            line(ps[2][0],ps[2][1],ps[2][2],ps[2][3],sw,sc,sd),
        ]

    }

    const concreteRect=(x,y,w,h,sw=0.5,sc="black")=>{
        return [
            <defs>
                <pattern id="concrete" width="40%" height="20%">
                    {/* <polygon vectorEffect="non-scaling-stroke" points="0,0 0.05,0.05 0.1,0" style={{fill:"transparent",strokeWidth:'0.4%',stroke:sc}}/> */}
                    <path vectorEffect="non-scaling-stroke" d="M0 0 L0.05 0.05 L0.1 0 Z" style={{strokeWidth:rSVG+"%",stroke:sc,fill:"transparent"}}/>
                    <circle cx="0.2" cy="0.03" r="0.007%"/>
                </pattern>
            </defs>,
            rect(x,y,w,h,sw,sc,"","url(#concrete)")
        ]
    }
    
    const brickRect=(x,y,w,h,sw=0.5,sc="black")=>{
        return [
            <defs>
                <pattern id="brick" width="2%" height="1%">
                    {rect(0,0,2,1,0.4,"black","transparent")}
                </pattern>
            </defs>,
            rect(x,y,w,h,sw,sc,"url(#brick)")
        ]
    }
    

    const hCable=(dia,len,yoffset)=>{
        let HBlock=giveDcon("HBlock");
        let AncLength=giveDcon("AncLength");
        let cable1_x1=scM(x0-40-200);
        let cable1D_x1=scM(x0-40-HBlock+AncLength+20);
        let cable1D_x2=scM(x0-40-200-30);
        let cable1_y1=scM(y0+yoffset-15);
        let rot="rotate(180,"+scM(x0+l*100/2)+","+cable1_y1+")";

        return [
            <g id="handRail">
                <g id="handRailHalf">
                    {rect3p(cable1D_x1-0.2,cable1_y1-0.1,cable1D_x2+0.2,cable1_y1+0.1,2,2,"black","0.1,0.1")},
                    {path([["M",cable1D_x2+0.2,cable1_y1-0.1],["C",cable1D_x2+0.3,cable1_y1-0.05],["",cable1D_x2+0.3,cable1_y1+0.05],["",cable1D_x2+0.2,cable1_y1+0.1]],0.4,"black","0.1,0.1")},
                    {dLineP(cable1D_x1,cable1_y1,cable1D_x2,cable1_y1,scM(dia/10))},
                    {concreteRect(scM(x0-30),cable1_y1-0.15,0.6,0.3)},
                    {rect(scM(x0-15),cable1_y1-0.075,0.3,0.15,2,"black","","white")},
                    {lineP(cable1_x1,cable1_y1,scM(x0+l*100/2),cable1_y1,scM(dia/10))}
                </g>
                <use href="#handRailHalf" transform={rot} />
            </g>,
            <use x={0} y={2} href="#handRail" />
        ]

    }


    const mCable=(dia,len,n)=>{
        let cables=[];
        let HBlock=giveDcon("HBlock");
        let AncLength=giveDcon("AncLength");
        let cable1_x1=scM(x0+30);
        let cable1D_x1=scM(x0-40-HBlock+AncLength+20);
        let cable1D_x2=scM(x0+30);
        let cable1_y1=scM(y0);
        let rot="rotate(180,"+scM(x0+l*100/2)+","+(cable1_y1+0.85-(n)*0.1)+")";

        for (let i=0;i<n;i++){
            let cableD=dLineP(cable1D_x1,cable1_y1-i*0.1,cable1D_x2,cable1_y1-i*0.1,scM(dia/10));
            cables.push(cableD);
            let cableL=lineP(cable1_x1,cable1_y1-i*0.1,scM(x0+l*100/2),cable1_y1-i*0.1,scM(dia/10));
            cables.push(cableL);
        }

        return [
            <g id="mainCable">
                {concreteRect(scM(x0-20),cable1_y1-(n)*0.1,0.5,2-0.3)}
                <g id="mainCableHalf">
                    {rectp(cable1D_x1-0.2,cable1_y1-(n)*0.1,cable1D_x2-0.5,cable1_y1+0.1,0.6,"black","0.1,0.1")},
                    {rect(scM(x0-15),cable1_y1-(n)*0.1,0.3,(n+1)*0.1,2,"black","","white")},
                    {cables},

                    {dLineP(cable1D_x1,cable1_y1,cable1D_x2,cable1_y1,scM(dia/10))},
                    
                    {lineP(cable1_x1,cable1_y1,scM(x0+l*100/2),cable1_y1,scM(dia/10))}
                </g>
                <use x={0} y={1.7-(n+1)*0.1} href="#mainCableHalf" />,
                
            </g>,
            <use href="#mainCable" transform={rot} />,
            centerLine(scM(x0-HBlock-100),scM(y0-n*10+85),scM(x0+l*100+HBlock+100),scM(y0-n*10+85))

            // <use x={0} y={2} href="#mainCable" />
        ]

    }

    const drawCable=(cables)=>{
        const nHandRails=cables[0];
        const handRailSize=cables[1];
        const nMainCables=cables[2];
        const mainCableSize=cables[3];
        
        return [
            hCable(handRailSize,l,-10*nMainCables/2),
            mCable(mainCableSize,l,nMainCables/2)
        ];
        
    }

    const pattern=()=>{

    }

    return ( 
        <div>
            <button id="floatButton" onClick={()=>{scale(1)}} style={{position:"fixed",right:"10px",bottom:"10px"}}>+</button>
            <button id="floatButton" onClick={()=>{scale(0)}} style={{position:"fixed",right:"40px",bottom:"10px"}}>−</button><br/><br/>
            <button id="floatButton" onClick={refreshSVG} style={{position:"fixed",right:"70px",bottom:"10px"}}>R</button><br/><br/>
            <div id="test"></div>
            <svg onClick={line} id="SVGBridgePlan" width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" style={{width:sc,height:sc/r}}>
                {drawCable(data.cables)}
                {console.log(2)}

            </svg>
            

        </div>
    );
}
 
// vectorEffect="non-scaling-stroke"

export default SSTB_D_SVG_Plan;