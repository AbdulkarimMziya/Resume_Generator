import { useState } from 'react';
import '../../styles/components/PersonalDetails.css';
import ExperienceCard from './ExperienceCard';
import ExperienceForm from './ExperienceForm';

export default function Experience({ experiences = [], setExperiences }) {

    const [showForm, setShowForm] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [formMode, setFormMode] = useState('add'); // 'add' or 'edit'

    const handleAddExperience = () => {
        setFormMode('add');
        setEditingIndex(null);
        setShowForm(true);
    };

    const handleEditExperience = (index) => {
        setFormMode('edit');
        setEditingIndex(index);
        setShowForm(true);
    };

    const handleDeleteExperience = (index) => {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperiences);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setEditingIndex(null);
        setFormMode('add');
    };

    return (
        <section className="personal-experience">
            <h2>Experience</h2>
            {experiences.map((exp, index) => (
                <ExperienceCard 
                    key={exp.id || index} 
                    experience={exp} 
                    index={index}
                    onEdit={handleEditExperience}
                    onDelete={handleDeleteExperience}
                />
            ))}
            <div className="add-experience-button" onClick={handleAddExperience}>+ Add Experience</div>
            {showForm && (
                <ExperienceForm
                    formMode={formMode}
                    setFormMode={setFormMode}
                    experiences={experiences}
                    setExperiences={setExperiences}
                    editingIndex={editingIndex}
                    setEditingIndex={setEditingIndex}
                    onClose={handleCloseForm}
                />
            )}
        </section>
    );
}