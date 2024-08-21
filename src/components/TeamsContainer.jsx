import { teamsInfo } from "../data/teamInfo";
import backgroundImage from "../assets/cartoon-soccer-ball-on-field.png";

export default function TeamsContainer({onSelectTeam}) {


  return (
    <>
      <div
        className="teams-container"
        style={{
          background: `url(${backgroundImage}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {teamsInfo.map((object, index) => {
          return (
            <div key={index} className="teams-container__logo-container" onClick={() => onSelectTeam(object)}>
              <img
                className="teams-container__logo"
                src={object.logo_image}
                alt={object.alt_text}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
