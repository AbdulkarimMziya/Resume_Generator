import { useState } from 'react';
import '../../styles/components/PersonalDetails.css';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

export default function Project({ projects = [], setProjects }) {

    const [showForm, setShowForm] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [formMode, setFormMode] = useState('add'); // 'add' or 'edit'

    const handleAddProject = () => {
        setFormMode('add');
        setEditingIndex(null);
        setShowForm(true);
    };

    const handleEditProject = (index) => {
        setFormMode('edit');
        setEditingIndex(index);
        setShowForm(true);
    };

    const handleDeleteProject = (index) => {
        const updatedProjects = projects.filter((_, i) => i !== index);
        setProjects(updatedProjects);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setEditingIndex(null);
        setFormMode('add');
    };

    return (
        <section className="personal-project">
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <ProjectCard 
                    key={project.id || index} 
                    project={project} 
                    index={index}
                    onEdit={handleEditProject}
                    onDelete={handleDeleteProject}
                />
            ))}
            <div className="add-project-button" onClick={handleAddProject}>+ Add Project</div>
            {showForm && (
                <ProjectForm
                    formMode={formMode}
                    setFormMode={setFormMode}
                    projects={projects}
                    setProjects={setProjects}
                    editingIndex={editingIndex}
                    setEditingIndex={setEditingIndex}
                    onClose={handleCloseForm}
                />
            )}
        </section>
    );
}
