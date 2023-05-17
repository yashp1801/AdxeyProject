import React, { useState } from "react";
import { DatePicker, Alert } from "antd";
import moment from "moment/moment";
import "../SiteStatus.css";
import { MdLabelImportantOutline } from "react-icons/md";
import DataTable from "./DataTable";
import DataGraph from "./DataGraph";

const { RangePicker } = DatePicker;

const GetData = () => {
  const [startDate, setStartDate] = useState(null); // State to store the selected start date
  const [endDate, setEndDate] = useState(null); // State to store the selected end date
  const [isOpen, setIsOpen] = useState(false);

  const onDateChange = (dates, dateStrings) => {
    setStartDate(dateStrings[0]);
    setEndDate(dateStrings[1]);
  };

  const isValidRange = () => {
    if (startDate && endDate) {
      const start = moment(startDate);
      const end = moment(endDate);
      const diffInDays = end.diff(start, "days");

      return diffInDays <= 30;
    }
    return true;
  };

  return (
    <div className="getData">
      <h2 className="getData__header">Get Data</h2>
      <p className="getData__ptag">
        {" "}
        <MdLabelImportantOutline className="getData__ptag__icon" /> Please note
        that data availability is limited to month only.
      </p>
      {!isValidRange() && (
        <Alert
          message="Date Range Limit Exceeded"
          description="Please select a date range of no more than one month."
          type="error"
          className="getData__error"
        />
      )}
  <div className="getData__picker__btn__wrapper">
  <RangePicker
        size="large"
        onChange={onDateChange}
        className="getData__rangePicker"
      />

      <button className="getData__btn" onClick={() => setIsOpen(true)}>
        Get Data
      </button>
  </div>
      {isOpen && (
        <>
          <DataTable  />
          <DataGraph  />
        </>
      )}
    </div>
  );
};

export default GetData;
