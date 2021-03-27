import React from "react";

const FormRatingNum = () => {
    return (
        <div className="flex flex-col justify-center items-start relative h-1/2">
            <div className="text-3xl text-gray-800 my-4 font-bold">
                Lorem ipsum dolor sit amet dolor sit amet?
                <span className="text-red-500 m-2">{"\u002a"}</span>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Jawaban anda..."
                    required
                    class="w-full text-gray-600 text-3xl placeholder-gray-300 focus:outline-none focus:ring focus:ring-transparent focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
            </div>
        </div>
    );
};

export default FormRatingNum;
