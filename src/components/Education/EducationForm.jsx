import { useState, useEffect } from 'react';

export default function EducationForm({ 
    formMode, 
    education, 
    setEducation, 
    editingIndex, 
    setEditingIndex,
    setFormMode,
    onClose 
}) {
    const [formData, setFormData] = useState({
        institution: '',
        degreeLevel: '',
        fieldOfStudy: '',
        graduationDate: '',
        location: ''
    });

    // Pre-fill form when editing
    useEffect(() => {
        if (formMode === 'edit' && editingIndex !== null && education[editingIndex]) {
            setFormData(education[editingIndex]);
        } else {
            setFormData({
                institution: '',
                degreeLevel: '',
                fieldOfStudy: '',
                graduationDate: '',
                location: ''
            });
        }
    }, [formMode, editingIndex, education]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        if (!formData.institution.trim() || !formData.degreeLevel.trim()) return;

        const newEducation = {
            ...formData,
            id: formMode === 'edit' && editingIndex !== null 
                ? education[editingIndex].id 
                : Date.now()
        };

        if (formMode === 'add') {
            setEducation([...education, newEducation]);
        } else if (formMode === 'edit' && editingIndex !== null) {
            const updatedEducation = education.map((edu, index) => 
                index === editingIndex ? newEducation : edu
            );
            setEducation(updatedEducation);
        }

        handleCancel();
    };

    const handleDelete = () => {
        if (editingIndex !== null) {
            const updatedEducation = education.filter((_, i) => i !== editingIndex);
            setEducation(updatedEducation);
        }
        handleCancel();
    };

    const handleCancel = () => {
        setFormData({
            institution: '',
            degreeLevel: '',
            fieldOfStudy: '',
            graduationDate: '',
            location: ''
        });
        setEditingIndex(null);
        setFormMode('add');
        if (onClose) onClose();
    };

    const isFormValid = formData.institution.trim() && formData.degreeLevel.trim();

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="entry-form-group">
                    <h3>{formMode === 'edit' ? 'Edit Education' : 'Add New Education'}</h3>
                    
                    <div className="form-row">
                        <input
                            type="text"
                            name="institution"
                            value={formData.institution}
                            onChange={handleInputChange}
                            placeholder="Institution Name *"
                            autoFocus
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="text"
                            name="degreeLevel"
                            value={formData.degreeLevel}
                            onChange={handleInputChange}
                            placeholder="Degree Level (e.g., Bachelor's, Master's) *"
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="text"
                            name="fieldOfStudy"
                            value={formData.fieldOfStudy}
                            onChange={handleInputChange}
                            placeholder="Field of Study"
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="text"
                            name="graduationDate"
                            value={formData.graduationDate}
                            onChange={handleInputChange}
                            placeholder="Graduation Date (e.g., May 2024)"
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="Location"
                        />
                    </div>

                    <div className="form-row button-row">
                        {formMode === 'edit' ? (
                            <>
                                <button 
                                    type="button" 
                                    className="btn-primary"
                                    onClick={handleSubmit}
                                    disabled={!isFormValid}
                                >
                                    Update
                                </button>
                                <button 
                                    type="button" 
                                    className="btn-danger"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>
                                <button 
                                    type="button" 
                                    className="btn-secondary"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <button 
                                    type="button" 
                                    className="btn-primary"
                                    onClick={handleSubmit}
                                    disabled={!isFormValid}
                                >
                                    Add
                                </button>
                                <button 
                                    type="button" 
                                    className="btn-secondary"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
