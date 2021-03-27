import React from "react";

const Head = () => {
    return (
        <div className="hidden md:flex md:fixed md:w-1/2 justify-center items-center flex-col p-4 text-center h-screen bg-white border-b-2 lg:border-r-2 border-gray-200">
            <h1 className="flex items-center text-4xl lg:text-6xl font-bold mb-2 text-gray-700">
                Judul Survey
                <div className="bg-primary h-full w-1 m-2" />
            </h1>
            <p className="text-gray-500">
                Dari <a href="https://rfahmi.com">Fahmi Rizalul</a>{" "}
            </p>
        </div>
    );
};

export default Head;
