export default function ResumeProjectCard({ project }) {
    return (
        <div className="resume-project-card">
            <div className="project-header">
                <h3>{project.projectName}</h3>
                <h3>{project.startDate} - {project.endDate}</h3>
            </div>
            <div className="project-details">
                <p>{project.technologies}</p>
                <p>{project.link}</p>
            </div>
            <div>
                <p>{project.description}</p>
            </div>
        </div>
    );
}
