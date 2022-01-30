import React from 'react'
import { ActorDetails } from '../../types'
interface ActorProps {
    actor: ActorDetails
}
const Actor: React.FC<ActorProps> = ({ actor }) => {
    const isImageAvailable = (actor: ActorDetails) => {
        const image = actor.profile_path.w500.split('/')[6] !== undefined
        return image
    }
    return (
        <div className="flex flex-col items-center">
            <div className="rounded-full w-28 h-28 overflow-hidden">
                <img
                    className="w-full h-full object-cover object-center"
                    src={
                        isImageAvailable(actor)
                            ? actor.profile_path.w500
                            : '/noImage.png'
                    }
                    alt={actor.charcter}
                />
            </div>
            <h2>{actor.name}</h2>
            <h3 className="text-gray-400">{actor.charcter}</h3>
        </div>
    )
}

export default Actor
