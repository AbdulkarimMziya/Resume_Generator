import { useState } from 'react';
import '../../styles/components/PersonalDetails.css';
import SkillsCard from './SkillsCard';
import SkillsForm from './SkillsForm';

export default function Skills({ skills = [], setSkills }) {

    const [showForm, setShowForm] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [formMode, setFormMode] = useState('add'); // 'add' or 'edit'

    const handleAddSkill = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="personal-skills">
            <h2 className="skills-title">Skills</h2>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <SkillsCard key={index} skill={skill} />
                ))}
            </ul>
            <div className="add-skills-button" onClick={handleAddSkill}>+ Add Skill</div>
            {showForm && <SkillsForm  />}
        </div>
    );
}