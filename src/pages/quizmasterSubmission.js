import { Link } from "react-router-dom";

function quizmasterSubmission() {
  return (
    <>
      <h1>Quizmaster Submission</h1>
      <br />
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-menu colums">
            <Link to="/" className="navbar-item column">
              Questions
            </Link>
            <br />
            {/* need to direct to HandOut page: */}
            <Link to="/" className="navbar-item column">
              Handout
            </Link>
            <br />
            {/* need to direct to ScoreBoard page: */}
            <Link to="/" className="navbar-item column">
              Scoreboard
            </Link>
            <br />
            {/* need to direct to TeamRegistration page: */}
            <Link to="/" className="navbar-item column">
              Team Registration
            </Link>
          </div>
        </nav>
      </div>

      {/* need to change size of the table container or find another way: */}
      <div className="d-flex justify-content-center">
        <div className="questions">
          <table>
            <thead>
              <tr>
                <th style={{ paddingRight: '40px' }}>Question #</th>
                <th style={{ paddingRight: '40px' }}>Display Question</th>
                <th style={{ paddingRight: '40px' }}>Display Answer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="/">Question1</a></td>
                <td><button>On/Off</button></td>
                <td>
                  <div class="field">
                    <p class="control">
                      <span class="select">
                        <select>
                          <option selected>Hidden</option>
                          <option>Open submission</option>
                        </select>
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td><a href="/">Question2</a></td>
                <td><button>On/Off</button></td>
                <td>
                  <div class="field">
                    <p class="control">
                      <span class="select">
                        <select>
                          <option selected>Hidden</option>
                          <option>Open submission</option>
                        </select>
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td><a href="/">Question3</a></td>
                <td><button>On/Off</button></td>
                <td>
                  <div class="field">
                    <p class="control">
                      <span class="select">
                        <select>
                          <option selected>Hidden</option>
                          <option>Open submission</option>
                        </select>
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <small>
              Did Adam have a belly button?
            </small>
            <br />
            <b>
              Correct Answer(s): Maybe
            </b>
          </p>
          <table className="table is-bordered has-text-centered">
            <thead>
              <tr>
                <th style={{ paddingRight: '40px' }}>Team</th>
                <th style={{ paddingRight: '40px' }}>Answer</th>
                <th style={{ paddingRight: '40px' }}>Correct?</th>
                <th style={{ paddingRight: '40px' }}>Points</th>
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
        </div>

{/* this part moved to HandOut page already, need to get rid off later on: */}
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

{/* this part moved to HandOut page already, need to get rid off later on: */}
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
            <p><a href='/'>Round 2</a></p>
          </div>
          <div className="round3">
            <p><a href='/'>Round 3</a></p>
          </div>
        </div>

        <div className="teamregistration">

        </div>
      </div>
    </>
  );
}

export default quizmasterSubmission;