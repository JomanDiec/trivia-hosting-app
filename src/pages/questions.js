function Questions() {
    return (
        <>
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
                            <td>Question1</td>
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
                        <tr>
                            <td>Question2</td>
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
                        <tr>
                            <td>Question3</td>
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
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Questions;