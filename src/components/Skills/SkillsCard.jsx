import '../../styles/components/PersonalDetails.css';

export default function SkillsCard({ skill, index, onEdit, onDelete }) {
    const handleCardClick = () => {
        onEdit(index);
    };

    return (
        <li className="skills-card" onClick={handleCardClick}>
            <span className="skill-text">{skill}</span>
        </li>
    );
}
