import React from 'react';
import './newUser.scss';

export default function NewUser() {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New Job</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Job No</label>
                    <input type="text" placeholder='GEC-237' disabled />
                </div>
                <div className="newUserItem">
                    <label>Customer Name</label>
                    <input type="text" placeholder='' />
                </div>
                <div className="newUserItem">
                    <label>Contact No</label>
                    <input type="email" placeholder='' />
                </div>
                <div className="newUserItem">
                    <label>Item Description</label>
                    <input type="password" placeholder='' />
                </div>
                <div className="newUserItem">
                    <label>Model No</label>
                    <input type="text" placeholder='' />
                </div>
                <div className="newUserItem">
                    <label>Serial No</label>
                    <input type="text" placeholder='' />
                </div>
                <div className="newUserItem">
                <label>Problem</label>
                <select name="active" id="active" className="newUserSelect">
                    <option value="Yes">No Power</option>
                    <option value="No">Blank Screen</option>
                    <option value="No">No Picture</option>
                    <option value="No">No Sound</option>
                </select>
                </div>
                <div className="newUserItem">
                    <label>Desposit</label>
                    <input type="text" placeholder='' />
                </div>
                <div className="newUserItem">
                    <label>Quoted Price</label>
                    <input type="text" placeholder='' />
                </div>
                <div className="newUserItem">
                    <label>Balance</label>
                    <input type="text" placeholder='' disabled/>
                </div>
                <button className="newUserButton" disabled>Create Job</button>
            </form>
        </div>
    )
}
