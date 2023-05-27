//react imports
import { useState, useEffect } from "react";
//component imports
import Button from "../components/Button";

function GiftCardForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //forskellige states til vores felter i formen
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Her kan man implementere den nødvendige logik for at behandle formulardataen, f.eks. sende den til en server eller udløse en handling
    //når formularen er submitted console.logger vi indholdet af den
    console.log(
      "Gavekort beløb:",
      amount,
      "Købers navn:",
      name,
      "Købers email:",
      email
    );
    // Nulstil formularfelterne efter indsendelse
    setAmount("");
    setName("");
    setEmail("");
    // Simulerer en asynkron operation, f.eks. en API-anmodning
    /*  setTimeout(() => {
      setIsSubmitted(true);
    }, 300); */
    setIsSubmitted(true); //sender feedback besked så snart knap er trykket på
  };
  //herunder har vi vores return, som giver os det indhold
  //vi viser i vores frontend, og så har vi en condition der tjekker
  //om formen er submitted, hvis ja, så returner den feedback beskeden
  return (
    <div>
      {isSubmitted ? (
        <div className="feedback-message">
          <p>
            Din bestilling er modtaget! Der er nu sendt en e-mail med
            bekræftelse på din ordre, samt et link til dit Gavekort. <br></br>
            <br></br> Tak for dit køb hos imusic!
          </p>
          <div className="gift-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fc612d"
              viewBox="0 -960 960 960"
              className="giftcard"
            >
              <path d="M140-277v97h680v-97H140Zm0-443h125q-5-9-8-22.5t-3-24.5q0-47.083 33-80.042Q320-880 366-880q30.741 0 56.87 15.5Q449-849 464-825l16.5 26 16.5-26q16-25 41.015-40t53.879-15Q640-880 673-847.5q33 32.5 33 80.861Q706-756 703.5-745t-7.5 25h124q24 0 42 18t18 42v480q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-480q0-24 18-42t42-18Zm0 336h680v-276H571l100 139-48 36-143-198-143 198-48-36 100-139H140v276Zm227-330q22 0 37.5-15.5T420-767q0-22-15.5-37.5T367-820q-22 0-37.5 15.5T314-767q0 22 15.5 37.5T367-714Zm225 0q22.95 0 38.475-15.5Q646-745 646-767t-15.525-37.5Q614.95-820 592-820q-21 0-36.5 15.5T540-767q0 22 15.5 37.5T592-714Z" />
            </svg>
          </div>
        </div>
      ) : (
        <div className="gift-card-form">
          <h2>Køb et gavekort</h2>
          <form className="gavekort-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="amount">Gavekortbeløb i DKK:</label>
              <input
                type="text"
                id="amount"
                value={amount.toString()}
                onChange={(e) => setAmount(parseInt(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="name">Navn:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button
              desc={"KØB GAVEKORT"}
              className={"cta-btn"}
              clickAction={handleSubmit}
              type="submit"
            ></Button>
          </form>
        </div>
      )}
    </div>
  );
}

export default GiftCardForm;
