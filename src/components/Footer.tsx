import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mt-12">
      <div className="w-screen bg-ziggurat-500 ">
        <div className="flex flex-col gap-12 container mx-auto px-24 py-11">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-xl font-extrabold text-black">GREENMIND</h1>
              <p className="text-lg font-normal text-gray-500">
                We help you find your dream plant
              </p>
              <div className="flex gap-3 mt-12">
                <Image
                  src="/facebook.png"
                  height={48}
                  width={48}
                  alt="Imagem icon facebook"
                />
                <Image
                  src="/instagram.png"
                  height={48}
                  width={48}
                  alt="Imagem icon facebook"
                />
                <Image
                  src="/twitter.png"
                  height={48}
                  width={48}
                  alt="Imagem icon facebook"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-12">
              <div className="flex flex-col gap-3">
                <h1 className="text-xl font-extrabold text-black">Information</h1>
                <a className="text-lg font-normal text-gray-500">About</a>
                <a className="text-lg font-normal text-gray-500">Product</a>
                <a className="text-lg font-normal text-gray-500">Blog</a>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="text-xl font-extrabold text-black">Company</h1>
                <a className="text-lg font-normal text-gray-500">Community</a>
                <a className="text-lg font-normal text-gray-500">Career</a>
                <a className="text-lg font-normal text-gray-500">Our story</a>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="text-xl font-extrabold text-black">Contact</h1>
                <a className="text-lg font-normal text-gray-500">Getting Started</a>
                <a className="text-lg font-normal text-gray-500">Pricing</a>
                <a className="text-lg font-normal text-gray-500">Resources</a>
              </div>
            </div>
          </div>

          <p className="text-lg font-normal text-gray-500">
            Copyright © Anderson Alves Coelho | all Right Reserved Term of use
            GREENMIND
          </p>
        </div>
      </div>
    </footer>
  );
}
