import React from 'react'
import { Link } from 'react-router-dom'

export const TrainerComponent = ({ name, email, phone, experience, picture, insta }) => {
    // console.log(name);
    return (
        <>
            <div className="col-md-3 col-12">
                <div className="text-light m-2 p-2">
                    <img src={picture} alt="Trainer" width="100%" className='col-12' />
                    <div className='mt-2'>
                        <h5 className='text-danger'>
                            {name}
                        </h5>
                        <p className='mb-2'> <strong>{experience}+ years of experience</strong> </p>
                        <p className='mb-2'> <Link className='text-white' ><i className="fas fa-phone"> {phone} </i></Link></p>
                        <p> <Link className='text-white' to={`mailto:${email} `}><i className="fas fa-envelope"> {email} </i></Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
