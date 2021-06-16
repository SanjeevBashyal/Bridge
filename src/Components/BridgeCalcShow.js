import './BridgeCalcShow.css'

const BridgeCalcShow = (props) => {
    const designer=props.designer;
    const data=props.data;
    console.log(designer);
    return (
        <div className="calcShow">
            <p>{designer}</p>
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

            <h3>Calculation of Sag for hoisting load (g)={data[1].g.toFixed(3)} kN/m</h3>
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
                            {arr.map((ele)=>(
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
                            {arr.map((ele)=>(
                                <td>{ele.toFixed(3)}</td>
                            )

                            )}
                        </tr>

                    )
                )}

            </table>
        </div>
      );
}
 
export default BridgeCalcShow;