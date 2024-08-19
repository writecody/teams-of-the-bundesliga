import { teamsInfo } from "../data/teamInfo";

export default function TeamsContainer() {
  return (
    <>
      <div className="teams-container">
        {teamsInfo.map((object, index) => {
          return (
            <>
              <div key={index} className="teams-container__logo-container">
                
                  <img
                    className="teams-container__logo"
                    src={object.logo_image}
                    alt={object.alt_text}
                  />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
