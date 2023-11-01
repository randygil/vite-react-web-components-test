import React, { useState, FormEvent } from "react";

import "./DonationForm.css";

export interface DonationFormProps {
  buttonColor?: string;
}

const DonationForm: React.FC<DonationFormProps> = ({ buttonColor }) => {
  const [donorName, setDonorName] = useState<string>("");
  const [donorEmail, setDonorEmail] = useState<string>("");
  const [donationAmount, setDonationAmount] = useState<string>("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(`Donor Name: ${donorName}`);
    console.log(`Donor Email: ${donorEmail}`);
    console.log(`Donation Amount: ${donationAmount}`);
  };

  return (
    <form className="donationForm" onSubmit={handleSubmit}>
      <h2>Donation Form</h2>
      <label htmlFor="donorName">Name:</label>
      <br />
      <input
        type="text"
        id="donorName"
        value={donorName}
        onChange={(e) => setDonorName(e.target.value)}
      />
      <br />
      <label htmlFor="donorEmail">Email:</label>
      <br />
      <input
        type="email"
        id="donorEmail"
        value={donorEmail}
        onChange={(e) => setDonorEmail(e.target.value)}
      />
      <br />
      <label htmlFor="donationAmount">Donation Amount:</label>
      <br />
      <input
        type="number"
        id="donationAmount"
        value={donationAmount}
        onChange={(e) => setDonationAmount(e.target.value)}
        min="1"
      />
      <br />
      <input
        type="submit"
        value="Donate"
        style={{ backgroundColor: buttonColor }}
      />
    </form>
  );
};

export default DonationForm;
