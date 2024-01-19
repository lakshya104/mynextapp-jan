import Image from "next/image";
import React from "react";


interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}


interface CardProps {
 data: Photo
}


const Card: React.FC<CardProps> = ({data}) => {
  
  return (
    <div className="w-80 h-96 m-2 font-bold flex justify-center items-center flex-col bg-white border border-gray-200 rounded-xl shadow dark:bg-slate-900 dark:border-gray-700">
        <Image className="rounded-full mt-2" width={150} height={150} src={data.url} alt="" />
      <div className="p-5 flex justify-around items-center flex-col h-80">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.id}
          </h5>
        </a>
        <p className="mb-3 capitalize  text-center p-2 text-gray-700 dark:text-white">
         {data.title}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-5 py-2 text-base font-bold text-center text-white bg-indigo-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
