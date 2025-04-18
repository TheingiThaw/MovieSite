import React from 'react'

const SearchForm = () => {
    const



    return (
        <div className='flex flex-col gap-5 relative mt-3'>
            <div className="w-full max-w-sm flex items-center">
                <label className="flex items-center gap-2 border border-gray-200 rounded-lg px-2">
                    <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.3-4.3" />
                    </svg>
                    <input
                        type="search"
                        className="w-full outline-none border-0 bg-transparent"
                        required
                        placeholder="Search"
                    />
                </label>
            </div>
            <div className='w-60 rounded-lg shadow-lg bg-gray-300 z-10'>
                <div className='border-b px-4 py-2 flex'>
                    <img className='rounded-log' src={`https://image.tmdb.org/t/p/w500/`} ></img>
                    <h3 className="font-semibold text-center text-gray-900">Movie Title</h3>
                </div>
            </div>
        </div>
    )
}

export default SearchForm
