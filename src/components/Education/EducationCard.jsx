import '../../styles/components/PersonalDetails.css';

export default function EducationCard({ education }) {
    return (
        <div className="education-card">
            <h3 className="institution-name">{education.institution}</h3>
            <p className="degree">{education.degreeLevel}</p>
        </div>
    );
}
