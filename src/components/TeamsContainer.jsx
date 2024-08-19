import { teamInfo } from "../data/teamInfo";

export default function TeamsContainer() {
  return (
    <>
      <div className="teams-container">
        {teamInfo.map((object, index) => {
          return (
            <>
              <div key={index} className="teams-container__logo-container">
                <a href={`/team/${object.team_id}`}>
                  <img
                    className="teams-container__logo"
                    src={object.logo_image}
                    alt={object.alt_text}
                  />
                </a>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
