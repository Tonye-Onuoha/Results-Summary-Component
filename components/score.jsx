export default function Score() {
    return (
        <div className="score-container">
            <p style={{ color: "hsla(0, 0%, 100%,0.75)" }}>Your Result</p>
            <div className="score-background">
                <h1 style={{ fontSize: "60px" }}>76</h1>
                <p style={{ color: "hsla(0, 0%, 100%,0.5)" }}>of 100</p>
            </div>
            <h2>Great</h2>
            <p className="score-info" style={{ color: "hsla(0, 0%, 100%,0.75)" }}>
                You scored higher than 65% of the people who have taken these tests.
            </p>
        </div>
    );
}
