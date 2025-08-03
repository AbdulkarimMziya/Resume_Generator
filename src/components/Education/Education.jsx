import { useState } from 'react';
import '../../styles/components/PersonalDetails.css';
import EducationCard from './EducationCard';
import EducationForm from './EducationForm';

export default function Education({ education, setEducation }) {

    const [showForm, setShowForm] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [formMode, setFormMode] = useState('add'); // 'add' or 'edit'

    const handleAddEducation = () => {
        setFormMode('add');
        setEditingIndex(null);
        setShowForm(true);
    };

    const handleEditEducation = (index) => {
        setFormMode('edit');
        setEditingIndex(index);
        setShowForm(true);
    };

    const handleDeleteEducation = (index) => {
        const updatedEducation = education.filter((_, i) => i !== index);
        setEducation(updatedEducation);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setEditingIndex(null);
        setFormMode('add');
    };

    return (
        <section className="personal-education">
            <h2>Education</h2>
            {education.map((edu, index) => (
                <EducationCard 
                    key={edu.id || index} 
                    education={edu} 
                    index={index}
                    onEdit={handleEditEducation}
                    onDelete={handleDeleteEducation}
                />
            ))}
            <div className="add-education-button" onClick={handleAddEducation}>+ Add Education</div>
            {showForm && (
                <EducationForm
                    formMode={formMode}
                    setFormMode={setFormMode}
                    education={education}
                    setEducation={setEducation}
                    editingIndex={editingIndex}
                    setEditingIndex={setEditingIndex}
                    onClose={handleCloseForm}
                />
            )}
        </section>
    );
}
