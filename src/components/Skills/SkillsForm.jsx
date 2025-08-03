import { useState, useEffect } from 'react';

export default function SkillsForm({ 
    formMode, 
    skills, 
    setSkills, 
    editingIndex, 
    setEditingIndex,
    setFormMode,
    onClose,
    onDelete 
}) {
    const [skillInput, setSkillInput] = useState('');

    // Pre-fill form when editing
    useEffect(() => {
        if (formMode === 'edit' && editingIndex !== null && skills[editingIndex]) {
            setSkillInput(skills[editingIndex]);
        } else {
            setSkillInput('');
        }
    }, [formMode, editingIndex, skills]);

    const handleSubmit = () => {
        if (!skillInput.trim()) return;

        if (formMode === 'add') {
            // Add new skill
            setSkills([...skills, skillInput.trim()]);
        } else if (formMode === 'edit' && editingIndex !== null) {
            // Edit existing skill
            const updatedSkills = skills.map((skill, index) => 
                index === editingIndex ? skillInput.trim() : skill
            );
            setSkills(updatedSkills);
        }

        handleCancel();
    };

    const handleDelete = () => {
        if (editingIndex !== null) {
            const updatedSkills = skills.filter((_, i) => i !== editingIndex);
            setSkills(updatedSkills);
        }
        handleCancel();
    };

    const handleCancel = () => {
        setSkillInput('');
        setEditingIndex(null);
        setFormMode('add');
        if (onClose) onClose();
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        } else if (e.key === 'Escape') {
            handleCancel();
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="entry-form-group">
                    <h3>{formMode === 'edit' ? 'Edit Skill' : 'Add New Skill'}</h3>
                    <div className="form-row">
                        <textarea
                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Enter skill (e.g., JavaScript, React, Node.js, etc.)"
                            rows={4}
                            autoFocus
                        />
                    </div>
                    <div className="form-row button-row">
                        {formMode === 'edit' ? (
                            <>
                                <button 
                                    type="button" 
                                    className="btn-primary"
                                    onClick={handleSubmit}
                                    disabled={!skillInput.trim()}
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
                                    disabled={!skillInput.trim()}
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