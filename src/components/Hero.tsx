import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid grid-cols-2 items-center mt-12 bg-ziggurat-500 rounded-lg ">
      <div className="flex flex-col gap-12 p-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl font-extrabold">
            Buy your <br /> dream plants
          </h1>

          <div className="flex justify-start items-center gap-12">
            <span className="space-y-5">
              <h2 className="text-3xl font-normal">50+</h2>
              <p className="text-lg font-normal">Plant Species</p>
            </span>
            <div className="border h-16 border-gray-500"></div>
            <span className="space-y-5">
              <h2 className="text-3xl font-normal">100+</h2>
              <p className="text-lg font-normal">Customers</p>
            </span>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            id="search"
            placeholder="What are you looking for?"
            className="w-full rounded-md border-gray-200 p-2 text-lg"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button
              type="button"
              className="rounded-lg bg-ziggurat-500 p-1.5 text-black hover:bg-ziggurat-700"
            >
              <span className="sr-only">Submit</span>
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </span>
        </div>
      </div>

      <Image
        src="/hero.png"
        alt="Image of a hand holding a plant"
        width={722}
        height={518}
      />
    </section>
  );
}
