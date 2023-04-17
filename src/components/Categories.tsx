import Image from "next/image";

import ArrowLongRightIcon from "@heroicons/react/24/outline/ArrowLongRightIcon";

export default function Categories() {
  return (
    <section className="flex flex-col gap-12 justify-center items-center text-center">
      <div className="flex flex-col gap-3 m-12">
        <h1 className="text-4xl font-bold">Categories</h1>
        <h2 className="text-gray-500 text-lg">Find what you are looking for</h2>
      </div>

      <div className="w-screen bg-ziggurat-500">
        <div className="grid grid-cols-3 gap-12 justify-evenly items-center text-cente container mx-auto px-24 py-11">
          <div className="flex flex-col justify-center items-center text-center -mt-96">
            <Image
              className="z-10"
              src="/categories01.png"
              height={512}
              width={352}
              alt="Imagem about plant"
            />
            <h1 className="text-lg font-bold mt-6">Natural Plants</h1>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              className="z-10"
              src="/categories02.png"
              height={512}
              width={352}
              alt="Imagem about plant"
            />
            <h1 className="text-lg font-bold mt-6">Plant Accessories</h1>
            <h2 className="text-gray-500 text-lg mt-3">
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <button
              type="button"
              className="inline-flex gap-2 rounded-md bg-zinc-50 py-3 px-6 justify-between w-40 hover:bg-ziggurat-800"
            >
              <span className="text-sm font-medium"> Explore </span>
              <ArrowLongRightIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center text-center -mt-96">
            <Image
              className="z-10"
              src="/categories03.png"
              height={512}
              width={352}
              alt="Imagem about plant"
            />
            <h1 className="text-lg font-bold mt-6">Artificial Plants</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
