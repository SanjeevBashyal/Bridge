import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '../img/bridge.svg';
import Suspended from './Suspended';
import './BridgeInput.css'

const BridgeInput = () => {

    const collectData=(type)=>{
        if (type===1){
            let designer=document.getElementById("designer").value;
            let AL=document.getElementById("A").value;
            let BL=document.getElementById("B").value;
            let l=document.getElementById("Span").value;
            let WW=document.getElementById("walkway").value;
            ReactDOM.render(
                <Suspended designer={designer} AL={AL} BL={BL} l={l} WW={WW} />,
              document.getElementById('bridge')
            );
        }
    }


    const typeInput=()=>{
        let bridge_type=parseInt(document.getElementById("bridgeType").value);

        if(bridge_type===1){
            ReactDOM.render(
                <div className="bridgeInput">
                    <div className="leftRight" style={{width:'80%',float:'left',marginLeft:'10%',marginRight:'10%'}}>
                        <div className="leftInput" style={{float:'left'}}>
                            <label>Left Bank Saddle Elevation: </label>
                            <input type="number" id="A"/><br/>
                        </div>
                        <div className="rightInput" style={{float:'right'}}>
                            <label>Right Bank Ground Elevation: </label>
                            <input type="number" id="B"/><br/>
                        </div>
                    </div>
                    <div className="spanInput">
                    <label>Span: </label>
                        <input type="number" id="Span"/><br/>
                        <label>Walkway Width: </label>
                        <select defaultValue="0" name="Walkway" id="walkway">
                            <option value="0" disabled></option>
                            <option value="70">70 cm</option>
                            <option value="106">106 cm</option>
                        </select><br/><br/>
                        <button onClick={()=>{collectData(1)}}>Calculate</button>
                    </div>
                </div>,
            document.getElementById('bridgeTypeInput')
            );
        }

    }

    return (
        <div className="bridgeDesign">
            <a href="/"><img src={bridge} alt="Bridge" title="Bridge"/></a><br/><br/>
            <label id="designerLabel">Designer: </label>
            <input type="text" id="designer"/><br/>
            <label>Design Type: </label>
            <select defaultValue="0" name="Bridge Type" id="designType">
                <option value="0" disabled></option>
                <option value="1">Cables</option>
            </select><br/>
            <label>Bridge Type: </label>
            <select onChange={typeInput} defaultValue="0" name="Bridge Type" id="bridgeType">
                <option value="0" disabled></option>
                <option value="1">Suspended</option>
                <option value="2">Suspension</option>
            </select><br/><br/>
            <div id="bridgeTypeInput"></div>
            <div id="bridge"></div>
        </div>
        
      );
}
 
export default BridgeInput;