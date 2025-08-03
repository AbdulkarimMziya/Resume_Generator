import '../../styles/components/PersonalDetails.css';

export default function EducationCard({ education, index, onEdit, onDelete }) {
    const handleCardClick = () => {
        onEdit(index);
    };

    return (
        <div className="education-card" onClick={handleCardClick}>
            <h3 className="institution-name">{education.institution}</h3>
            <p className="degree">{education.degreeLevel}</p>
        </div>
    );
}
