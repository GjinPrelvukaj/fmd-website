import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-black to-gray-900 min-h-screen relative">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center flex-wrap mb-4">
          <div className="flex flex-col">
            <div className="mb-4">
              <a href="/" className="block text-4xl font-bold uppercase mb-2">HOME</a>
              <a href="https://github.com/GjinPrelvukaj/fixmydownloads" className="block text-4xl font-bold uppercase mb-2" target="_blank" rel="noreferrer">GITHUB</a>
              <a href="https://github.com/GjinPrelvukaj/fixmydownloads/releases" target="_blank" rel="noreferrer" className="block text-4xl font-bold uppercase">DOWNLOAD</a>
            </div>
          </div>
          <div className="flex items-center mt-4 sm:mt-0">
            <a href="https://github.com/GjinPrelvukaj" target="_blank" rel="noreferrer">
              <Image src="/github.png" alt="Icon 1" width={50} height={50} className="mr-5"/>
            </a>
            <a href="https://www.linkedin.com/in/gjin-prelvukaj-3bab5b23a/" target="_blank" rel="noreferrer">
              <Image src="/linkedin.png" alt="Icon 2" width={50} height={50} />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center -mt-12 sm:-mt-10 relative">
          <div className="mr-4">
            <Image src="/logo-white.png" alt="Image 1" width={750} height={500} className="mt-4 sm:mt-0" />
            <div className="flex flex-col -mt-6 sm:-mt-4">
              <h1 className="text-4xl font-bold text-center sm:text-5xl">Fix My Downloads</h1>
              <h1 className="text-xl text-center text-slate-400 sm:text-2xl">Organizes your downloads with a click</h1>
            </div>
          </div>
        </div>
        <footer className="grid grid-cols-1 sm:grid-cols-3 mt-20 gap-8 sm:mt-24">
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-bold">Gjin Prelvukaj</h1>
            <h1 className="text-lg font-bold text-slate-400">Front-End Developer</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-bold">Prishtina</h1>
            <h1 className="text-lg font-bold text-slate-400">Kosova</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-bold">gjin.prelvukaj@outlook.com</h1>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
