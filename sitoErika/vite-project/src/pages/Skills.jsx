import consultazionetesi_1 from "../assets/consulting_1.png";
import consultazionetesi_desktop_1 from "../assets/consultazionetesi_desktop_1.png";
import pianificazione_1 from "../assets/pianificazione_1.png";
import pianificazione_desktop_1 from "../assets/pianificazione_desktop_1.png";
import Automate_1 from "../assets/Automate_1.png";
import Automante_desktop_1 from "../assets/Automante_desktop_1.png";
import books_1 from "../assets/books_1.png";
import books_desktop_1 from "../assets/books_desktop_1.png";
import compilation_1 from "../assets/Compilatio_1.png";
import compilation_desktop_1 from "../assets/compilation_desktop_1.png";
import cnd_1 from "../assets/cnd_1.png";
import cnd_desktop_1 from "../assets/cnd_desktop_1.png";

import React from "react";
import { useIsMobile } from "../components/responsiveUtils.js";

export default function Skills() {
  const isMobile = useIsMobile();

  return (
    // div che contiene tutta la pagina
    <div className="flex flex-col min-h-screen font-alata text-[13px] sm:text-[22px] justify-center items-center ">
      <div className=" flex justify-center items-center bg-[#EE2C3C] p-3 text-slate-100 text-2xl w-full">
        <h1>SERVIZI</h1>
      </div>
      {/* div che contiene le varie sezioni divise per i servizi offerti */}
      <div className=" sm:max-w-7xl flex flex-col items-center">
        {/* primo div per consultazione */}
        <div className=" flex flex-col mt-8 px-1 sm:flex-row">
          <div className=" sm:w-[600px] sm:z-40 sm:mr-[360px]">
            <h2 className=" text-2xl sm:text-[55px] text-red-800 mb-3 text-center sm:text-left sm:ml-4 sm:leading-[50px]">
              Revisione e correzione linguistica
            </h2>
            <p className=" text-justify mx-5 leading-5">
              La revisione e correzione linguistica sono{" "}
              <span className="text-red-700">processi editoriali</span> che
              mirano a migliorare la{" "}
              <span className="text-red-700">qualità</span> e la
              <span className="text-red-700"> chiarezza</span> di un testo,
              correggendo errori grammaticali, sintattici, ortografici e
              stilistici.{" "}
            </p>
            <p className=" ml-5 mt-3">Può essere divisa in tre fasi:</p>
            <ol className=" list-disc ml-4 mr-3 ">
              <li className=" mx-5 mt-3 text-red-700">
                <span className=" text-black">
                  Una <span className=" text-red-700">fase iniziale </span> di
                  lettura e determinazione dello stato di accuratezza del testo;
                </span>
              </li>
              <li className=" ml-5 mt-3 text-red-700">
                <span className=" text-black">
                  Una <span className=" text-red-700"> seconda fase</span> di
                  correzione linguisticp/formale e contenutistica
                </span>
              </li>
              <li className=" ml-5 my-3 text-red-700">
                <span className=" text-black">
                  Una <span className=" text-red-700"> fase finale </span> di
                  rilettura del testo corretto e di controllo conclusivo della
                  struttura ed impaginazione del testo, eventualmente modificato
                  dalle correzioni
                </span>
              </li>
            </ol>
            <p className=" text-justify mx-5 leading-5">
              Questi <span className=" text-red-700"> due processi</span> sono
              spesso eseguiti in modo{" "}
              <span className=" text-red-700"> concomitante </span> per
              assicurare che il testo soddisfi gli standard richiesti
              contribuendo al <span className=" text-red-700"> valore </span>{" "}
              complessivo del lavoro accademico.
            </p>
          </div>
          {isMobile ? (
            <img
              src={pianificazione_1}
              alt="consultazione"
              className=" mt-6"
            />
          ) : (
            <img alt="Desktop View" className="hidden" />
          )}

          <img
            src={pianificazione_desktop_1}
            alt="consultazione"
            className=" sm:absolute sm:h-[482px] sm:z-0 sm:ml-[360px] sm:mt-24 hidden sm:block"
          />
        </div>

        {/* div di divisore di paragrafi */}
        <div className=" flex flex-col items-center">
          <div className=" h-[1px] bg-red-800 w-[243px] mt-2 mb-6"></div>
        </div>

        {/* secondo div per pianificazione */}
        <div className=" flex flex-col sm:flex-row sm:items-center">
          <div className=" sm:w-[600px] sm:mr-[360px]">
            <div className=" text-center items-center">
              <h2 className=" text-2xl text-red-800 ml-5 mb-3 sm:text-left sm:ml-4 sm:text-[55px] sm:leading-[60px]">
                Pianificazione e sviluppo del progetto tesi
              </h2>
              <p className=" text-justify mx-5 leading-5">
                La pianificazione e lo sviluppo del progetto di tesi sono{" "}
                <span className=" text-red-700">fasi cruciali</span> nel
                percorso universitario di un laureando o di un dottorando.
              </p>
              <p className=" text-justify mx-5 leading-5">
                Mediante questo processo si definiscono gli{" "}
                <span className="text-red-700">obiettivi</span>, la{" "}
                <span className="text-red-700">metodologia</span> e tutti gli{" "}
                <span className="text-red-700">strumenti</span> necessari,
                nonché la stesura di una tabella di marcia che ti guiderà
                attraverso tutte le fasi del processo.
              </p>
            </div>

            <ol className=" text-left mt-4 ml-8">
              <li className=" list-disc text-red-700">
                <span className=" text-black">l'area tematica;</span>
              </li>
              <li className=" list-disc text-red-700">
                <span className=" text-black">gli obiettivi;</span>
              </li>
              <li className=" list-disc text-red-700">
                <span className=" text-black">
                  le parole chiave essenziali;
                </span>
              </li>
              <li className=" list-disc text-red-700">
                <span className=" text-black">il metodo;</span>
              </li>
              <li className=" list-disc text-red-700">
                <span className=" text-black">il sommario;</span>
              </li>
              <li className=" list-disc text-red-700">
                <span className=" text-black">
                  le fonti bibliografiche e sitografiche;
                </span>
              </li>
              <li className=" list-disc text-red-700">
                <span className=" text-black">le risorse di cui disponi;</span>
              </li>
            </ol>
          </div>

          {isMobile ? (
            <img
              src={consultazionetesi_1}
              alt="consultazione"
              className=" mt-6"
            />
          ) : (
            <img alt="Desktop View" className="hidden" />
          )}
          <img src={consultazionetesi_desktop_1} alt="pianificazione" className=" my-8 mx-5 sm:absolute sm:h-[282px] sm:z-0 sm:ml-[550px] sm:mt-20 hidden sm:block" />
        </div>

        {/* div di divisore di paragrafi */}
        <div className=" flex flex-col items-center">
          <div className=" h-[1px] bg-red-800 w-[243px] mt-2 mb-6"></div>
        </div>

        {/* terzo div per oragnizzazione */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-center">
          <div className=" sm:w-[600px] sm:mr-[380px]">
            <h2 className=" text-2xl text-red-800 ml-5 mb-4 text-center sm:text-left sm:ml-4 sm:text-[55px] sm:leading-[60px]">
              Organizzazione <br /> dei contenuti tematici
            </h2>
            <p className=" text-justify mx-5 leading-5">
              L'organizzazione dei contenuti tematici definisce il modo in cui
              le
              <span className="text-red-700"> informazioni</span> o i{" "}
              <span className="text-red-700">materiali</span> sono strutturati
              all'interno dell’elaborato in base ai temi o agli argomenti
              trattati soffermandosi su:
              <ol>
                <li className=" text-red-700 list-disc ml-4 my-2">
                  Analisi della lettura
                  <span className=" text-black">
                    : fase in cui si esaminano gli studi precedenti, le teorie e
                    le ricerche correlate per contestualizzare il proprio
                    elaborato di sinetesi finale
                  </span>
                </li>
                <li className=" text-red-700 list-disc ml-4 my-2">
                  Metodologia
                  <span className=" text-black">
                    : fase in cui si descrivono gli strumenti, i campioni e le
                    modalità di indagine utilizzate nella ricerca.
                  </span>
                </li>
                <li className=" text-red-700 list-disc ml-4 my-2">
                  Risultati
                  <span className=" text-black">
                    : fase in cui si espongono con chiarezza e coerenza i dati
                    raccolti e le analisi effettuate.
                  </span>
                </li>
              </ol>
              È una delle fasi cruciali per presentare le informazioni in modo
              efficace, consentendo al lettore di seguire facilmente il flusso
              di pensiero e comprendere
              <span className="text-red-700"> l’essenza</span> del testo.
            </p>
          </div>

          {isMobile ? (
            <img
              src={Automate_1}
              alt="consultazione"
              className=" my-8"
            />
          ) : (
            <img alt="Desktop View" className="hidden" />
          )}
          <img
            src={Automante_desktop_1}
            alt="Automazione"
            className=" my-8 sm:absolute sm:h-[352px] sm:z-0 sm:ml-[700px] xl:ml-[750px] sm:mt-20 hidden sm:block"
          />
        </div>

        {/* div di divisore di paragrafi */}
        <div className=" flex flex-col items-center">
          <div className=" h-[1px] bg-red-800 w-[243px] mt-2 mb-6"></div>
        </div>

        {/* quarto div per ricerca */}
        <div className="flex flex-col gap-4 sm:flex-row ">
          <div className=" sm:w-[600px] sm:mr-[380px] sm:mt-10">
            <h2 className=" text-2xl text-red-800 ml-5 mb-3 text-center sm:text-left  sm:text-[55px] sm:leading-[60px]">
              Ricerca bibliografica
            </h2>
            <p className=" text-justify mx-5 leading-5 ">
              La ricerca bibliografica è una parte fondamentale nella
              preparazione di una tesi e svolge un
              <span className="text-red-700">ruolo chiave</span> nella
              costruzione di una{" "}
              <span className="text-red-700">base solida</span> per la tua tesi.
            </p>
            <p className=" text-justify mx-5 leading-5">
              Una volta definito l’argomento da studiare e formulata la domanda
              di ricerca che ti permetterà di{" "}
              <span className=" text-red-700"> individuare</span> le
              informazioni disponibili sull’argomento oggetto del tuo interesse
              e di definire lo stato dell’arte delle conoscenze.
            </p>
            <p className=" text-justify mx-5 leading-5">
              La ricerca bibliografica è necessaria in quanto permette di{" "}
              <span className=" text-red-700">contestualizzare</span> la
              ricerca, <span className=" text-red-700"> giustificarla</span> e
              definire il <span className=" text-red-700"> metodo</span> di
              studio.
            </p>
          </div>
          
          {isMobile ? (
            <img src={books_1} alt="ricerca bibliografica" className=" mx-6" />
          ) : (
            <img alt="Desktop View" className="hidden" />
          )}
          <img
            src={books_desktop_1}
            alt="Automazione"
            className=" my-8 sm:absolute sm:h-[320px] sm:z-0 sm:ml-[650px] sm:-mt-[10px] xl:ml-[680px] hidden sm:block"
          />
        </div>

        {/* div di divisore di paragrafi */}
        <div className=" flex flex-col items-center">
          <div className=" h-[1px] bg-red-800 w-[243px] mt-2 mb-6"></div>
        </div>

        {/* quinto div e iltimo div per supporto tecnico */}
        <div className="flex flex-col items-center sm:flex-row">
          <div className=" sm:items-center sm:ml-[70px] sm:flex sm:flex-col sm:text-left">
            <div className=" sm:w-[600px]">
              <h2 className=" text-2xl text-red-800 ml-5 mb-3 text-center sm:text-left sm:ml-0 sm:text-[55px] sm:leading-[60px]">
                Supporto tecnico e <br /> formattazione
              </h2>
              <p className=" text-justify mx-5 sm:mx-0 leading-5">
                Il supporto tecnico e la formattazione della tesi sono aspetti
                importanti per assicurare che il lavoro universitario sia
                presentato in modo{" "}
                <span className="text-red-700">professionale</span>,{" "}
                <span className="text-red-700">coerente</span> e{" "}
                <span className="text-red-700">conforme</span> agli standard
                richiesti.{" "}
              </p>
            </div>

            {isMobile ? (
              <img
                src={compilation_1}
                alt="supporto_tecnico"
                className=" my-8"
              />
            ) : (
              <img alt="Desktop View" className="hidden" />
            )}

            <img
              src={compilation_desktop_1}
              alt="supporto_tecnico"
              className="hidden sm:block w-[650px]"
            />
            <div className=" sm:w-[600px] sm:mb-14">
              <p className=" text-justify mx-5 sm:mx-0 leading-5 ">
                Utilizzando strumenti{" "}
                <span className="text-red-700">software</span> per individuare e
                prevenire il <span className="text-red-700">plagio</span>, ti
                offriamo supporto nella verifica dell'
                <span className="text-red-700">autenticità</span> dei tuoi
                contenuti scritti. Analizzeremo attentamente l'intero elaborato
                di sintesi finale, passo dopo passo, per assicurarci che il tuo
                contenuto sia autentico al massimo grado possibile.
              </p>
            </div>
          </div>

          {isMobile ? (
              <img
                src={cnd_1}
                alt="cnd"
                className=" my-8"
              />
            ) : (
              <img alt="Desktop View" className="hidden" />
            )}
          <img src={cnd_desktop_1} alt="cnd" className=" hidden sm:block sm:ml-[20px] my-8 sm:my-0 sm:h-[250px]" />
        </div>
      </div>
    </div>
  );
}
