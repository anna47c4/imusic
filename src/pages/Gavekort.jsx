import { useState } from "react";
import Button from "../components/Button";
function GiftCardForm() {
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Her kan du implementere den nødvendige logik for at behandle formulardataen, f.eks. sende den til en server eller udløse en handling
    console.log(
      "Gavekort beløb:",
      amount,
      "Købers navn:",
      name,
      "Købers email:",
      email
    );
    // Nulstil formularfelterne efter indsendelse
    setAmount(0);
    setName("");
    setEmail("");
  };

  return (
    <div className="gift-card-form">
      <h2>Køb et gavekort</h2>

      <form onSubmit={handleSubmit}>
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
  );
}

export default GiftCardForm;
