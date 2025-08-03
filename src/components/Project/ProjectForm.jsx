import { useState, useEffect } from 'react';

export default function ProjectForm({ 
    formMode, 
    projects, 
    setProjects, 
    editingIndex, 
    setEditingIndex,
    setFormMode,
    onClose 
}) {
    const [formData, setFormData] = useState({
        projectName: '',
        technologies: '',
        description: '',
        githubLink: '',
        liveLink: '',
        startDate: '',
        endDate: ''
    });

    // Pre-fill form when editing
    useEffect(() => {
        if (formMode === 'edit' && editingIndex !== null && projects[editingIndex]) {
            setFormData(projects[editingIndex]);
        } else {
            setFormData({
                projectName: '',
                technologies: '',
                description: '',
                githubLink: '',
                liveLink: '',
                startDate: '',
                endDate: ''
            });
        }
    }, [formMode, editingIndex, projects]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        if (!formData.projectName.trim()) return;

        const newProject = {
            ...formData,
            id: formMode === 'edit' && editingIndex !== null 
                ? projects[editingIndex].id 
                : Date.now()
        };

        if (formMode === 'add') {
            setProjects([...projects, newProject]);
        } else if (formMode === 'edit' && editingIndex !== null) {
            const updatedProjects = projects.map((project, index) => 
                index === editingIndex ? newProject : project
            );
            setProjects(updatedProjects);
        }

        handleCancel();
    };

    const handleDelete = () => {
        if (editingIndex !== null) {
            const updatedProjects = projects.filter((_, i) => i !== editingIndex);
            setProjects(updatedProjects);
        }
        handleCancel();
    };

    const handleCancel = () => {
        setFormData({
            projectName: '',
            technologies: '',
            description: '',
            githubLink: '',
            liveLink: '',
            startDate: '',
            endDate: ''
        });
        setEditingIndex(null);
        setFormMode('add');
        if (onClose) onClose();
    };

    const isFormValid = formData.projectName.trim();

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="entry-form-group">
                    <h3>{formMode === 'edit' ? 'Edit Project' : 'Add New Project'}</h3>
                    
                    <div className="form-row">
                        <input
                            type="text"
                            name="projectName"
                            value={formData.projectName}
                            onChange={handleInputChange}
                            placeholder="Project Name *"
                            autoFocus
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="text"
                            name="technologies"
                            value={formData.technologies}
                            onChange={handleInputChange}
                            placeholder="Technologies Used (e.g., React, Node.js, MongoDB)"
                        />
                    </div>

                    <div className="form-row">
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Project description and key features..."
                            rows={4}
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="url"
                            name="githubLink"
                            value={formData.githubLink}
                            onChange={handleInputChange}
                            placeholder="GitHub Repository URL"
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="url"
                            name="liveLink"
                            value={formData.liveLink}
                            onChange={handleInputChange}
                            placeholder="Live Demo URL"
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="text"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleInputChange}
                            placeholder="Start Date (e.g., Jan 2024)"
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="text"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleInputChange}
                            placeholder="End Date (e.g., Mar 2024, Present)"
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
