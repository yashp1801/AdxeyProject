import { TbBuildingFactory } from "react-icons/tb";
import "../SiteStatus.css";

const SiteStatusRealTimeReport = ({ parametersData }) => {
  return (
    <div className="sitestatusrealtime__livereading__card__wrapper">
      {parametersData.map((item) => {
        return (
          <div className="realtimereport__livereading__card" key={item.id}>
            <TbBuildingFactory className="realtimereport__livereading__card__icon" />
            <div className="realtimereport__livereading__card__content">
              <p className="realtimereport__livereading__card__content__parameterName">
                {item.parameter}
              </p>
              <p>{item.station}</p>
              <p>
                Per Min Avg :{" "}
                <span>
                  {item.last_value} {item.unit}
                </span>
              </p>
              <p>
                Limit : {item.normal_min} - {item.normal_max} {item.unit}
              </p>
              <p>
                {" "}
                Range : {item.today_min} - {item.today_max}
              </p>

              <p> Last Sync Date : {item.last_sync.slice(0, 10)}</p>
              <p> Last Sync Time : {item.last_sync.slice(11, 19)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SiteStatusRealTimeReport;
