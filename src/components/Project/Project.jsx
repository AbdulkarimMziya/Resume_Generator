import { useState } from 'react';
import '../../styles/components/PersonalDetails.css';
import ProjectCard from './ProjectCard';

export default function Project({ projects = [] }) {

    const [showForm, setShowForm] = useState(false);

    const handleAddProject = () => {
        setShowForm(!showForm);
        alert("This feature is not implemented yet. Please check back later.");
    };

    return (
        <section className="personal-project">
            <h2>Projects</h2>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
            <div className="add-project-button" onClick={handleAddProject}>+ Add Project</div>
        </section>
    );
}
