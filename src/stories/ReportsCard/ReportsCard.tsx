import React, { ReactText, useState } from "react";
import { SingleReport } from "../SingleReport/SingleReport";
import { ShowMore } from "../ShowMore/ShowMore";
import { v4 as uuidv4 } from "uuid";

import styles from "./ReportsCard.module.scss";

import Highcharts from "highcharts";
import {
  HighchartsProvider,
  HighchartsChart,
  Chart,
  XAxis,
  YAxis,
  Tooltip,
  AreaSeries,
} from "react-jsx-highcharts";

export interface report {
  id: number;
  reportCode: string;
  reportName: string;
  isNew: boolean;
  favorite: boolean;
}

export interface ReportsCardProps {
  catHeading?: string;
  description?: string;
  graphDescription?: string;
  chartLabel?: string;
  reportsFromServer?: report[];
  graphData?: ReactText[][];
}

export const ReportsCard: React.FC<ReportsCardProps> = ({
  reportsFromServer = [],
  catHeading = "Custom",
  graphDescription = "",
  description = "",
  chartLabel = "",
  graphData = [],
}) => {
  const [showAll, setShowAll] = useState(false);
  const [reports, setReports] = useState([...reportsFromServer]);

  const showMoreHandler = () => setShowAll((showAll) => !showAll);
  const starClickHandler = (id: number) => {
    setReports((prevReports) => {
      const result = prevReports.map((report) =>
        report.id === id ? { ...report, favorite: !report.favorite } : report
      );
      return result;
    });
  };

  return (
    <div className={styles.reportsCard}>
      <h3 className={styles.reportsCardTitle}>{catHeading}</h3>
      <p className={styles.reportsCardDescription}>{description}</p>
      <div className={styles.reportsCardGraphDescContainer}>
        <span>{graphDescription}</span>
        <span>{chartLabel}</span>
      </div>

      <div className={styles.reportsCardGraph}>
        {graphData !== [] && (
          <HighchartsProvider Highcharts={Highcharts}>
            <HighchartsChart>
              <Chart
                height="36px"
                borderRadius={3}
                marginBottom={0}
                backgroundColor="rgba(236, 237, 240, 0.2)"
                type="area"
              />

              <Tooltip
                formatter={function () {
                  return `${this.key} - ${this.y + chartLabel}`;
                }}
              />

              <XAxis id="XAxis" visible={false}></XAxis>

              <YAxis id="YAxis" visible={false}>
                <AreaSeries
                  id={catHeading}
                  name={catHeading}
                  data={graphData}
                />
              </YAxis>
            </HighchartsChart>
          </HighchartsProvider>
        )}
      </div>

      {showAll
        ? reports.map((report, i) => {
            if (i === reports.length - 1) {
              return (
                <>
                  <SingleReport
                    key={report.id}
                    id={report.id}
                    reportCode={report.reportCode}
                    reportName={report.reportName}
                    isNew={report.isNew}
                    favorite={report.favorite}
                    starClickHandler={starClickHandler}
                  />
                  <ShowMore
                    key={uuidv4()}
                    length={reports.length}
                    showAll={showAll}
                    showMoreHandler={showMoreHandler}
                  />
                </>
              );
            }
            return (
              <SingleReport
                key={report.id}
                id={report.id}
                reportCode={report.reportCode}
                reportName={report.reportName}
                isNew={report.isNew}
                favorite={report.favorite}
                starClickHandler={starClickHandler}
              />
            );
          })
        : reports.length > 10
        ? reports.map((report, i) =>
            i > 8 ? (
              i < 10 ? (
                <ShowMore
                  key={uuidv4()}
                  length={reports.length}
                  showAll={showAll}
                  showMoreHandler={showMoreHandler}
                />
              ) : (
                ""
              )
            ) : (
              <SingleReport
                key={report.id}
                id={report.id}
                reportCode={report.reportCode}
                reportName={report.reportName}
                isNew={report.isNew}
                favorite={report.favorite}
                starClickHandler={starClickHandler}
              />
            )
          )
        : [...reports, ...new Array(10 - reports.length).fill("")].map(
            (report) => {
              return report ? (
                <SingleReport
                  key={report.id}
                  id={report.id}
                  reportCode={report.reportCode}
                  reportName={report.reportName}
                  isNew={report.isNew}
                  favorite={report.favorite}
                  starClickHandler={starClickHandler}
                />
              ) : (
                <div key={uuidv4()} className={styles.reportsCardCell}></div>
              );
            }
          )}
    </div>
  );
};
