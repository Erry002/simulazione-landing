import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { useIsMobile } from "../components/responsiveUtils.js";

import TextBox from "../components/TextBox.jsx";
// import TextArea from "../components/TextArea.jsx";
import CheckBox from "../components/CheckBox.jsx";

import contact from "../assets/contact_us.png";
import whatsapp from "../assets/icone-whatsapp-rouge-1.png";
import facebook from "../assets/icons-spry-Facebook-rouge-1.png";
import instagram from "../assets/Instagram.parspng-rouge-1.png";

function EmailRestAPI() {

  const isMobile = useIsMobile();
  const [name, setName] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [nomLaurea, setNomLaurea] = useState("");
  const [nomCitta, setNomCitta] = useState("");
  // const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validazione del form
    if (!name || !cognome || !email || !nomCitta || !nomLaurea || !isChecked) {
      alert("Per favore compila tutti i campi e accetta i termini e condizioni.");
      return;
    }

    const serviceId = "service_hozzjlm";
    const templateId = "template_u42rl68";
    const publicKey = "vjw7dcQJizcn3ce0Z";

    const templateParams = {
      name,
      cognome,
      email,
      nomCitta,
      nomLaurea,
      isChecked,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email inviata con successo!');
      }, (error) => {
        console.error('FAILED...', error);
        alert(`Errore nell'invio della email: ${error.text}. Riprova.`);
      });
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex bg-slate-50">
        <h1 className="text-slate-50 text-xl py-3 bg-[#EE2C3C] text-center w-full">
          CONTATTI
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col-reverse sm:items-center sm:gap-20 sm:flex-row">
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
            <div className="flex justify-center sm:justify-normal items-center gap-5 mt-4 sm:my-10 sm:ml-[60px]">
              <a href="">
                <img src={whatsapp} alt="WhatsApp" />
              </a>
              <a href="https://www.facebook.com/people/Mondo-tesi/61551270380444/?mibextid=LQQJ4d">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/mondotesi_/">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
            {isMobile ? (
              <img src={contact} alt="Mobile View" className="bg-cover" />
            ) : (
              <img alt="Desktop View" className="hidden" />
            )}
            <div className="text-slate-900 flex flex-col sm:ml-[20px]">
              <h2 className="text-red-700 pl-[44px] font-semibold mb-4 text-3xl">
                Contattaci
              </h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-[314px] sm:w-[500px] xl:w-[578px] pl-10 items-center"
              >
                <div className="w-full xl:flex xl:justify-between">
                  <div className="w-full mr-4">
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
                <div className="w-full xl:flex xl:justify-between">
                  <div className="w-full mr-4">
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
                <div className="w-full">
                  <TextBox
                    title="Nome facoltà"
                    value={nomLaurea}
                    onChange={(e) => setNomLaurea(e.target.value)}
                    placeholder="Facoltà"
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
          <div>
            <img src={contact} alt="Contact" className="hidden sm:block sm:bg-cover sm:h-[630px] xl:h-[900px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailRestAPI;
