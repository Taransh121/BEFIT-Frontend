import React, { useEffect } from 'react'
import { TrainerComponent } from './TrainerComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrainers } from '../../Actions/TrainerAction';


export const Trainers = () => {
    const trainers = useSelector(state => state.trainer.data.allTrainers);
    console.log(trainers);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTrainers())
        // eslint-disable-next-line
    }, [])
    // Trainers data is not available yet, show a loading message or fallback content
    // if (!trainers) {
    //     return <h2 className='text-center mt-5'>Loading...</h2>;
    // }
    return (
        <>

            <div className='row flex' id='trainers' style={{ backgroundColor: "black", marginRight: 0 }}>
                <div className="text-center">
                    <h2 className='text-danger p-2' style={{ backgroundColor: "black" }}>Expert Trainers</h2>
                </div>
                {
                    trainers &&
                    (trainers).map(({ name, email, phone, experience, picture, insta }) => (
                        <TrainerComponent key={Math.random()} name={name} email={email} phone={phone} experience={experience} picture={picture} insta={insta} />
                    ))
                }
            </div>
        </>
    )
}
