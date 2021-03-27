import React from "react";
// import FormRatingNum from "../components/FormRatingNum";
import FormShort from "../components/FormShort";

const Body = () => {
    return (
        <div className="relative md:absolute md:top-0 md:right-0 md:w-2/5 flex justify-center items-start flex-col h-screen p-4">
            <div className="absolute flex justify-between p-4 top-0 left-0 right-0">
                <div className="text-6xl text-gray-200 font-bold">
                    #1<span className="text-xl font-normal">/10</span>
                </div>
                <div className="flex flex-col justify-center text-sm text-gray-300 text-right">
                    <span>Lorem Ipsum Dolor sit Amet</span>
                    <span className="font-bold">Fahmi Rizalul</span>
                </div>
            </div>

            {/* Forms */}
            <FormShort />
            {/* <FormRatingNum /> */}

            <div class="absolute bottom-0 right-0 left-0 p-4 inline-block mr-2 mt-2">
                <button
                    type="button"
                    class="flex items-center justify-center focus:outline-none text-white text-md font-bold py-2 px-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 transform hover:scale-110"
                >
                    Selanjutnya
                    <svg
                        className="w-5 w-5 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Body;
