import r2wc from "@r2wc/react-to-web-component";
import DonationForm from "./components/DonationForm";

customElements.define(
  "donation-form",
  r2wc(DonationForm, {
    props: { buttonColor: "string" },
  })
);
