import React, { useState, useCallback } from "react";
import { useDropzone } from 'react-dropzone';


export const DropZone: React.FC = () => {
    const [mouseEnter, setMouseEnter] = useState<boolean>(false);
    const [files, setFiles] = useState<string[]>([]);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [uploaded, setUploaded] = useState<boolean>(false);

    const onDrop = useCallback((acceptedFiles: any) => {
        // Do something with the files
        acceptedFiles.forEach((file: any) => setFiles((prev) => [...prev, file.path]))

        setLoaded(true);
        setUploaded(false);

    }, []);


    const onUpload = () => {
        setLoaded(false);
        setUploaded(true);
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (

        <div className="w-full h-full flex flex-col items-center justify-center">
            <div
                {...getRootProps()}
                className='relative flex items-center justify-center w-full h-1/2'>
                <div className='absolute z-0 w-[90%] bg-green h-full blur-md' />
                <div className='z-10 flex items-center justify-center w-[88%] bg-purple h-[98%] rounded-md hover:cursor-pointer'>
                    <label
                        onMouseEnter={(e) => setMouseEnter((prev) => true)}
                        onMouseLeave={(e) => setMouseEnter((prev) => false)}
                        onClick={(e: React.SyntheticEvent) => e.stopPropagation()}
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-full cursor-pointer">

                        {(loaded == false && uploaded == false) || (loaded == true && uploaded == false) ?
                            <p className="text-xl text-white text-center">ARRASTRA TUS ARCHIVOS AQUÍ</p> :
                            <p className="text-xl text-white text-center">
                                {files.length == 1 ?
                                    `TU ARCHIVO ${files[0]} SE HA SUBIDO CORRECTAMENTE` :
                                    `TUS ARCHIVOS ${files.map((file) => file + ',')} SE HAN SUBIDO CORRECTAMENTE`
                                }
                            </p>
                        }

                        {mouseEnter ? <p className="text-sm text-white">HAZ CLICK PARA SELECCIONAR ARCHIVO</p> : ''}

                        <input  {...getInputProps()} id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
            </div>
            <div className="my-4"></div>
            <button
                disabled={!loaded}
                onClick={() => onUpload()}
                className='w-[88%] bg-green py-2 mb-[10rem] text-white font-bold rounded-md'
            >Subir archivos</button>
            <div className="my-[-5rem]"></div>
        </div>

    )
}