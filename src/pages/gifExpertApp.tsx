import { useState } from "react";
import { AddCategory } from '../components/addCategory';
import { GifGrid } from '../components/gifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState<string[] | []>([]);

    return (
        <div>
            <h2>
                Gif Expert App
            </h2>
            <AddCategory setCategories={setCategories} />
            {
                categories.map((category: string) => {
                    return (
                        <GifGrid key={category} category={category} />
                    )
                })
            }
        </div>

    )
}