import React from 'react';
import { useEffect} from 'react';
import ReactDOM from 'react-dom';
import BridgeCalcShow from './BridgeCalcShow';
// import SSTB_D_SVG_Plan from './SSTB_D_SVG_Plan';

const Suspended = (props) => {
    const designer=props.designer;
    const AL=parseFloat(props.AL);
    const BL=parseFloat(props.BL);
    const l=parseFloat(props.l);
    const WW=parseInt(props.WW);

    // console.log(designer,AL,AType,ATower,BL,BType,BTower,l,WW);
    
    useEffect(()=>{
        calculate(designer,AL,BL,l,WW);
    },[designer,AL,BL,l,WW]);


    const sagCalc=(EA,l,bd,h,gd,g,lf)=>{
        let bi=bd;
        let gi=gd;
        if(lf===0){
            return [[[1,bi,gi,bi,0]],bi];
        }else if (lf===1){
            bi=0.93*bd;
        }else if (lf===2){
            bi=1.22*bd;
        }
        let Ld=lengthCalc(l,h,bd);
        let out=[];
        let i=1;
        let delg=g-gi;
        do {
            let row=[];
            row.push(i);
            row.push(bi);
            gi=(64*EA)/(3*(l**3)*Ld)*bi*(bi**2-bd**2)+(bi/bd)*gd;
            row.push(gi);
            bi=bd+(bi-bd)*(g-gd)/(gi-gd);
            row.push(bi);
            delg=g-gi;
            row.push(delg);
            out.push(row);
            i=i+1;
        }while(Math.abs(delg)>0.001);
        return [out, bi];

    }

    const lengthCalc=(l,h,b)=>{
        return l*(1+(8/3)*(b/l)**2+(1/2)*(h/l)**2);
    }
    
    const geometryCalc=(b,h,l,AL)=>{
        let A=(4*b)/(l**2);
        let B=(h-4*b)/l;
        let eA=(-B)/(2*A);
        let eB=l-eA;
        let bA=yCalc(A,B,eA);
        let bB=bA-h;
        let thetaA=Math.atan((4*b-h)/l)*180/Math.PI;
        let thetaB=Math.atan((4*b+h)/l)*180/Math.PI;

        let profile=[];
        for(let i=0;i<(l-0.001);i=i+10){
            let y=A*i**2+B*i+AL;
            profile.push(y.toFixed(3));
        }
        let y=A*l**2+B*l+AL;
        profile.push(y);

        return [A.toFixed(7)+"x^2"+B.toFixed(7)+"x",eA,eB,bA,bB,thetaA,thetaB,profile];

    }
    const yCalc=(A,B,x)=>{
        return A*x**2+B*x;
    }

    const loadCalc=(WW,HL,l)=>{
        let DL_add=null;
        if (WW===70){
            DL_add=0.41;
        }else if (WW===106){
            DL_add=0.56;
        }
        let DL=HL+DL_add;

        let LL=null;
        if (l<=50){
            LL=4;
        }else if (l>50){
            LL=3+50/l;
        }
        // let WL=0.6;
        let WL=0;
        let FL=DL+LL+WL;

        return [DL,HL,FL];

    }

    const giveCableData=(hI,mI,n)=>{
        let cS=[26,32,36,40];
        let cP=[129,195,247,305];
        let cT=[386,585,740,914];
        let cW=[2.51,3.80,4.81,5.94];
        let cA=[292,442,560,691];
        let A=2*cA[hI]+n*cA[mI];
        let P=2*cP[hI]+n*cP[mI];
        let T=2*cT[hI]+n*cT[mI];
        let W=2*cW[hI]+n*cW[mI];
        return [2,cS[hI],n,cS[mI],W,A,T,P];
    }

    const cableEstimator=(TT)=>{
        let cP=[129,195,247,305];
        for (let i=0;i<2;i++){
            for (let j=2;j<6;j+=2){
                if((2*cP[0]+j*cP[i])>TT){
                    return giveCableData(0,i,j);
                }
                if((2*cP[i]+j*cP[i])>TT){
                    return giveCableData(i,i,j);
                }
            }
        }


        for (let i=2;i<3;i++){
            for (let j=2;j<6;j+=2){
                if((2*cP[i-1]+j*cP[i])>TT){
                    return giveCableData(i-1,i,j);
                }
                if((2*cP[i]+j*cP[i])>TT){
                    return giveCableData(i,i,j);
                }
            }
        }

        for (let i=3;i<4;i++){
            for (let j=2;j<14;j+=2){
                if((2*cP[i-1]+j*cP[i])>TT){
                    return giveCableData(i-1,i,j);
                }
                if((2*cP[i]+j*cP[i])>TT){
                    return giveCableData(i,i,j);
                }
            }
        }
    }

    const loadEst=(l,b)=>{
        let FL=4.3+50/l;
        let H=(FL*(l**2))/(1.2*8*b);
        let T=H/Math.cos(18/180*Math.PI);
        console.log(H,T);
        return T;
    }

    const tensionCalc=(g,l,b,theta)=>{
        let H=(g*l**2)/(8*b);
        let T=H/Math.cos(theta*Math.PI/180);
        return [H,T];
    }

    const cableIdentifier=(WW,l)=>{
        if (WW===70){
            if (l<=50){
                return [2,26,2,26,10.04];
            }
            if (l<=90){
                return [2,26,2,32,12.62];
            }
            if (l<=100){
                return [2,26,4,26,15.06];
            }
            if (l<=120){
                return [2,26,4,32,20.22];
            }
        }else if (WW===106){
            if (l<=40){
                return [2,26,2,26,10.04];
            }
            if (l<=60){
                return [2,26,2,32,12.62];
            }
            if (l<=75){
                return [2,26,4,26,15.06];
            }
            if (l<=105){
                return [2,26,4,32,20.22];
            }
            if (l<=120){
                return [2,32,4,32,22.80];
            }
        }
    }

    const areaCalc=(ls)=>{
        let TA=null;
        let BL=null;
        let i=1;
        for(i=1;i<=2;i++){
            let area=null;
            let bl=null;
            let cs=ls[2*i-1];
            if(cs===13){
                area=73;
                bl=103;
            }else if (cs===26){
                area=292;
                bl=386;
            }else if (cs===32){
                area=442;
                bl=585;
            }else if (cs===36){
                area=560;
                bl=740;
            }else if (cs===40){
                area=691;
                bl=914;
            }
            TA+=ls[2*(i-1)]*area;
            BL+=ls[2*(i-1)]*bl;
        }
        return [TA,BL];
    }

    const calculate=(designer,AL,BL,l,WW)=>{
        // let warnings=[];
        let b=null;
        let cables=null;
        let h=(BL-AL);
        if(l<120){
            if(l<80){
                b=l/20;
                
            }else if(l>=80) {
                b=l/22;
            }
            cables=cableIdentifier(WW,l);
            let AB=areaCalc(cables);
            cables[5]=AB[0];
            cables[6]=AB[1];
        }
        else if(l>=120){
            b=l/22-h/4;
            let T=loadEst(l,b);
            cables=cableEstimator(T);
        }
        
        
        
        let HL=cables[4]*9.81/1000;
        
        let LC=loadCalc(WW,HL,l);
        let lf=[0,1,2];
        let EA=110*cables[5];
        let i=1;
        let out=[];
        let cData={};
        cData.h=h;
        cData.l=l;
        cData.WW=WW;
        cData.cables=cables;
        // console.log(EA);
        for(i=0;i<3;i++){
            let row={};
            row.l=l;
            row.biter=sagCalc(EA,l,b,h,LC[0],LC[i],lf[i]);
            row.h=h;
            row.b=row.biter[1];
            row.geometry=geometryCalc(row.b,h,l,AL);
            if(h>=0){
                row.theta=row.geometry[6];
            }else{
                row.theta=row.geometry[5];
            }
            row.g=LC[i];
            row.tension=tensionCalc(row.g,l,row.b,row.theta);
            row.safety=cables[6]/row.tension[1];
            out.push(row);
        }


        // console.log(out);
        ReactDOM.render(
              <BridgeCalcShow designer={designer} data={out} cData={cData}/>,
            document.getElementById("bridgeCalcShow")
          );

        // ReactDOM.render(
        //     <SSTB_D_SVG_Plan out={out} data={data}/>,
        //   document.getElementById("bridgeSvgPlan")
        // );



    }

    return (
        <div className="bridgeCalc">
            <div id="bridgeCalcShow"></div><br/><br/>
            <div id="bridgeSvgPlan"></div>
        </div>
        
      );
}
 
export default Suspended;