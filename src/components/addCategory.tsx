import { useState } from "react";


interface AddCategoryProps {
    setCategories: (value: React.SetStateAction<[] | string[]>) => void
}

export const AddCategory = ({ setCategories }: AddCategoryProps) => {

    const [inputValue, setInputValue] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(prev => [inputValue, ...prev]);
            setInputValue("")
        }


    }


    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )

}