import { useTheme } from "../../context/ThemeContext";
import "./LightSwitch.css";

function LightSwitch() {
    const { themeName, setThemeName } = useTheme();

    const handleClick = () =>
        themeName === "day" ? setThemeName("night") : setThemeName("day");

    return (
        <div className={`light-switch ${themeName}`}>
            <div className="on" onClick={handleClick}>
                DAY
            </div>
            <div className="off" onClick={handleClick}>
                NIGHT
            </div>
        </div>
    );
}

export default LightSwitch;
