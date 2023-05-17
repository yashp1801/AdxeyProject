import { useState, useEffect } from "react";
import "./SiteStatus.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import SiteStatusRealTimeReport from "./Components/SiteStatusRealTimeReport";
import SiteStatusDataGraph from "./Components/SiteStatusDataGraph";
import SiteStatusDataTable from "./Components/SiteStatusDataTable";
import GetData from "./Components/GetData";

import axios from "axios";
import Loader from "../Global/Loader/Loader";



const SiteStatus = () => {
  const [value, setValue] = useState("1");

  const [siteData, setSiteData] = useState();
  const [parametersData, setParametersData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + "bdRqZw97UrvVWe1eeUgfebeGlaWzVF",
    };
    const fetchSiteData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.30:4040/sites/?site_id=1001",
          {
            headers,
          }
        );
        setSiteData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchParametersData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.30:4040/parameters/realtime-values/?site_id=1001",
          { headers }
        );
        setParametersData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    Promise.all([fetchSiteData(), fetchParametersData()]) // wait for both API calls to complete
      .then(() => setLoading(false))
      .catch((error) => console.log(error));

    const intervalId = setInterval(() => {
      fetchSiteData();
      fetchParametersData();
    }, 2000);

    // Call fetch functions immediately when component mounts
    fetchSiteData();
    fetchParametersData();

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  console.log(siteData);
  console.log(parametersData);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // if (loading) return <Loader />;

  return (
    <div className="sitestatusdata">
      {/* {siteData?.map((item) => {
        return (
          <>
            <div
              className="sitesummary__maincard__siteDetails__wrapper"
              key={item.id}
            >
              <div className="sitesummarydataheader__title">
                <h1>{item.name}</h1>{" "}
              </div>
              <div className="sitesummary__maincard__siteDetails">
                <div>
                  <span>City</span>
                  <p> {item.city}</p>
                </div>
                <div>
                  <span>State</span>
                  <p> {item.state}</p>
                </div>
                <div>
                  <span>Category</span>
                  <p> {item.category} </p>
                </div>
                <div>
                  <span>Configured Date</span>
                  {item?.stations.map((item) => {
                    return <p> {item.configured_date}</p>;
                  })}
                </div>
                <div>
                  <span>Monitoring Station</span>
                  {item?.stations.map((item) => {
                    return <p> {item.station}</p>;
                  })}
                </div>
                <div>
                  <span>Status</span>
                  <p className="sitesummary__maincard__siteDetails__active">
                    • {item.status}
                  </p>
                </div>
                <div>
                  <span>Total Parameters</span>
                  {item?.stations.map((item) => {
                    return <p> {item.parameters.length}</p>;
                  })}
                </div>
              </div>
            </div>
          </>
        );
      })} */}
      <div className="sitestatusdata__container">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Real Time Report" value="1" />
                <Tab label="Record view" value="2" />
                <Tab label="Graph view" value="3" />
                <Tab label="Get Data" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ backgroundColor: "#a09f9f21" }}>
              {/* <SiteStatusRealTimeReport parametersData={parametersData} /> */}
            </TabPanel>
            <TabPanel value="2">
              {/* <SiteStatusDataTable parametersData={parametersData} /> */}
            </TabPanel>
            <TabPanel value="3">
              {/* <SiteStatusDataGraph parametersData={parametersData} /> */}
            </TabPanel>
            <TabPanel value="4">
              <GetData />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default SiteStatus;
