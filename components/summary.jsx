import reactionIcon from "../src/assets/images/icon-reaction.svg";
import memoryIcon from "../src/assets/images/icon-memory.svg";
import verbalIcon from "../src/assets/images/icon-verbal.svg";
import visualIcon from "../src/assets/images/icon-visual.svg";
import Skill from "./skill";

export default function Summary() {
    return (
        <div className="summary">
            <p className="summary__heading">Summary</p>
            <div className="skills">
                <Skill
                    skillBackground="skill reaction-background"
                    icon={reactionIcon}
                    color="hsl(0, 100%, 67%)"
                    skill="Reaction"
                    score={80}
                />
                <Skill
                    skillBackground="skill memory-background"
                    icon={memoryIcon}
                    color="hsl(39, 100%, 56%)"
                    skill="Memory"
                    score={92}
                />
                <Skill
                    skillBackground="skill verbal-background"
                    icon={verbalIcon}
                    color="hsl(166, 100%, 37%)"
                    skill="Verbal"
                    score={61}
                />
                <Skill
                    skillBackground="skill visual-background"
                    icon={visualIcon}
                    color="hsl(234, 85%, 45%)"
                    skill="Visual"
                    score={73}
                />
            </div>
            <button className="summary__button">Continue</button>
        </div>
    );
}
