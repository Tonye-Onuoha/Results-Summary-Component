export default function Skill({ skillBackground, color, icon, skill, score }) {
    return (
        <div className={skillBackground}>
            <div className="skill-type">
                <img src={icon} alt="skill icon"></img>
                <p className="skill-name" style={{ color: color }}>
                    {skill}
                </p>
            </div>
            <p style={{ color: "gray" }}>
                <b>
                    <span style={{ color: "#000" }}>{score}</span> / 100
                </b>
            </p>
        </div>
    );
}
