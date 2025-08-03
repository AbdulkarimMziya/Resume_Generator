import { useState, useEffect } from 'react';

export default function ExperienceForm({ 
    formMode, 
    experiences, 
    setExperiences, 
    editingIndex, 
    setEditingIndex,
    setFormMode,
    onClose 
}) {
    const [formData, setFormData] = useState({
        companyName: '',
        role: '',
        startDate: '',
        endDate: '',
        location: '',
        description: ''
    });

    // Pre-fill form when editing
    useEffect(() => {
        if (formMode === 'edit' && editingIndex !== null && experiences[editingIndex]) {
            setFormData(experiences[editingIndex]);
        } else {
            setFormData({
                companyName: '',
                role: '',
                startDate: '',
                endDate: '',
                location: '',
                description: ''
            });
        }
    }, [formMode, editingIndex, experiences]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        if (!formData.companyName.trim() || !formData.role.trim()) return;

        const newExperience = {
            ...formData,
            id: formMode === 'edit' && editingIndex !== null 
                ? experiences[editingIndex].id 
                : Date.now()
        };

        if (formMode === 'add') {
            setExperiences([...experiences, newExperience]);
        } else if (formMode === 'edit' && editingIndex !== null) {
            const updatedExperiences = experiences.map((exp, index) => 
                index === editingIndex ? newExperience : exp
            );
            setExperiences(updatedExperiences);
        }

        handleCancel();
    };

    const handleDelete = () => {
        if (editingIndex !== null) {
            const updatedExperiences = experiences.filter((_, i) => i !== editingIndex);
            setExperiences(updatedExperiences);
        }
        handleCancel();
    };

    const handleCancel = () => {
        setFormData({
            companyName: '',
            role: '',
            startDate: '',
            endDate: '',
            location: '',
            description: ''
        });
        setEditingIndex(null);
        setFormMode('add');
        if (onClose) onClose();
    };

    const isFormValid = formData.companyName.trim() && formData.role.trim();

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="entry-form-group">
                    <h3>{formMode === 'edit' ? 'Edit Experience' : 'Add New Experience'}</h3>
                    
                    <div className="form-row">
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Company Name *"
                            autoFocus
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            placeholder="Job Title/Role *"
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="text"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleInputChange}
                            placeholder="Start Date (e.g., Jan 2023)"
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="text"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleInputChange}
                            placeholder="End Date (e.g., Present, Dec 2023)"
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

                    <div className="form-row">
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Job description and key achievements..."
                            rows={4}
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
