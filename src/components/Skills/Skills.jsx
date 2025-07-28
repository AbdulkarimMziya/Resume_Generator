import { useState } from 'react';
import '../../styles/components/PersonalDetails.css';
import SkillsCard from './SkillsCard';

export default function Skills({ skills = [] }) {

    const [showForm, setShowForm] = useState(false);

    const handleAddSkill = () => {
        setShowForm(!showForm);
        alert("This feature is not implemented yet. Please check back later.");
    };

    return (
        <div className="skills-section">
            <h2 className="skills-title">Skills</h2>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <SkillsCard key={index} skill={skill} />
                ))}
            </ul>
            <div className="add-skills-button" onClick={handleAddSkill}>+ Add Skill</div>
        </div>
    );
}