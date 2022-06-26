import React from "react";


const ErrorMessage : React.FC<{setter : () => void }> = (props) => {
    return (
        <div className="z-20 w-[65%] h-1/2 bg-brown rounded-md flex flex-col justify-around px-10">

            <h1
            className="text-white text-2xl font-bold"
            >Upps algo ha ido mal</h1>
            <p
            className="text-white "
            >No hemos podido subir tu archivo, revisa el formato o bien inténtalo de nuevo</p>

            <button 
            onClick={() => props.setter()}
            className="w-20 h-10 bg-green rounded-sm flex items-center justify-center">
                <p className="font-bold text-white">Cerrar</p>
            </button>
            

        </div>
    )
}


export default ErrorMessage