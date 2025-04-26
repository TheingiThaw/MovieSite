import { router } from '@inertiajs/react';
import { Card } from 'flowbite-react';
import React from 'react'

const ActorCard = ({ actor }) => {

    const actorOnClick = (id) => {
        router.get(route('actor.detail', id));
    }

    const knownFor = (actor.known_for ?? []).map((movie) => {
        return movie.title ?? movie.name;
    }).join(', ');

    // console.log(actor);
    // console.log(knownFor);

    return (
        <div onClick={() => actorOnClick(actor.id)}>
            <Card
                className=" max-w-[290px] text-sm mt-3 h-auto"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            >
                <h5 className="text-xl flex-wrap font-bold tracking-tight text-gray-900 dark:text-white">
                    {actor.name}
                </h5>
                <div className="flex gap-3">
                    <p>{knownFor}</p>
                </div>
            </Card>
        </div>
    )
}

export default ActorCard
