import Image from "next/image";

import StarIcon from "@heroicons/react/24/solid/StarIcon";

export default function Clients() {
  return (
    <section className="flex flex-col mt-12">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">
          {" "}
          What customers say about <br /> GREEMIND?
        </h1>
        <div className="flex gap-3">
          <div className="rounded-full h-2 w-20 bg-ziggurat-500"></div>
          <div className="rounded-full h-2 w-10 bg-gray-200"></div>
          <div className="rounded-full h-2 w-10 bg-gray-200"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12 mt-12">
        <div className="h-96 bg-ziggurat-500 rounded-lg p-12">
          <p>
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div className="flex justify-between mt-9">
            <div className="flex gap-12 ">
              <Image
                src="/clients01.png"
                height={205}
                width={150}
                alt="Imagem"
              />
              <div className="">
                <h2 className="text-lg font-bold">John Doe</h2>
                <p className="text-lg text-gray-500">Youtuber</p>
              </div>
            </div>
            <span className="inline-flex gap-2">
              <StarIcon className="h-6 w-6" />
              4.5
            </span>
          </div>
        </div>
        <div className="h-96 bg-ziggurat-500 rounded-lg p-12">
          <p>
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div className="flex justify-between  text-center">
            <div className="flex gap-12 mt-3.5">
              <Image
                src="/clients02.png"
                height={205}
                width={150}
                alt="Imagem"
              />
              <div className="">
                <h2 className="text-lg font-bold">John Doe</h2>
                <p className="text-lg text-gray-500">Youtuber</p>
              </div>
            </div>
            <span className="inline-flex gap-2 mt-3.5">
              <StarIcon className="h-6 w-6" />
              4.5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
("");
