
import NavTest from './navbarTest.js';

function TeamRegistration() {

    return (
        <>
            <h1>Team Registration</h1>
            {/* <input type="text" onChange={handleChange}/> */}
            <br />
            <NavTest />

            <div className="columns is-centered">
                <div className="column is-three-fifths">
                    <div className='field'>
                        <label className='label'>Input text</label>
                        <div className='control'>
                            <input className='input' type='text' placeholder='Input text' />
                        </div>
                    </div>

                    <div className='field'>
                        <div className='control'>
                            <label className='label'>
                                <input type='radio' name='question' />
                                yes
                            </label>
                            <label className='label'>
                                <input type='radio' name='question' />
                                no
                            </label>
                        </div>
                    </div>

                    <div className='field'>
                        <label className='label'>Multiple choice</label>
                        <div className='control'>
                            <div className='select'>
                                <select>
                                    <option>option 1</option>
                                    <option>option 2</option>
                                    <option>option 3</option>
                                    <option>option 4</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='field'>
                        <label className='label'>Submit button</label>
                        <div className='control'>
                            <button className='button is-link'>Submit</button>
                        </div>
                    </div>

                    <div className='field'>
                        <label className='label'>Text area</label>
                        <div className='control'>
                            <textarea class='textarea' placeholder='input your words here'></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeamRegistration;