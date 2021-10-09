import './BridgeCalcShow.css'

const BridgeCalcShow = (props) => {
    const designer=props.designer;
    const data=props.data;
    const cData=props.cData;
    console.log(data);
    return (
        <div className="calcShow">
            <br/>
            <h1>{designer}</h1>
            <h2>A. Cable Selection</h2>
            <p>Main Cables: {cData.cables[2] +"  𝜙" + cData.cables[3]}<br/>
            Handrail Cables: {cData.cables[0] +"  𝜙" + cData.cables[1]}</p>
            <h2>B. Cable Geometry</h2>
            <table className="results" border="1px">
                <tr>
                    <td>
                        Parameter
                    </td>
                    <td>
                        Unit
                    </td>
                    <td>
                        Dead Load Case
                    </td>
                    <td>
                        Hoisting Load Case
                    </td>
                    <td>
                        Full Load Case
                    </td>
                </tr>
                <tr><td>Span(l)</td><td>m</td>
                    {
                        data.map((row)=>(
                            <td>{row.l.toFixed(3)}</td>
                        )

                        )
                    }
                </tr>
                <tr><td>Sag(b)</td><td>m</td>
                    {
                        data.map((row)=>(
                            <td>{row.b.toFixed(3)}</td>
                        )

                        )
                    }
                </tr>
                <tr><td>Height Difference(h)</td><td>m</td>
                    {
                        data.map((row)=>(
                            <td>{row.h.toFixed(3)}</td>
                        )

                        )
                    }
                </tr>
                <tr><td>Modeling Equation</td><td>m</td>
                    {
                        data.map((row)=>(
                            <td>{row.geometry[0]}</td>
                        )

                        )
                    }
                </tr>
                <tr><td>eA</td><td>m</td>
                    {
                        data.map((row)=>(
                            <td>{row.geometry[1].toFixed(3)}</td>
                        )

                        )
                    }
                </tr>
                <tr><td>eB</td><td>m</td>
                    {
                        data.map((row)=>(
                            <td>{row.geometry[2].toFixed(3)}</td>
                        )

                        )
                    }
                </tr>
                <tr><td>fA</td><td>m</td>
                    {
                        data.map((row)=>(
                            <td>{row.geometry[3].toFixed(3)}</td>
                        )

                        )
                    }
                </tr>
                <tr><td>fB</td><td>m</td>
                    {
                        data.map((row)=>(
                            <td>{row.geometry[4].toFixed(3)}</td>
                        )

                        )
                    }
                </tr>
                <tr><td>𝜃a</td><td>°</td>
                    {
                        data.map((row)=>(
                            <td>{row.geometry[5].toFixed(3)}</td>
                        )

                        )
                    }
                </tr>
                <tr><td>𝜃b</td><td>°</td>
                    {
                        data.map((row)=>(
                            <td>{row.geometry[6].toFixed(3)}</td>
                        )

                        )
                    }
                </tr>
                <tr><td>Load (g)</td><td>kN/m</td>
                    {
                        data.map((row)=>(
                            <td>{row.g.toFixed(3)}</td>
                        )

                        )
                    }
                </tr>
                <tr><td>Horizontal Tension (H)</td><td>kN</td>
                    {
                        data.map((row)=>(
                            <td>{row.tension[0].toFixed(3)}</td>
                        )

                        )
                    }
                </tr>
                <tr><td>Maximum Tension (T)</td><td>kN</td>
                    {
                        data.map((row)=>(
                            <td>{row.tension[1].toFixed(3)}</td>
                        )

                        )
                    }
                </tr>
                <tr><td>Factor of Safety (S)</td><td>N/A</td>
                    {
                        data.map((row)=>(
                            <td>{row.safety.toFixed(3)}</td>
                        )

                        )
                    }
                </tr>
                
            </table>
            <h2>C. Cable Sag Calculation</h2>
            <h4>Calculation of Sag for hoisting load (g)={data[1].g.toFixed(3)} kN/m</h4>
            <table border="1px">
            <tr>
                    <td>
                        Iteration No.
                    </td>
                    <td>
                        bi
                    </td>
                    <td>
                        gi
                    </td>
                    <td>
                        bi+1
                    </td>
                    <td>
                        gh(gf)-gi
                    </td>
                </tr>
                {data[1].biter[0].map(
                    (arr)=>(
                        <tr>
                            <td>{arr[0].toFixed(0)}</td>
                            {arr.slice(1).map((ele)=>(
                                <td>{ele.toFixed(3)}</td>
                            )

                            )}
                        </tr>

                    )
                )}

            </table>
            
            <h3>Calculation of Sag for full load (g)={data[2].g.toFixed(3)} kN/m</h3>
            <table border="1px">
            <tr>
                    <td>
                        Iteration No.
                    </td>
                    <td>
                        bi
                    </td>
                    <td>
                        gi
                    </td>
                    <td>
                        bi+1
                    </td>
                    <td>
                        gh(gf)-gi
                    </td>
                </tr>
                {data[2].biter[0].map(
                    (arr)=>(
                        <tr>
                            <td>{arr[0].toFixed(0)}</td>
                            {arr.slice(1).map((ele)=>(
                                <td>{ele.toFixed(3)}</td>
                            )

                            )}
                        </tr>

                    )
                )}

            </table>
            <h2>D. Cable Profile</h2>
            <table className="results" border="1px">
                <tr>
                    <td>
                        X-Distance
                    </td>
                    <td>
                        Dead Load Profile
                    </td>
                    <td>
                        Hoisting Load Profile
                    </td>
                    <td>
                        Full Load Profile
                    </td>
                </tr>
                {
                    Array.from({length: Math.floor((cData.l-0.001)/10+1)}, (v, i) => i).map((i)=>(
                        <tr>
                                 <td>{10*i}</td>
                            {
                                data.map((row)=>(
                                    <td>{row.geometry[7][i]}</td>
                                )

                                )
                            }
                        </tr>
                    )
                    )
                }
                <tr>
                            <td>{cData.l}</td>
                    {
                        data.map((row)=>(
                            <td>{row.geometry[7][row.geometry[7].length-1]}</td>
                        )

                        )
                    }
                </tr>
            </table>
        </div>
      );
}
 
export default BridgeCalcShow;