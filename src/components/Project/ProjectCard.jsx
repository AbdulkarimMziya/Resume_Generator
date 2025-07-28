import '../../styles/components/PersonalDetails.css';

export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <h3 className="project-name">{project.projectName}</h3>
        </div>
    );
}
