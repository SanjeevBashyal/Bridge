import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '../img/bridge.svg';
import SSTB_D from './SSTB_D';
import './BridgeInput.css'

const BridgeInput = () => {

    const collectData=(type)=>{
        if (type===1){
            let designer=document.getElementById("designer").value;
            let AL=document.getElementById("A").value;
            let AType=document.getElementById("leftGround").value;
            let ATower=document.getElementById("leftTower").value;
            let BL=document.getElementById("B").value;
            let BType=document.getElementById("rightGround").value;
            let BTower=document.getElementById("rightTower").value;
            let l=document.getElementById("Span").value;
            let WW=document.getElementById("walkway").value;
            ReactDOM.render(
                <SSTB_D designer={designer} AL={AL} AType={AType} ATower={ATower} BL={BL} BType={BType} BTower={BTower} l={l} WW={WW} />,
              document.getElementById('bridge')
            );
        }
    }

    const towerType=(position,towerList)=>{
        let groundLocation=position+"Ground";
        let groundType=parseInt(document.getElementById(groundLocation).value);
        if (groundType===1){
            towerInput(position, [2.4,3.4,4.4]);
        }
        else if (groundType===2){
            towerInput(position, [2.4]);
        }
        else if (groundType===3){
            towerInput(position, [2.0]);
        }

    }

    const towerInput=(position,towerList)=>{
        let towerLocation=position+"Tower";
        let positionTowerInput=towerLocation+"Input";
        ReactDOM.render(
            <div>
                <label>Tower Height:</label>
                <select defaultValue="0" name={towerLocation} id={towerLocation}>
                <option value="0" disabled></option>
                {
                    towerList.map((row)=>(
                        <option key={row} value={row}>{row+"m"}</option>
                    )

                    )
                }
                </select>
            </div>,
          document.getElementById(positionTowerInput)
        );
    }


    const typeInput=()=>{
        let bridge_type=parseInt(document.getElementById("bridgeType").value);

        if(bridge_type===1){
            ReactDOM.render(
                <div className="bridgeInput">
                    <div className="leftRight" style={{width:'80%',float:'left',marginLeft:'10%',marginRight:'10%'}}>
                        <div className="leftInput" style={{float:'left'}}>
                            <label>Left Bank Ground Elevation: </label>
                            <input type="number" id="A"/><br/>
                            <label>Left Bank Ground Type: </label>
                            <select onChange={()=>{towerType("left")}} defaultValue="0" name="leftGround" id="leftGround">
                                <option value="0" disabled></option>
                                <option value="1">Soil (Flat)</option>
                                <option value="2">Soil (Slope)</option>
                                <option value="3">Rock</option>
                            </select><br/>
                            <div id="leftTowerInput"></div>
                        </div>
                        <div className="rightInput" style={{float:'right'}}>
                            <label>Right Bank Ground Elevation: </label>
                            <input type="number" id="B"/><br/>
                            <label>Right Bank Ground Elevation: </label>
                            <select onChange={()=>{towerType("right")}} defaultValue="0" name="rightGround" id="rightGround">
                                <option value="0" disabled></option>
                                <option value="1">Soil (Flat)</option>
                                <option value="2">Soil (Slope)</option>
                                <option value="3">Rock</option>
                            </select><br/>
                            <div id="rightTowerInput"></div>
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
        else if (bridge_type===3){
            ReactDOM.render(
                <div className="bridgeInput">
                    <div className="leftRight" style={{width:'80%',float:'left',marginLeft:'10%',marginRight:'10%'}}>
                        <div className="leftInput" style={{float:'left'}}>
                            <label>Left Bank Ground Elevation: </label>
                            <input type="number" id="A"/><br/>
                            <label>Left Bank Ground Type: </label>
                            <select onChange={()=>{towerType("left")}} defaultValue="0" name="leftGround" id="leftGround">
                                <option value="0" disabled></option>
                                <option value="1">Soil (Flat)</option>
                                <option value="2">Soil (Slope)</option>
                                <option value="3">Rock</option>
                            </select><br/>
                            <div id="leftTowerInput"></div>
                        </div>
                        <div className="rightInput" style={{float:'right'}}>
                            <label>Right Bank Ground Elevation: </label>
                            <input type="number" id="B"/><br/>
                            <label>Right Bank Ground Elevation: </label>
                            <select onChange={()=>{towerType("right")}} defaultValue="0" name="rightGround" id="rightGround">
                                <option value="0" disabled></option>
                                <option value="1">Soil (Flat)</option>
                                <option value="2">Soil (Slope)</option>
                                <option value="3">Rock</option>
                            </select><br/>
                            <div id="rightTowerInput"></div>
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
                        <button onClick={()=>{collectData(3)}}>Calculate</button>
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
            <label>Bridge Type: </label>
            <select onChange={typeInput} defaultValue="0" name="Bridge Type" id="bridgeType">
                <option value="0" disabled></option>
                <option value="1">SSTB D</option>
                <option value="2">SSTB N</option>
                <option value="3">LSTB D</option>
                <option value="4">LSTB N</option>
            </select><br/><br/>
            <div id="bridgeTypeInput"></div>
            <div id="bridge"></div>
        </div>
        
      );
}
 
export default BridgeInput;