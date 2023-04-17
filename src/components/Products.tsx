import Image from "next/image";

import ArrowLongRightIcon from "@heroicons/react/24/outline/ArrowLongRightIcon";


export default function Products() {
  return (
    <section className="flex mt-12 items-center">
      <div className="flex flex-col space-y-6 w-64">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Best Selling Plants</h1>
          <p className="text-gray-500 text-lg">Easiest way to healthy life by buying your favorite plants </p>
        </div>
        <button
          type="button"
          className="inline-flex gap-2 rounded-md bg-ziggurat-500 py-3 px-6 justify-between w-40 hover:bg-ziggurat-800"
        >
          <span className="text-sm font-medium"> See more </span>
          <ArrowLongRightIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-12">
        <div className="flex flex-col text-lg">
          <Image src="/product01.png" width={300} height={363}  alt="Image Natural Plants"/>
          <h1 className="font-bold mt-3">Natural Plants</h1>
          <h2 className="text-gray-500 mt-2">₱ 1,400.00</h2>
        </div>
        <div className="flex flex-col text-lg">
          <Image src="/product02.png" width={300} height={363}  alt="Image Artificial Plants"/>
          <h1 className="font-bold mt-3">Artificial Plants</h1>
          <h2 className="text-gray-500 mt-2">₱ 900.00</h2>
        </div>
        <div className="flex flex-col text-lg">
          <Image src="/product03.png" width={300} height={363}  alt="Image Natural Plants"/>
          <h1 className="font-bold mt-3">Artificial Plants</h1>
          <h2 className="text-gray-500 mt-2">₱ 3,500.00</h2>
        </div>
      </div>
    </section>
  );
}
