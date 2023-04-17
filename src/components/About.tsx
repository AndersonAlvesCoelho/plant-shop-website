import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col gap-12 justify-center items-center text-center mt-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold">About us</h1>
        <h2 className="text-gray-500 text-lg">
          Order now and appreciate the beauty of nature
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="inline-flex justify-center items-center rounded-full bg-ziggurat-500 w-20 h-20 hover:bg-ziggurat-800">
            <Image
              className="z-10"
              src="/about01.png"
              height={40}
              width={40}
              alt="Imagem about plant"
            />
          </div>
          <h1 className="text-lg font-bold mt-6">Large Assortment</h1>
          <h2 className="text-gray-500 text-lg mt-3">
            Order now and appreciate the beauty of nature
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="inline-flex justify-center items-center rounded-full bg-ziggurat-500 w-20 h-20 hover:bg-ziggurat-800">
            <Image
              className="z-10"
              src="/about02.png"
              height={40}
              width={40}
              alt="Imagem about plant"
            />
          </div>
          <h1 className="text-lg font-bold mt-6">Fast & Free Shipping</h1>
          <h2 className="text-gray-500 text-lg mt-3">
            4-day or less delivery time, free shipping and an expedited delivery
            option.
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="inline-flex justify-center items-center rounded-full bg-ziggurat-500 w-20 h-20 hover:bg-ziggurat-800">
            <Image
              className="z-10"
              src="/about03.png"
              height={40}
              width={40}
              alt="Imagem about plant"
            />
          </div>
          <h1 className="text-lg font-bold mt-6">24/7 Support</h1>
          <h2 className="text-gray-500 text-lg mt-3">
            answers to any business related inquiry 24/7 and in real-time.
          </h2>
        </div>
      </div>
    </section>
  );
}
