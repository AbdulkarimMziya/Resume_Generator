import { useState } from 'react';
import '../../styles/components/PersonalDetails.css';
import SkillsCard from './SkillsCard';
import SkillsForm from './SkillsForm';

export default function Skills({ skills, setSkills }) {

    const [showForm, setShowForm] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [formMode, setFormMode] = useState('add'); // 'add' or 'edit'

    const handleAddSkill = () => {
        setFormMode('add');
        setEditingIndex(null);
        setShowForm(true);
    };

    const handleEditSkill = (index) => {
        setFormMode('edit');
        setEditingIndex(index);
        setShowForm(true);
    };

    const handleDeleteSkill = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setEditingIndex(null);
        setFormMode('add');
    };

    return (
        <div className="personal-skills">
            <h2 className="skills-title">Skills</h2>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <SkillsCard 
                        key={index} 
                        skill={skill} 
                        index={index}
                        onEdit={handleEditSkill}
                        onDelete={handleDeleteSkill}
                    />
                ))}
            </ul>
            <div className="add-skills-button" onClick={handleAddSkill}>+ Add Skill</div>
            {showForm && (
                <SkillsForm
                    formMode={formMode}
                    setFormMode={setFormMode}
                    skills={skills}
                    setSkills={setSkills}
                    editingIndex={editingIndex}
                    setEditingIndex={setEditingIndex}
                    onClose={handleCloseForm}
                />
            )}
        </div>
    );
}