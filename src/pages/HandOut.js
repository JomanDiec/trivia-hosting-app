import React from 'react';

function HandOut() {
    return (
        <>
            <div className="handout">
                <table>
                    <thead>
                        <tr>
                            <td style={{ fontWeight: 'bold', paddingRight: '40px' }}>Handout List</td>
                            <td style={{ fontWeight: 'bold', paddingRight: '40px' }}>Display Handout</td>
                            <td style={{ fontWeight: 'bold', paddingRight: '40px' }}>Display Answer</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="/">Handout 1</a></td>
                            <td><button>On/Off</button></td>
                            <td>
                                <div class="field">
                                    <p class="control">
                                        <span class="select">
                                            <select>
                                                <option>Hidden</option>
                                                <option selected>Open submission</option>
                                            </select>
                                        </span>
                                    </p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><a href="/">Team 1</a></p>
                <table className="table is-bordered">
                    <thead>
                        <tr>
                            <td style={{ paddingRight: '40px' }}>Question</td>
                            <td style={{ paddingRight: '40px' }}>Answer</td>
                            <td style={{ paddingRight: '40px' }}>Correct Answer</td>
                            <td style={{ paddingRight: '40px' }}>Correct?</td>
                            <td style={{ paddingRight: '40px' }}>Points</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>naruto</td>
                            <td>Sasuke</td>
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
                            <td>2</td>
                            <td>nanuto</td>
                            <td>Sakura</td>
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
                            <td>3</td>
                            <td>nanato</td>
                            <td>kakashi</td>
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
                <p><a href="/">Team 2</a></p>
                <table className="table is-bordered">
                    <thead>
                        <tr>
                            <td style={{ paddingRight: '40px' }}>Question</td>
                            <td style={{ paddingRight: '40px' }}>Answer</td>
                            <td style={{ paddingRight: '40px' }}>Correct Answer</td>
                            <td style={{ paddingRight: '40px' }}>Correct?</td>
                            <td style={{ paddingRight: '40px' }}>Points</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>naruto</td>
                            <td>Sasuke</td>
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
                            <td>2</td>
                            <td>nanuto</td>
                            <td>Sakura</td>
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
                            <td>3</td>
                            <td>nanato</td>
                            <td>kakashi</td>
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
                <p><a href="/">Team 3</a></p>
                <table className="table is-bordered">
                    <thead>
                        <tr>
                            <td style={{ paddingRight: '40px' }}>Question</td>
                            <td style={{ paddingRight: '40px' }}>Answer</td>
                            <td style={{ paddingRight: '40px' }}>Correct Answer</td>
                            <td style={{ paddingRight: '40px' }}>Correct?</td>
                            <td style={{ paddingRight: '40px' }}>Points</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>naruto</td>
                            <td>Sasuke</td>
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
                            <td>2</td>
                            <td>nanuto</td>
                            <td>Sakura</td>
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
                            <td>3</td>
                            <td>nanato</td>
                            <td>kakashi</td>
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
            </div>
        </>
    )
}

export default HandOut;