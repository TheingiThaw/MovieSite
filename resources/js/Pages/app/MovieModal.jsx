import React from 'react'

const MovieModal = ({ videoUrl }) => {
    const handleClose = () => {
        document.getElementById('my_modal_3').close();
    };
    return (
        <div className='relative'>
            <button
                className="bg-yellow-400 py-2 flex items-center justify-center rounded-lg min-w-[100px] max-w-[150px]"
                onClick={() => document.getElementById('my_modal_3').showModal()}
            >
                Play Trailer
            </button>

            <dialog id="my_modal_3" className="modal">
                <div className='w-full h-full bg-black/50 fixed top-0 left-0 z-50 flex items-center justify-center'>
                    <div className="bg-white p-5 rounded-lg shadow-lg max-w-3xl w-[90%] relative">
                        <form method="dialog">
                            <button
                                onClick={handleClose}
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl"
                            >
                                ✕
                            </button>
                        </form>
                        <iframe
                            width="100%"
                            height="400"
                            src={videoUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>

            </dialog>
        </div>

    )
}

export default MovieModal

// https://www.youtube.com/embed/iBz5AntmOiI?si=UJcHiz5Db9wZkhNF
