import React, { useState, useEffect } from "react";
import BoxRecensioni from "../components/BoxRecensioni.jsx";
import BoxRecensioniV2 from "../components/BoxSecondaVer.jsx";

import { FaStar } from "react-icons/fa";

import italia from "../assets/Italia_1.png";
import marker from "../assets/map-marker.png";
import star1 from "../assets/star/star_1.png";
import star2 from "../assets/star/star_2.png";
import star3 from "../assets/star/star_3.png";
import star4 from "../assets/star/star_4.png";
import star5 from "../assets/star/star_5.png";

const MouseClickLogger = ({ setShowRecensione }) => {
  useEffect(() => {
    // Funzione che gestisce il click
    const handleMouseClick = (event) => {
      console.log(
        `Mouse clicked at position: (${event.clientX}, ${event.clientY})`
      );
      setShowRecensione((prev) => !prev);
    };

    // Aggiungi l'event listener al montaggio del componente
    document.addEventListener("click", handleMouseClick);

    // Rimuovi l'event listener allo smontaggio del componente
    return () => {
      document.removeEventListener("click", handleMouseClick);
    };
  }, [setShowRecensione]);
  return null; // Questo componente non rende nulla
};

export default function Project() {
  const [showRecensione, setShowRecensione] = useState(true);

  const toggleMarker = () => {
    setShowRecensione(!showRecensione);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100 font-alata">
      <MouseClickLogger setShowRecensione={setShowRecensione} />
      {/* Aggiungi il logger di click del mouse */}
      <div className="flex justify-center items-center bg-[#EE2C3C] sm:w-full p-3 text-slate-100 text-2xl">
        <h2>RECENSIONI</h2>
      </div>
      <div className=" flex sm:justify-center sm:items-center">
        <p className="text-justify mt-6 mx-5 font-semibold text-sm leading-5">
          Lavoriamo su <span className="text-red-700">tutto</span> il territorio
          nazionale ed abbiamo già seguito
          <span className="text-red-700"> migliaia</span> di
          <span className="text-red-700"> studenti</span> delle più importanti
          università italiane pubbliche e private.
        </p>
      </div>
      <div className="relative mb-[650px] mt-[50px] sm:left-[35%]">
        <img
          src={italia}
          alt="mappa_dell_italia"
          className="absolute z-0 mt-4 ml-8"
        />
        {/* valori che prende questo componente sono:
                nome: Il nome dell'autore della recenzione
                voto: il voto al servizio
                commento: la recensione vera e propria
                position: la sua posizione contanto x e y, come asse
                latoR: se troppo vicina a una parete possiamo decide se 1 farla conparire a destra del marker o 0 farla comparire a sinistra
                flag: prop che uso per gestirmi il suo stato e passarlo al componente per fare altre cose
          */}

        <BoxRecensioniV2
          nome="Daniela T."
          voto={star5}
          commento="Disponibile, capace, pronta e sa perfettamente come gestire questi momenti concitanti e di stress. Una professionista seria che rispetta i tempi ed è sempre presente. Sono stata veramente fortunata ad incontrarla, sia dal punto di vista umano che profesionale. Infinitamente grazie per essermi stata accanto in questo percorso breve ma intenso. Mi ritengo veramente fortunata."
          position={{ top: 375, right: 0, left: 230 }}
          latoR={0}
          flag={showRecensione}
        />
        <BoxRecensioniV2
          nome="Francesca B."
          voto={star5}
          commento="Non ti sarò mai grata abbastanza nel supporto che mi hai fornito nella correzione dell'elaborato. Sei stata estremamente professionale e precisa e puntuale! Davvero grazie di cuore."
          position={{ top: 355, right: 0, left: 180 }}
          latoR={1}
          flag={!showRecensione}
        />

        <BoxRecensioniV2
          nome="Sharon C."
          voto={star5}
          commento="Buongiorno Erika, Grazie veramente per tutto. Precisa e puntuale, sei una persona seria. Hai svolto il lavoro che ti avevo chiesto in modo perfetto e in tempi brevi. Hai colto al volo ció che dovevi fare, in una tesi che era già stata iniziata da me. Ti augoro ogni bene, sei una garanzia!"
          position={{ top: 235, right: 1, left: 240 }}
          latoR={0}
          flag={!showRecensione}
        />
        <BoxRecensioniV2
          nome="Federica I."
          voto={star5}
          commento="Erika è stata fantastica nell'aiutarmi con la mia tesi! La sua competenza e dedizione hanno reso tutto più facile. Sempre gentilissima e super desponibile!! Consiglio vivamente Erika per qualsiasi supporto nella stesura della tesi!!"
          position={{ top: 200, right: 0, left: 180 }}
          latoR={1}
          flag={!showRecensione}
        />
        <BoxRecensioniV2
          nome="Anastasia b."
          voto={star5}
          commento="A volte vogliamo fare tutto da soli, lavoro, esami, tesi e famiglia, beh a volte non ci riusciamo e che male c'è a chiedere aiuto? Passavo per i corridoi del Monastero e ho visto questo numero di telefono con la scritta ''aiuto tesi'' beh, ho provato, pensavo sinceramente fosse la solita bugia per prendersi i soldi....e invece? Ecco Erika mi è venuta in soccorso. Precisa sin dal primo momento, puntuale, rassicurante, professionale soprattutto. Se non avete tempo per scrivere la vostra tesi, se avete delle idee e vi serve un metodo o un consiglio, lei é la persona per voi. Mai visto un lavoro fatto così bene. Complimenti e grazie ancora!"
          position={{ top: 180, right: 0, left: 220 }}
          latoR={0}
          flag={!showRecensione}
        />
        <BoxRecensioniV2
          nome="Francesco T."
          voto={star5}
          commento=" Mondo Tesi, ottimo lavoro svolto, sempre puntuali e disponibilità immadiata. Per qualsiasi cosa o chiarimenti sempre disponibili. Mi sono trovato molto bene e lo consiglio vivamente. Inoltre alla loro ottima professionalità, sono persone educatissime e cordiali e per qualsiasi dubbio sul lavoro non esitano un attimo per correggerlo."
          position={{ top: 90, right: 0, left: 150 }}
          latoR={1}
          flag={!showRecensione}
        />
        <div className=" absolute z-50">
          <BoxRecensioniV2
            nome="Sabrina F."
            voto={star5}
            commento="Professionale, cordiale e sempre molto disponibile. Erika ha dimostrato massima ssistenza da subito. Ottima la qualità sui contenuti elaborati. Consigliatissima!! Sabri"
            position={{ top: 40, right: 5, left: 180 }}
            latoR={1}
            flag={!showRecensione}
          />
        </div>
      </div>
      {/* blocco recensioni sotto la mappa */}
      <div className="flex flex-col justify-center items-center">
        <div>
          <h2 className=" pl-6 text-[20px]">Le recensioni dei miei clienti:</h2>
        </div>
        <div className=" flex flex-col w-[360px] sm:w-[700px] justify-center items-center ">
          <div className=" bg-red-500 m-4 relative rounded-xl pt-2">
            <h1 className=" bg-red-400 rounded-xl text-[13px] pl-4 py-1 mx-2">
              Sabrina F.
            </h1>
            <img
              src={star5}
              alt="una star"
              className=" h-32 absolute -top-[44px] -right-2"
            />
            <div className=" pt-2 px-4 pb-2">
              <p className=" text-slate-50 text-[11px]">
                Professionale, cordiale e sempre molto disponibile. Erika ha
                dimostrato massima ssistenza da subito. Ottima la qualità sui
                contenuti elaborati. Consigliatissima!! Sabri
              </p>
            </div>
          </div>

          <div className=" bg-red-500 m-4 relative rounded-xl pt-2">
            <h1 className=" bg-red-400 rounded-xl text-[13px] pl-4 py-1 mx-2">
              Andrea S.
            </h1>
            <img
              src={star5}
              alt="una star"
              className=" h-32 absolute -top-[44px] -right-2"
            />
            <div className=" pt-2 px-4 pb-2">
              <p className=" text-slate-50 text-[11px]">
                Il tuo apporto alla mia tesi è stato straordinario. La tua
                competenza nel settore è stata evidente, e la tua guida è stata
                un faro nel mio percorso della mia ricerca. Ti sono grato per il
                tempo dedicato, i consigli saggi e supporto costante. La tua
                partecipazione ha arrichito il mio percorso accademico in modi
                che non avrei potuto immaginare.Grazie sinceramente.
              </p>
            </div>
          </div>

          <div className=" bg-red-500 m-4 relative rounded-xl pt-2">
            <h1 className=" bg-red-400 rounded-xl text-[13px] pl-4 py-1 mx-2">
              Martina G.
            </h1>
            <img
              src={star5}
              alt="una star"
              className=" h-32 absolute -top-[44px] -right-2"
            />
            <div className=" pt-2 px-4 pb-2">
              <p className=" text-slate-50 text-[11px]">
                Consiglio a tutti di rivolgersi ad Erika, è stata professionale,
                veloce, affidabile e sempre presente a supportarmi in ogni step
                ed ogni dubbio che avessi. Mi sono sentita accompagnata in
                questo momento che può essere delicato e mi ha aiutato quando il
                tempo stringeva. Grazie mille!!
              </p>
            </div>
          </div>

          <div className=" bg-red-500 m-4 relative rounded-xl pt-2">
            <h1 className=" bg-red-400 rounded-xl text-[13px] pl-4 py-1 mx-2">
              Francesca C.
            </h1>
            <img
              src={star5}
              alt="una star"
              className=" h-32 absolute -top-[44px] -right-2"
            />
            <div className=" pt-2 px-4 pb-2">
              <p className=" text-slate-50 text-[11px]">
                Ho trovato l'aiuto affidabile che cercavo: displonibilità -
                competenza - gentilezza e professionalità sono da elogiare!!!
                Molto soddisfatta!!! Grazie
              </p>
            </div>
          </div>

          <div className=" bg-red-500 m-4 relative rounded-xl pt-2">
            <h1 className=" bg-red-400 rounded-xl text-[13px] pl-4 py-1 mx-2">
              Vanessa P.
            </h1>
            <img
              src={star5}
              alt="una star"
              className=" h-32 absolute -top-[44px] -right-2"
            />
            <div className=" pt-2 px-4 pb-2">
              <p className=" text-slate-50 text-[11px]">
                Dopo un anno di problemi vari con la stesura della mia tesi, ho
                trovato su facebook te, carissima Erika, subito disponibile,
                pronta ad aiutarmi e soprattutto a risolvermi i problemi che mi
                bloccavano. Consigliatissima e competente al 100% nel campo.
                Affidatevi a lei sia per la vostra tesi per intero sia per
                problematiche varie. Grazie ancora!!
              </p>
            </div>
          </div>
          <div className="bg-red-500 m-4 relative rounded-xl pt-2">
            <h1 className="bg-red-400 rounded-xl text-[13px] pl-4 py-1 mx-2">
              Marco B.
            </h1>
            <img
              src={star5}
              alt="una star"
              className="h-32 absolute -top-[44px] -right-2"
            />
            <div className="pt-2 px-4 pb-2">
              <p className="text-slate-50 text-[11px]">
                Erika è una persona estremamente professionale e competente, ha
                saputo correggere la mia tesi con cura e attenzione, fornendo
                ottimi spunti di riflessione e miglioramento. La sua
                disponibilità è stata impeccabile, rispondendo prontamente a
                ogni mia richiesta e chiarimento. Grazie di cuore per aver
                contribuito in modo significativo al mio percorso accademico!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
