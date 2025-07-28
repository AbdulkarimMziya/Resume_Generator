import { useState } from 'react';
import '../../styles/components/PersonalDetails.css';
import EducationCard from './EducationCard';

export default function Education({ education = [] }) {

    const [showForm, setShowForm] = useState(false);

    const handleAddEducation = () => {
        setShowForm(!showForm);
        alert("This feature is not implemented yet. Please check back later.");
    };

    return (
        <section className="personal-education">
            <h2>Education</h2>
            {education.map((edu) => (
                <EducationCard key={edu.id} education={edu} />
            ))}
            <div className="add-education-button" onClick={handleAddEducation}>+ Add Education</div>
        </section>
    );
}
