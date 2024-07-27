import header from "./assets/header.png";
import diiigdaya from "./assets/diiigdaya.png";
import digdayacard from "./assets/digdayacard.png";
import noisy from "./assets/noisy-gradients.png";
import maestro from "./assets/maestro.png";
import car from "./assets/car.png";
import border from "./assets/border.png";
import borderwhite from "./assets/borderwhite.png";
import album from "./assets/album.png";
import slide1 from "./assets/slide1.png";
import cta from "./assets/cta.png";
import arrow from "./assets/arrow.png";

export default function App() {
  let images = [digdayacard,digdayacard,digdayacard,digdayacard,digdayacard,digdayacard]

  const tracks = [
  "TRACK 1 - TIPU DIRI",
  "TRACK 2 - PORSI CURAH (FT AYUB JONN)",
  "TRACK 3 - TANPA PERAYAAN (FT DZULFAHMI & RANDSLAM)",
  "TRACK 4 - BELATI BELATI",
  "TRACK 5 - KEBAL EJEKAN",
  "TRACK 6 - MERAH MUDA BIRU (FT. LIAM AMADEO)",
  "TRACK 7 - MENCIPTAKAN HENING (FT. AKARA)",
  "TRACK 8 - KABUR (INTERLUDE)",
  "TRACK 9 - DI PINGGIR JURANG (FT. WICHIGO SHAWTY)",
  "TRACK 10 - YANG LEBIH",
  "TRACK 11 - GEPPETTO",
  "TRACK 12 - TABAH/GUBAHANKU",
  "TRACK 13 - DIGDAYA (FT. LIAM AMADEO)"
];

  return (
    <>
      <a
        className="-rotate-90 fixed z-10 top-0 hover:top-12 transition-all -left-10"
        href="https://linktr.ee/preachja"
      >
        <img src={digdayacard} className="w-36" />
      </a>
      <div className="bg-black">
        <div className="flex gap-6 justify-between absolute top-0 left-1/2 transform -translate-x-1/2 items-center mt-5">
          <a className="underline hidden text-sm md:block text-white">ABOUT</a>
          <a className="underline hidden text-sm md:block text-white">DIIIGDAYA</a>
          <h1 className="flex flex-col items-center text-2xl md:text-3xl text-white tracking-tighter font-vogue">
            <img src={borderwhite} className="w-10" />
            LAZE
          </h1>
          <a className="underline hidden md:block text-white" href="#maestro">MAESTRO</a>
          <a className="underline hidden md:block text-white">TOUR</a>
        </div>
        <div className="bg-[url('./assets/header.png')] bg-cover bg-center w-full h-screen flex justify-center items-center">
          <img src={diiigdaya} className="w-64 mix-blend-screen" />
        </div>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="marquee flex">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`marquee-img-${index}`}
                className="h-32 inline-block"
              />
            ))}
            {images.map((image, index) => (
              <img
                key={index + images.length}
                src={image}
                alt={`marquee-img-${index + images.length}`}
                className="h-32 inline-block"
              />
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-b from-black to-black" id="maestro">
          <div className="h-screen bg-[url('./assets/noisy-gradients.png')] bg-cover bg-center flex flex-col items-center justify-center opacity-60">
            <h1 className="text-white text-2xl tracking-tight">THE MAESTRO</h1>
            <img src={maestro} className="w-[40em]" />
          </div>
        </div>

        <div>
          <div className="flex bg-black overflow-hidden items-end">
            <img
              src={diiigdaya}
              className="relative left-[1em] md:left-[5em] mix-blend-screen w-[40%] h-fit"
            />
            <img src={car} className="w-full" />
          </div>

          <div className="flex flex-col items-center justify-center text-white my-10 gap-16">
            <img src={border} />
            <div className="w-8/12 md:w-5/12 text-center space-y-11">
              <p className="text-xl md:text-2xl font-inter tracking-tighter">
                DIGDAYA merupakan album rap bahasa Indonesia ketiga Laze, di
                dalam kamus DIGDAYA berarti sakti atau tidak terkalahkan.
              </p>
              <p className="text-xl md:text-2xl tracking-tighter">
                Album ini menggambarkan sebuah perjalanan dan perkelahian batin
                yang dilalui untuk melepaskan beban beban masa silam demi
                mencapai kedigdayaan.
              </p>
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-10 mx-5">
              <div className="text-white w-full">
                {tracks.map((song, i) => (
                  <div
                    key={i}
                    className="flex w-full justify-between items-center py-3 border-b"
                  >
                    <p className="uppercase font-vogue text-xl">
                      {song}
                    </p>
                    <button className="rounded-full px-4 border py-2">
                      PLAY
                    </button>
                  </div>
                ))}
              </div>

              <div className="md:sticky top-11">
                <img
                  src={album}
                  className="w-[40em] hover:opacity-60 transition"
                  alt="Album cover"
                />
              </div>
            </div>

            <img src={border} className="-rotate-180" />
          </div>
        </div>

        <div className="overflow-hidden whitespace-nowrap">
          <div className="marquee flex">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`marquee-img-${index}`}
                className="h-20 inline-block"
              />
            ))}
            {images.map((image, index) => (
              <img
                key={index + images.length}
                src={image}
                alt={`marquee-img-${index + images.length}`}
                className="h-20 inline-block"
              />
            ))}
          </div>
        </div>

        <div className="md:mx-10 my-5">
          <div
            className={`w-full bg-[url("./assets/cta.png")] flex items-end justify-between p-10`}
          >
            <div className="flex flex-col items-start gap-4">
              <img src={diiigdaya} className="mix-blend-screen w-32 md:w-40" />

              <div className="-space-y-1">
                <h1 className="text-lg md:text-2xl text-white">OUT NOW</h1>
                <h1 className="text-lg md:text-5xl text-white">27.10.2023</h1>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-3 bg-[#DE0100] p-3 text-lg tracking-tight hover:bg-transparent hover:text-red border border-red"
              >
                SPOTIFY <img src={arrow} className="w-4" />
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-[#DE0100] p-3 text-lg tracking-tight hover:bg-transparent hover:text-red border border-red"
              >
                YOUTUBE <img src={arrow} className="w-4" />
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-[#DE0100] p-3 text-lg tracking-tight hover:bg-transparent hover:text-red border border-red"
              >
                TOUR <img src={arrow} className="w-4" />
              </a>
            </div>
          </div>
        </div>

        <footer className="bg-[url('./assets/red.png')] h-[25vh] d:h-[50vh] flex flex-col items-center justify-center">
          <h1 className="text-4xl font-vogue">DIIIGDAYA</h1>
        </footer>
        <div className="flex justify-between bg-black opacity-60 text-white">
          <p className="text-xs font-inter tracking-tight">@VIRDIOSAM</p>
          <p className="text-xs">
            Images are used with respect to the owner's rights
          </p>
        </div>
      </div>
    </>
  );
}
