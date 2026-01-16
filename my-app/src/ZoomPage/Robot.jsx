import React from 'react';
import AnimatedTitle from "../components/animatedTitle.jsx";

const Robot = () => {
    return (
        <>

            <div className="w-full h-[70vh]">

                <div className="flex flex-col items-center justify-center py-10 px-24">
                    <AnimatedTitle
                        title="R<b>o</b>bo<b>t</b> De<b>S</b>i<b>g</b>n"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />
                </div>

            {/*    Main content*/}

                

            </div>

        </>
    );
};

export default Robot;
