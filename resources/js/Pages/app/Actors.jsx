import { usePage } from '@inertiajs/react'
import React from 'react'
import ActorCard from './ActorCard';

const Actors = () => {
    const { popularActors } = usePage().props;
    console.log(popularActors);
    return (
        <div>
            <h2 className='text-xl font-bold text-yellow-350 uppercase my-3 px-5'>Popular Actors</h2>

            <div className="flex items-center justify-center">
                <div className='flex flex-wrap justify-between'>
                    {popularActors.slice(0, 8).map((actor) => (<ActorCard key={actor.id} actor={actor} />))}
                </div>
            </div>
        </div>
    )
}

export default Actors
