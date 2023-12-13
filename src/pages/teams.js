

function Teams() {
    return (
        <>
            <div className="columns is-centered">
                <div className='column is-three-fifths'>
                    <div className="header">
                        <h1>Registered Teams (admin panel)</h1>
                        <hr />
                        <h3>Competing</h3>
                        <h3>Q - quizmaster teams</h3>
                    </div>
                    <br />
                    <div className="box has-content-centered">
                        <table className="table is-fullwidth is-hoverable">
                            <thead>
                                <tr>
                                    <th>Teams</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Team1</td>
                                    <td><button>Edit</button></td>
                                    <td><button>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Team2</td>
                                    <td><button>Edit</button></td>
                                    <td><button>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Team3</td>
                                    <td><button>Edit</button></td>
                                    <td><button>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Team4</td>
                                    <td><button>Edit</button></td>
                                    <td><button>Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />
                    <div className="registration">
                        <button style={{ marginRight: '20px' }}>On/Off</button>
                        <span>Allow Registration?</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teams;