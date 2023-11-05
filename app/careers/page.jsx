'use client'

import Modal from "@/components/Modal/Modal"
import ResumeForm from "@/components/Resume/ResumeForm"
import { useState } from "react";


export default function CareersPage() {
    const [showApply, setShowApply] = useState(false);

    const modalFunctions = {
        setShowApply: (shown) => setShowApply(shown),
    };
    const handleModal = () => {
        setShowApply(true)
    }

    return (
        <>
            <div className="" >
                {/* <div className="flex justify-center">
                    <div className="text-6xl font-serif">Join Our Team</div>
                </div> */}
                <div className="relative w-full">
                    <img src="/join3.jpg" className="h-fit min-w-full"></img>
                    <div className="absolute top-1/3 left-0 right-0 mx-auto text-center">
                        < h1 className="text-6xl text-white font-serif">
                            Join Our Team
                        </h1>
                    </div>
                </div>
                <div className=" font-serif flex flex-col justify-center items-center bg-light-blue pb-32">
                    <h2 className="text-center  text-2xl">
                        We are looking for hardworking, reliable, and positive individuals to join our growing team of cleaning specialists </h2>
                    <ul className="text-xl text-center p-5">
                        <li>Hours starting at part time with flexiblity to meet your busy life.</li>
                        <li>No prior experience required. </li>
                        <li></li>
                    </ul>
                    <button onClick={handleModal} className="mt-6 bg-feather-blue hover:bg-highlight-orange font-bold py-2 px-4 rounded">Apply here</button>
                </div>
                {showApply && (
                    <Modal
                        component={ResumeForm}
                        close={(shown) => setShowApply((shown))}
                        modalFunctions={modalFunctions}
                    />
                )}

                {/* <ResumeForm /> */}
            </div>

        </>)
}
{/* <div className="flex flex-col justify-center items-center">
                        <h2>BLAH BLAH BLAH</h2>
                        <img className="rounded w-max h-52" src="/pexels-karolina-grabowska-4239091.jpg" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 >BLAH BLAH BLAH</h2>
                        <img src="/pexels-tima-miroshnichenko-6195122.jpg" className="rounded w-max h-52" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2>BLAH BLAH BLAH</h2>
                        <img src="/pexels-polina-zimmerman-4008518.jpg" className="rounded w-max h-52" />
                    </div> */}
