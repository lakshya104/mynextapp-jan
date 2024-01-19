"use client";
import { useState } from "react";
import axios from "axios";
import Card from "./Card";
import { InView } from "react-intersection-observer";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const CardData = () => {
  const [data, setData] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
//   const hasFetchedData = useRef(false);

  const fakeData = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=4`
      );
      const newData = res.data as Photo[];
      setData((prev) => [...prev, ...newData]);
      setPage((prev) => prev + 1);
    //   setLoading(false);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

//   useEffect(() => {
//     if (hasFetchedData.current === false) {
//       fakeData();
//       hasFetchedData.current = true;
//     }
//   }, []);

  return (
    <div className="flex justify-center items-center flex-col m-2 gap-4">
      <div className="flex justify-center items-center flex-wrap md:flex-row flex-col border-b-2">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      {/* {loading && (
        <p className="px-5 py-2 bg-indigo-900 rounded-xl text-white font-bold">
          Loading...
        </p>
      )}
      {!loading && (
        <button
          className="px-5 py-2 text-base font-bold text-center text-white bg-indigo-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={fakeData}
        >
          Load More
        </button>
      )} */}

      <InView
        as="div"
        onChange={(inView, entry) => (inView ? fakeData() : null)}
      >
        <p className="px-80 py-2 bg-indigo-900 rounded-xl text-white font-bold">
          Loading...
        </p>
      </InView>
    </div>
  );
};

export default CardData;
