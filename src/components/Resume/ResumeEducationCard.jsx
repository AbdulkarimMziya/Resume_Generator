export default function ResumeEducationCard({ education }) {
    return (
        <div className="resume-education-card">
            <div className="education-header">
                <h3>{education.institution}</h3>
                <h3>{education.startDate} - {education.endDate}</h3>
            </div>
            <div className="education-details">
                <p>{education.fieldOfStudy}</p>
                <p>{education.degreeLevel}</p>
            </div>
            <div className="education-details">
                <p>{education.gpa}</p>
                <p>{education.location}</p>
            </div>
        </div>
    );
}
