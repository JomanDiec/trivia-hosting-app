import NavComponent from "./navComponent";
import React, { useState } from "react";

function Questions() {
    const [questionVisibility, setQuestionVisibility] = useState({
        question1: true,
        question2: true,
        question3: true,
    });

    const toggleQuestionVisibility = (question) => {
        setQuestionVisibility((prevVisibility) => ({
            ...prevVisibility, [question]: !prevVisibility[question],
        }));
    };

    return (
        <>
            <NavComponent />
            <br />
            <div className="questions">
                <table>
                    <thead>
                        <tr>
                            <td style={{ fontWeight: 'bold', paddingRight: '40px' }}>Question Number</td>
                            <td style={{ fontWeight: 'bold', paddingRight: '40px' }}>Display Question</td>
                            <td style={{ fontWeight: 'bold', paddingRight: '40px' }}>Display Answer</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="has-text-success">
                                <a onClick={() => toggleQuestionVisibility('question1')}>Question1</a>
                            </td>
                            <td>
                                <button>OFF/ON</button>
                            </td>
                            <td>
                                <div className="select is-link">
                                    <select>
                                        <option>Hidden</option>
                                        <option>Open Submissions</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        {questionVisibility.question1 && (
                            <>
                                <p>Was Satan from Hell?</p>
                                <p><b>Correct Answer(s): No</b></p>
                                <table className="table is-bordered">
                                    <thead>
                                        <tr>
                                            <td style={{ paddingRight: '40px' }}>Team</td>
                                            <td style={{ paddingRight: '40px' }}>Answer</td>
                                            <td style={{ paddingRight: '40px' }}>Correct?</td>
                                            <td style={{ paddingRight: '40px' }}>Points</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Team1</td>
                                            <td>no</td>
                                            <td>
                                                <label className="checkbox">
                                                    <input type='checkbox' />
                                                </label>
                                            </td>
                                            <td>
                                                <label className="points">
                                                    <input type='number' style={{ width: '40px' }} />
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Team2</td>
                                            <td>maybe</td>
                                            <td>
                                                <label className="checkbox">
                                                    <input type='checkbox' />
                                                </label>
                                            </td>
                                            <td>
                                                <label className="points">
                                                    <input type='number' style={{ width: '40px' }} />
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Team3</td>
                                            <td>yes</td>
                                            <td>
                                                <label className="checkbox">
                                                    <input type='checkbox' />
                                                </label>
                                            </td>
                                            <td>
                                                <label className="points">
                                                    <input type='number' style={{ width: '40px' }} />
                                                </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        )}
                        <tr>
                            <td className="has-text-primary">
                                <a onClick={() => toggleQuestionVisibility('question2')}>Question2</a>
                            </td>
                            <td><button>OFF/ON</button></td>
                            <td>
                                <div className="select is-link">
                                    <select>
                                        <option>Hidden</option>
                                        <option>Open Submissions</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        {questionVisibility.question2 && (
                            <>
                                <p>Did Adam have a belly button?</p>
                                <p><b>Correct Answer(s): Maybe</b></p>
                                <table className="table is-bordered">
                                    <thead>
                                        <tr>
                                            <td style={{ paddingRight: '40px' }}>Team</td>
                                            <td style={{ paddingRight: '40px' }}>Answer</td>
                                            <td style={{ paddingRight: '40px' }}>Correct?</td>
                                            <td style={{ paddingRight: '40px' }}>Points</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Team1</td>
                                            <td>maybe</td>
                                            <td>
                                                <label className="checkbox">
                                                    <input type='checkbox' />
                                                </label>
                                            </td>
                                            <td>
                                                <label className="points">
                                                    <input type='number' style={{ width: '40px' }} />
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Team2</td>
                                            <td>yes</td>
                                            <td>
                                                <label className="checkbox">
                                                    <input type='checkbox' />
                                                </label>
                                            </td>
                                            <td>
                                                <label className="points">
                                                    <input type='number' style={{ width: '40px' }} />
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Team3</td>
                                            <td>no</td>
                                            <td>
                                                <label className="checkbox">
                                                    <input type='checkbox' />
                                                </label>
                                            </td>
                                            <td>
                                                <label className="points">
                                                    <input type='number' style={{ width: '40px' }} />
                                                </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        )}
                        <tr>
                            <td className="has-text-danger">
                                <a onClick={() => toggleQuestionVisibility('question3')}>Question3</a>
                            </td>
                            <td><button>OFF/ON</button></td>
                            <td>
                                <div className="select is-link">
                                    <select>
                                        <option>Hidden</option>
                                        <option>Open Submissions</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        {questionVisibility.question3 && (
                            <>
                                <p>Panda from China?</p>
                                <p><b>Correct Answer(s): Yes</b></p>
                                <table className="table is-bordered">
                                    <thead>
                                        <tr>
                                            <td style={{ paddingRight: '40px' }}>Team</td>
                                            <td style={{ paddingRight: '40px' }}>Answer</td>
                                            <td style={{ paddingRight: '40px' }}>Correct?</td>
                                            <td style={{ paddingRight: '40px' }}>Points</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Team1</td>
                                            <td>yes</td>
                                            <td>
                                                <label className="checkbox">
                                                    <input type='checkbox' />
                                                </label>
                                            </td>
                                            <td>
                                                <label className="points">
                                                    <input type='number' style={{ width: '40px' }} />
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Team2</td>
                                            <td>no</td>
                                            <td>
                                                <label className="checkbox">
                                                    <input type='checkbox' />
                                                </label>
                                            </td>
                                            <td>
                                                <label className="points">
                                                    <input type='number' style={{ width: '40px' }} />
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Team3</td>
                                            <td>maybe</td>
                                            <td>
                                                <label className="checkbox">
                                                    <input type='checkbox' />
                                                </label>
                                            </td>
                                            <td>
                                                <label className="points">
                                                    <input type='number' style={{ width: '40px' }} />
                                                </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Questions;