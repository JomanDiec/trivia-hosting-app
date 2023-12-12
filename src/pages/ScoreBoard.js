import * as React from "react";

function ScoreBoard() {
    return (
        <>
            <div className="scoreboard">
                <div className="round1">
                    <p><a href='/'>Round 1</a></p>
                    <table className="table is-bordered">
                        <thead style={{ fontWeight: 'bold' }}>
                            <tr>
                                <td style={{ padding: '5px' }}>Team</td>
                                <td style={{ padding: '5px' }}>Question1</td>
                                <td style={{ padding: '5px' }}>Question2</td>
                                <td style={{ padding: '5px' }}>Question3</td>
                                <td style={{ padding: '5px' }}>Question4</td>
                                <td style={{ padding: '5px' }}>Question5</td>
                                <td style={{ padding: '5px' }}>Question6</td>
                                <td style={{ padding: '5px' }}>Question7</td>
                                <td style={{ padding: '5px' }}>Question8</td>
                                <td style={{ padding: '5px' }}>Question9</td>
                                <td style={{ padding: '5px' }}>Question10</td>
                                <td style={{ padding: '5px' }}>Question11</td>
                                <td style={{ padding: '5px' }}>Subtotal</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="team1">
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                                <td>4</td>
                                <td>0</td>
                                <td>1</td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>3</td>
                                <td>4</td>
                                <td>0</td>
                                <td>26</td>
                            </tr>
                            <tr className="team2">
                                <td>2</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                                <td>4</td>
                                <td>4</td>
                                <td>0</td>
                                <td>2</td>
                                <td>1</td>
                                <td>3</td>
                                <td>0</td>
                                <td>2</td>
                                <td>23</td>
                            </tr>
                            <tr className="team3">
                                <td>3</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr className="team4">
                                <td>4</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="round2">
                    {/* will need to change the url later on: */}
                    <p><a href='/'>Round 2</a></p>
                </div>
                <div className="round3">
                    {/* will need to change the url later on: */}
                    <p><a href='/'>Round 3</a></p>
                </div>
            </div>
        </>
    )
}

export default ScoreBoard;