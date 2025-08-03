import '../../styles/components/PersonalDetails.css';

export default function ProjectCard({ project, index, onEdit, onDelete }) {
    const handleCardClick = () => {
        onEdit(index);
    };

    return (
        <div className="project-card" onClick={handleCardClick}>
            <h3 className="project-name">{project.projectName}</h3>
            <p className="technologies">{project.technologies}</p>
        </div>
    );
}
