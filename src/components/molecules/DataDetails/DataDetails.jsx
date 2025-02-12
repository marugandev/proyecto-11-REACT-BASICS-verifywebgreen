import "./DataDetails.css";

import React from "react";

const DataDetails = ({ data }) => {
  const formattedUrl =
    data.url && data.url.split("/").length > 3
      ? data.url.split("/").slice(0, 3).join("/")
      : data.url;

  const toggleTooltip = (e) => {
    const tooltip = e.currentTarget.querySelector(".tooltip");
    if (tooltip) {
      tooltip.classList.toggle("open");
    }
  };

  return (
    <section className="data-details">
      <ul className="data-details-list">
        <li>
          <strong>URL:</strong> {formattedUrl}
        </li>
        <li>
          <strong>Green:</strong> {data.green.toLocaleString()}
          {""} {data.green === true ? "💚" : "🤔"}
        </li>
        <li onClick={(e) => toggleTooltip(e)}>
          <strong>Megabytes:</strong> {(data.bytes / 1000000).toFixed(2)}
          {"Mb"}
          <span className="tooltip">
            The number of Megabytes transferred by the page on load
          </span>
        </li>
        <li onClick={(e) => toggleTooltip(e)}>
          <strong>Cleaner Than:</strong> {data.cleanerThan}
          <span className="tooltip">
            The percentage of pages that are less efficient than this one
          </span>
        </li>
        <li onClick={(e) => toggleTooltip(e)}>
          <strong>Rating:</strong> {data.rating}
          <span className="tooltip">
            The overall sustainability rating of the page, where a higher value
            is better
          </span>
        </li>
        <li onClick={(e) => toggleTooltip(e)}>
          <strong>Adjusted Megabytes:</strong>{" "}
          {(data.statistics.adjustedBytes / 1000000).toFixed(2)}
          {"Mb"}
          <span className="tooltip">
            The adjusted number of Megabytes, which accounts for the resource
            load optimizations
          </span>
        </li>
        <li onClick={(e) => toggleTooltip(e)}>
          <strong>Energy:</strong> {data.statistics.energy.toFixed(8)}J
          <span className="tooltip">
            The amount of energy used by the page during load (in joules)
          </span>
        </li>
        <li onClick={(e) => toggleTooltip(e)}>
          <strong>CO2 Emissions (Grid):</strong>{" "}
          {data.statistics.co2.grid.grams.toFixed(4)} grams |{" "}
          {data.statistics.co2.grid.litres.toFixed(4)} litres
          <span className="tooltip">
            CO2 emissions based on the energy grid used for the page’s load
          </span>
        </li>
        <li onClick={(e) => toggleTooltip(e)}>
          <strong>CO2 Emissions (Renewable):</strong>{" "}
          {data.statistics.co2.renewable.grams.toFixed(4)} grams |{" "}
          {data.statistics.co2.renewable.litres.toFixed(4)} litres
          <span className="tooltip">
            CO2 emissions when renewable energy sources are used for the page’s
            load
          </span>
        </li>
        <li>
          <strong>Timestamp:</strong>{" "}
          {data.timestamp
            ? new Date(data.timestamp * 1000).toLocaleString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
              }) + "h"
            : "N/A"}
        </li>
      </ul>
    </section>
  );
};

export default DataDetails;
