import React from "react";
const google = require('../google.png');

export const WelcomeMessage: React.FC = () => {
    return (
        <div className="w-1/2 flex items-center justify-center sm:p-0 py-20 ">
            <div className="sm:w-[60%] w-full flex flex-col items-center justify-center">
                <p className="text-2xl font-semibold text-white  text-center">Bienvenido a DDrop</p>
                <p className="text-sm text-white pt-1 ">Para subir tus archivos de forma simple a drive,  puedes hacer Login a través de Google.</p>
                <br />
                <div className="bg-white h-[0.10rem] w-full" />
                <br />
                <div className="w-full h-10 border border-white rounded-sm flex items-center justify-center relative">
                    <img className="mx-4 object-contain h-9 w-6" src={google} alt="google-logo"/>
                    <p className=" text-center text-white font-semibold ">Login con Google</p>
                </div>

            </div>

        </div>

    )
}