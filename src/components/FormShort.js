import React from "react";

const FormShort = () => {
    return (
        <div className="flex flex-col justify-center items-start relative h-full w-full">
            <div className="text-4xl text-gray-800 mb-8 font-bold">
                Apa tanggapan anda mengenai?
                <span className="text-red-500 mx-2">{"\u002a"}</span>
            </div>
            <input
                type="text"
                placeholder="Jawaban anda..."
                required
                class="w-full py-2 text-gray-500 text-2xl font-semibold placeholder-gray-300 focus:outline-none border-b-2 border-gray-300 focus:ring focus:ring-transparent focus:border-gray-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
            <small className="text-gray-400">Mohon tulis jawaban singkat</small>
        </div>
    );
};

export default FormShort;
