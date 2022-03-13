import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./gifGridItem";


interface GifGridProps {
    category: string;
}

interface Gif {
    id: string;
    title: string;
    url: string;
}

export const GifGrid = ({ category }: GifGridProps) => {

    const { data: gifs, loading } = useFetchGifs(category);

    return (
        <div>
            <h3>{category}</h3>
            <div className="card-grid animate__animated  animate__delay-2s ">
                {
                    loading ?
                        <p>Loading...</p>
                        :
                        gifs.map((gif: Gif) => {
                            return (
                                <GifGridItem key={gif.id} {...gif} />
                            )
                        })

                }
            </div>
        </div>


    )
}