import React from 'react';
function Adminform()
{
    return(
        <>
            <Section className="adminform">
            <form className='border-1 rounded-3 border-dark border p-5' onSubmit={handleSubmit}>
                <img src="https://snabbit.com/assets/snabbit-icon.svg" className='mb-5'/>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={email}
                        onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password}
                        onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1" required>Check me out</label>
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
            </Section>
        </>
    )
}
export default Adminform;