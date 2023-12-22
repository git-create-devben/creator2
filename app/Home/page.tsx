"use client"

import Lightbox from "@/components/lightbox";
// import Testimony from "@/components/testimony/testimony";

const Home = () => {

    const makeupArtistImages = [
      'https://frenify.com/work/envato/frenify/html/makeup/1/img/fotorama/full5.jpg',
        'https://frenify.com/work/envato/frenify/html/makeup/1/img/fotorama/full3.jpg',
        'https://frenify.com/work/envato/frenify/html/makeup/1/img/fotorama/full2.jpg',
        'https://frenify.com/work/envato/frenify/html/makeup/1/img/fotorama/full4.jpg',
        "https://frenify.com/work/envato/frenify/html/makeup/1/img/fotorama/full1.jpg"
        // Add more image imports
      ];

    
  return (
   <main className="md:h-screen xl:w-[53rem]  bg-[#030303] h-[46rem] mt-24 p-8  mx-8">
    <Lightbox images={makeupArtistImages} />
    {/* <Testimony/> */}
   </main>
  )
}

export default Home;