export default function Score() {
    return (
        <div className="score">
            <p style={{ color: "hsl(241, 100%, 89%)", fontWeight: "700" }}>Your Result</p>
            <div className="score__background">
                <h1 style={{ fontSize: "60px" }}>76</h1>
                <p style={{ color: "hsl(241, 100%, 89%)" }}>of 100</p>
            </div>
            <h1 className="score__compliment">Great</h1>
            <p className="score__info" style={{ color: "hsl(241, 100%, 89%)" }}>
                You scored higher than 65% of the people who have taken these tests.
            </p>
        </div>
    );
}
