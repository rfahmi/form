import React from "react";

const FormShort = () => {
    return (
        <div className="flex flex-col justify-center items-start relative h-1/2">
            <div className="text-3xl text-gray-800 mb-8 font-bold">
                Lorem ipsum dolor sit amet dolor sit amet?
                <span className="text-red-500 mx-2">{"\u002a"}</span>
            </div>
            <input
                type="text"
                placeholder="Jawaban anda..."
                required
                class="w-full py-4 text-primary text-3xl font-semibold placeholder-gray-300 focus:outline-none border-b-2 border-gray-300 focus:ring focus:ring-transparent focus:border-primary dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
        </div>
    );
};

export default FormShort;
