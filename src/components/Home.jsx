import banner from "../assets/banner.jpg";

function Home() {
  return (
    <>
      <div className="bg-violet-100 flex flex-col md:flex-row items-center">
        <img src={banner} alt="banner" className="md:w-[30%]" />
        <h1 className="text-center text-violet-800 m-1 text-lg md:text-3xl lg:text-6xl font-bold justify-center">
          Unlock the Secrets to a Successful Cat Adoption!
        </h1>
      </div>

<div>

</div>
    </>
  );
}

export default Home;
