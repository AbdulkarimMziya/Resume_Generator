import { useState } from 'react';
import '../../styles/components/PersonalDetails.css';
import ExperienceCard from './ExperienceCard';

export default function Experience({ experiences = [] }) {

    const [showForm, setShowForm] = useState(false);

    const handleAddExperience = () => {
        setShowForm(!showForm);
        alert("This feature is not implemented yet. Please check back later.");
    };

    return (
        <section className="personal-experience">
            <h2>Experience</h2>
            {experiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
            ))}
            <div className="add-experience-button" onClick={handleAddExperience}>+ Add Experience</div>
        </section>
    );
}