import React, { useEffect, useRef } from 'react'

const MovieModal = ({ videoUrl, imageUrl, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }, []);

    const handleClose = () => {
        modalRef.current.close();
        if (onClose) {
            onClose();
        }
    };
    return (
        <div className='relative'>

            <dialog ref={modalRef} id="my_modal_3" className="modal">
                <div className='w-full h-full bg-black/10 fixed top-0 left-0 z-50 flex items-center justify-center'>
                    <div className=" p-5 pt-10 rounded-lg shadow-lg max-w-3xl w-[90%] relative">
                        <form method="dialog">
                            <button
                                onClick={handleClose}
                                className="btn btn-sm text-white bg-black btn-circle btn-ghost absolute right-2 top-2 text-xl"
                            >
                                ✕
                            </button>
                        </form>
                        {videoUrl && (
                            <iframe
                                width="100%"
                                height="400"
                                src={videoUrl}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="rounded-lg block mx-auto"
                            ></iframe>
                        )}
                        {
                            imageUrl && (
                                <img
                                    src={imageUrl}
                                    alt="movie poster"
                                    className="rounded-lg block mx-auto max-w-full h-auto"
                                />
                            )
                        }
                    </div>
                </div>

            </dialog>
        </div>

    )
}

export default MovieModal

// https://www.youtube.com/embed/iBz5AntmOiI?si=UJcHiz5Db9wZkhNF
