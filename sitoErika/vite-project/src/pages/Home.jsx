import sfondo from "../assets/sfondo_1.png";
import sfondo_lungo_2 from "../assets/sfondo_lungo_1.png";
import rosso from "../assets/rosso_1.png";

// import per contatti
import TextBox from "../components/TextBox.jsx";
import TextArea from "../components/TextArea.jsx";
import CheckBox from "../components/CheckBox.jsx";

import contact from "../assets/contact_us.png";
import whatsapp from "../assets/icone-whatsapp-rouge-1.png";
import facebook from "../assets/icons-spry-Facebook-rouge-1.png";
import instagram from "../assets/Instagram.parspng-rouge-1.png";
//fine import per contatti

import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { useIsMobile } from "../components/responsiveUtils.js";

export default function Home() {
  // corpo form
  const isMobile = useIsMobile();
  const [name, setName] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [nomLaurea, setNomLaurea] = useState("");
  const [nomCitta, setNomCitta] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  //variabile per mostrare una foto in phoneMode e un'altra per la desktopMode [inizio riga 28, fine riga 39]
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // fine script logico per controllare quale immagine deve essere visualizzata

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      alert('Devi accettare i termini e le condizioni')
      return;
    }

    //I dati di emailjs come sevice id, template id e la public key
    const serviceId = "service_hozzjlm";
    const templateId = "template_u42rl68";
    const publicKey = "vjw7dcQJizcn3ce0Z";

    // const data = {
    //   service_id: serviceId,
    //   template_id: templateId,
    //   user_id: publicKey,
    //   template_params: {
    //     from_name: name,
    //     from_email: email,
    //     to_name: "Enrico",
    //     message: message,
    //   }

    const templateParams = {
      name,
      cognome,
      email,
      nomCitta,
      nomLaurea,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email inviata con successo!');
      }, (error) => {
        console.error('FAILED...', error);
        alert('Errore nell\'invio della email, riprova.');
      });
  };
  //fine corpo form

  return (
    <div className="flex flex-col bg-slate-50 font-alata">
      {/* div Home page */}
      <div className="relative">
        <h1 className="absolute right-10 w-44 mt-4 text-lg font-bold text-end z-40 xl:text-[50px] sm:text-[42px] xl:w-[633px] sm:w-[527px] sm:leading-[50px] xl:text-center sm:font-thin xl:font-semibold xl:mr-20 sm:-mr-6 xl:mt-44 sm:mt-10">
          Hai bisogno di
          <span className="text-red-700"> aiuto</span> per la stesura della tua
          <span className="text-red-700"> tesi</span>?
        </h1>
        {isMobile ? (
          <img src={sfondo} alt="Mobile View" className="relative z-0 bg-cover" />
        ) : (
          <img src={sfondo_lungo_2} alt="Desktop View" className="" />
        )}
        <div className=" absolute bottom-20 sm:right-[100px] xl:right-[300px]">
          <img
            src={rosso}
            alt=""
            className=" z-40 ml-24 "
          />
          <h2 className=" ml-20  text-2xl ">
            <span className="text-red-700">MondoTesi</span> è qui per
            <span className="text-red-700"> te</span>!
          </h2>
        </div>
      </div>

      {/* Inizio div FORM */}
      <div className="flex bg-slate-50">
        <h1 className="text-slate-50 text-xl py-3 bg-[#EE2C3C] text-center w-full">
          CONTATTI
        </h1>
      </div>
      <div className=" flex justify-center"> {/* wrapper per contattami */}
        <div className="flex flex-col-reverse sm:items-center sm:gap-20 sm:flex-row ">
          {/* div paragrafo */}
          <div className="flex flex-col h-full sm:justify-center sm:gap-14 sm:flex-col sm:items-normal sm:w-[630px]">
            <div className="flex items-center justify-center">
              <p className="font-display mt-5 w-[80%] text-base">
                Chiamaci o scrivici su WhatsApp, Facebook e/o Instagram per avere
                subito un
                <span className="text-[#EE2C3C]"> preventivo gratuito </span>
                su misura per le tue specifiche esigenze, con dettagli di costi ed
                attività.
              </p>
            </div>
            {/* div icone */}
            <div className="flex justify-center sm:justify-normal items-center gap-5 mt-4 sm:my-10 sm:ml-[60px] ">
              <a href="">
                <img src={whatsapp} alt="" className="" />
              </a>
              <a href="https://www.facebook.com/people/Mondo-tesi/61551270380444/?mibextid=LQQJ4d">
                <img src={facebook} alt="" className="" />
              </a>
              <a href="https://www.instagram.com/mondotesi_/">
                <img src={instagram} alt="" className="" />
              </a>
            </div>
            {isMobile ? (
              <img src={contact} alt="Mobile View" className=" bg-cover" />
            ) : (
              <img alt="Desktop View" className="hidden" />
            )}
            {/* div form */}
            <div className="text-slate-900 flex flex-col sm:ml-[20px]">
              <h2 className="text-red-700 pl-[44px]  font-semibold mb-4 text-3xl">
                Contattaci
              </h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-[314px] sm:w-[500px] xl:w-[578px] pl-10 items-center"
              >
                <div className="w-full xl:flex xl:justify-between">
                  <div className=" w-full mr-4">
                    <TextBox
                      title="Nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Mario"
                    />
                  </div>
                    <TextBox
                      title="Cognome"
                      value={cognome}
                      onChange={(e) => setCognome(e.target.value)}
                      placeholder="Rossi"
                    />
                </div>
                <div className=" w-full xl:flex xl:justify-between">
                  <div className=" w-full mr-4">
                    <TextBox
                      required
                      title="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Mariorossi@gmail.com"
                    />
                  </div>
                  <TextBox
                    title="Città"
                    value={nomCitta}
                    onChange={(e) => setNomCitta(e.target.value)}
                    placeholder="Città"
                  />
                </div>
                <div className=" w-full">
                  <TextBox
                    title="Nome facoltà"
                    value={nomLaurea}
                    onChange={(e) => setNomLaurea(e.target.value)}
                    placeholder="Facoltà"
                    stile=""
                  />
                </div>
                <CheckBox
                  title=""
                  isChecked={isChecked}
                  onChange={handleCheckboxChange}
                  label="Accetto termini e condizioni"
                />
                <button
                  type="submit"
                  className="bg-red-800 rounded-3xl w-[128px] h-[40px] mb-8 text-slate-50 text-lg"
                >
                  Invia
                </button>
              </form>
            </div>
          </div>
          <div className=" "> {/* img in versione desktop -> sm:*/}
            <img src={contact} alt="contact" className="hidden sm:block sm:bg-cover sm:h-[630px] xl:h-[900px] " />
          </div>
        </div>
      </div>
    </div>
  );
}
