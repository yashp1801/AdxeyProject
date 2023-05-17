import React from "react";
import "../SiteStatus.css";
import ReactToPdf from "react-to-pdf";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const TableComponent = () => {
  const data = [
    {
      timestamp: "2023-04-24 17:33:00",
      Flow: 0.0,
      pH: 7.15,
      BOD: 233.38,
      COD: 281.56,
    },
    {
      timestamp: "2023-04-25 09:45:00",
      Flow: 1.2,
      pH: 7.22,
      BOD: 199.87,
      COD: 264.09,
    },
    {
      timestamp: "2023-04-26 14:12:00",
      Flow: 0.8,
      pH: 7.35,
      BOD: 183.29,
      COD: 251.78,
    },
    {
      timestamp: "2023-04-27 21:07:00",
      Flow: 0.6,
      pH: 7.05,
      BOD: 212.15,
      COD: 271.91,
    },
    {
      timestamp: "2023-04-28 10:30:00",
      Flow: 0.9,
      pH: 7.18,
      BOD: 194.73,
      COD: 256.42,
    },
    // Add 20 more data objects here:
    {
      timestamp: "2023-04-29 08:15:00",
      Flow: 1.5,
      pH: 7.12,
      BOD: 175.44,
      COD: 243.11,
    },
    {
      timestamp: "2023-04-30 14:55:00",
      Flow: 0.7,
      pH: 7.25,
      BOD: 187.91,
      COD: 251.02,
    },
    {
      timestamp: "2023-05-01 11:40:00",
      Flow: 0.4,
      pH: 7.05,
      BOD: 201.77,
      COD: 264.88,
    },
    {
      timestamp: "2023-05-02 18:20:00",
      Flow: 0.9,
      pH: 7.32,
      BOD: 191.26,
      COD: 257.63,
    },
    {
      timestamp: "2023-05-03 12:10:00",
      Flow: 0.6,
      pH: 7.18,
      BOD: 205.39,
      COD: 269.09,
    },
    {
      timestamp: "2023-05-04 16:50:00",
      Flow: 1.2,
      pH: 7.28,
      BOD: 189.75,
      COD: 253.29,
    },
    {
      timestamp: "2023-05-05 09:30:00",
      Flow: 0.8,
      pH: 7.15,
      BOD: 202.89,
      COD: 265.76,
    },
    {
      timestamp: "2023-05-06 14:20:00",
      Flow: 1.1,
      pH: 7.09,
      BOD: 198.55,
      COD: 262.34,
    },
  ];

  const columns = [
    {
      Header: "Timestamp",
      accessor: "timestamp",
    },
    {
      Header: "Flow",
      accessor: "Flow",
    },
    {
      Header: "pH",
      accessor: "pH",
    },
    {
      Header: "BOD",
      accessor: "BOD",
    },
    {
      Header: "COD",
      accessor: "COD",
    },
  ];

  const ref = React.createRef();

  return (
    <div>
      <div className="export-buttons">
        <ReactToPdf targetRef={ref} filename="table.pdf">
          {({ toPdf }) => (
            <button className="export-button" onClick={toPdf}>
              Export to PDF
            </button>
          )}
        </ReactToPdf>

        <ReactHTMLTableToExcel
          id="export-excel-button"
          className="export-button"
          table="table-to-xls"
          filename="table.xls"
          sheet="tablexls"
          buttonText="Export to Excel"
        />
      </div>

      <div className="table-container" ref={ref}>
          <h2>Data Table View</h2>
        <table id="table-to-xls" className="data-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.Header}>{column.Header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column.Header}>{row[column.accessor]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
