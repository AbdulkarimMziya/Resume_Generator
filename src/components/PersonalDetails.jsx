
import PersonalDetailsForm from "./PersonalDetailsForm";
import "../styles/components/PersonalDetails.css";

export default function PersonalDetails(
  {
    name,
    email,
    linkedIn,
    github,
    portfolio,
    setName,
    setEmail,
    setLinkedIn,
    setGithub,
    setPortfolio
  }
) {
  return (
    <section className="personal-details">
      <PersonalDetailsForm
        name={name}
        email={email}
        linkedIn={linkedIn}
        github={github}
        portfolio={portfolio}
        setName={setName}
        setEmail={setEmail}
        setLinkedIn={setLinkedIn}
        setGithub={setGithub}
        setPortfolio={setPortfolio}
      />
    </section>
  );
}