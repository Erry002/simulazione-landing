import sfondo2 from "../assets/sfondo_2.png";
import sfondo_desktop_2 from "../assets/sfondo_about_desktop.png";
import { Link } from "react-router-dom";
import React from "react";
import { useIsMobile } from "../components/responsiveUtils.js";

export default function About() {
  const isMobile = useIsMobile();

  return (
    <div className=" flex flex-col bg-slate-100 sm:bg-inherit min-h-screen font-alata">
      <div className=" flex justify-center items-center bg-[#EE2C3C] p-3 text-slate-100 text-lg">
        <h2>CHI SIAMO</h2>
      </div>
      <div className=" flex">
        {isMobile ? (
          // se vista in modalita mobile
          <div className=" flex flex-col text-sm text-justify ">
            <div className="flex justify-center items-center">
              <p className="text-black mt-6 mx-4">
                Ciao, sono <span className="text-red-700">Erika</span>, una
                <span className="text-red-700"> professionista</span> con una
                vasta esperienza nel campo accademico,
                <span className="text-red-700"> specializzata </span> come
                <span className="text-red-700"> redattrice di tesi</span>. Nel
                corso degli anni, ho guidato numerosi studenti nel
                raggiungimento dei loro obiettivi universitari.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-black mt-6 mx-4">
                Mi rendo conto che la stesura di una tesi può essere un compito
                complesso e articolato, e comprendo le difficoltà nel trovare
                soluzioni adeguate. Il mio obiettivo è esserti di aiuto,
                facilitando il tuo cammino verso la laurea con
                <span className="text-red-700"> professionalità</span> e un
                <span className="text-red-700"> approccio empatico</span>.
                Voglio garantirti un ambiente confortevole mentre affronti gli
                ostacoli che si presentano lungo il percorso accademico.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-black mt-6 mx-4">
                Se stai cercando un <span className="text-red-700">tutor </span>
                dedicato per realizzare il sogno di laurearti, sono qui per te.
                Insieme, possiamo lavorare verso il tuo obiettivo e rendere
                questo percorso un'
                <span className="text-red-700">esperienza gratificante</span>.
              </p>
            </div>
            <div className="static h-[396px] mt-14">
              <img src={sfondo2} alt="immagine_di_una_laureata" className="" />
              <h2 className=" relative text-red-700 text-[18px] drop-shadow-2xl w-[166px] ml-[200px] bottom-[300px] leading-4 text-right">
                Non esitare a contattarmi per iniziare questo viaggio insieme!
              </h2>
              <div className=" relative ml-[240px] bottom-[190px] z-40">
                <Link
                  to="/form"
                  className=" bg-red-700 hover:bg-red-400 shadow-lg cursor-pointer px-8 py-3 rounded-3xl text-slate-50"
                >
                  Contatti
                </Link>
              </div>
            </div>
          </div>
        ) : (
          // se vista in modalita desktop
          <div className=" flex items-center">
            <img
              src={sfondo_desktop_2}
              alt="immagine_di_una_laureata"
              className=" w-[924px]"
            />

            <div className=" z-40 sm:-ml-[400px] xl:-ml-[250px] flex flex-col items-center justify-between xl:gap-20 sm:gap-10 sm:max-w-[800px] ">
              <div className=" flex flex-col text-[20px]">
                <div className="flex justify-center items-center">
                  <p className="text-black mt-6 mx-4">
                    Ciao, sono <span className="text-red-700">Erika</span>, una
                    <span className="text-red-700"> professionista</span> con
                    una vasta esperienza nel campo accademico,
                    <span className="text-red-700"> specializzata </span> come
                    <span className="text-red-700"> redattrice di tesi</span>.
                    Nel corso degli anni, ho guidato numerosi studenti nel
                    raggiungimento dei loro obiettivi universitari.
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-black mt-6 mx-4">
                    Mi rendo conto che la stesura di una tesi può essere un
                    compito complesso e articolato, e comprendo le difficoltà
                    nel trovare soluzioni adeguate. Il mio obiettivo è esserti
                    di aiuto, facilitando il tuo cammino verso la laurea con
                    <span className="text-red-700"> professionalità</span> e un
                    <span className="text-red-700"> approccio empatico</span>.
                    Voglio garantirti un ambiente confortevole mentre affronti
                    gli ostacoli che si presentano lungo il percorso accademico.
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-black mt-6 mx-4">
                    Se stai cercando un{" "}
                    <span className="text-red-700">tutor </span>
                    dedicato per realizzare il sogno di laurearti, sono qui per
                    te. Insieme, possiamo lavorare verso il tuo obiettivo e
                    rendere questo percorso un'
                    <span className="text-red-700">
                      esperienza gratificante
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div className=" flex flex-col justify-center items-center gap-14 h-[200px] w-[500px]">
                <h2 className=" text-red-700 text-[32px] text-center drop-shadow-2xl leading-8 ">
                  Non esitare a contattarmi per iniziare questo viaggio insieme!
                </h2>
                <div className=" ">
                  <Link
                    to="/form"
                    className=" bg-red-700 hover:bg-red-400 shadow-xl cursor-pointer px-8 py-3 rounded-3xl text-slate-50"
                  >
                    Contatti
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
