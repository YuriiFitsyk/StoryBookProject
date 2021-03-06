import React from "react";
import ClassNames from "classnames";

import styles from "./SingleReport.module.scss";

export interface SingleReportProps {
  id: number;
  reportCode?: string;
  reportName?: string;
  isNew?: boolean;
  favorite?: boolean;
  starClickHandler?: (id: number) => void;
}

export const SingleReport: React.FC<SingleReportProps> = ({
  id,
  reportCode,
  reportName,
  isNew,
  favorite,
  starClickHandler = () => {},
}) => {
  return (
    <div className={styles.singleReport}>
      <div className={styles.singleReportContainer}>
        <div
          className={styles.singleReportStar}
          onClick={() => starClickHandler(id)}
        >
          {favorite ? (
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1891 4.51702L9.2219 3.94046L7.44847 0.345147C7.40003 0.24671 7.32034 0.167022 7.2219 0.118585C6.97503 -0.00329011 6.67503 0.0982724 6.55159 0.345147L4.77815 3.94046L0.810967 4.51702C0.701592 4.53265 0.601592 4.58421 0.525029 4.66233C0.432469 4.75747 0.381465 4.88546 0.383223 5.01818C0.384981 5.1509 0.439357 5.2775 0.534404 5.37015L3.40472 8.16858L2.72659 12.1201C2.71069 12.2121 2.72086 12.3066 2.75595 12.393C2.79105 12.4795 2.84966 12.5544 2.92514 12.6092C3.00062 12.664 3.08995 12.6966 3.183 12.7032C3.27605 12.7098 3.3691 12.6903 3.45159 12.6467L7.00003 10.7811L10.5485 12.6467C10.6453 12.6983 10.7578 12.7155 10.8657 12.6967C11.1375 12.6498 11.3203 12.392 11.2735 12.1201L10.5953 8.16858L13.4657 5.37015C13.5438 5.29358 13.5953 5.19358 13.611 5.08421C13.6532 4.81077 13.4625 4.55765 13.1891 4.51702Z"
                fill="#54B2D3"
              />
            </svg>
          ) : (
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1892 4.51702L9.22197 3.94046L7.44853 0.345147C7.40009 0.24671 7.3204 0.167022 7.22197 0.118585C6.97509 -0.00329011 6.67509 0.0982724 6.55165 0.345147L4.77821 3.94046L0.811028 4.51702C0.701653 4.53265 0.601653 4.58421 0.52509 4.66233C0.432531 4.75747 0.381526 4.88546 0.383284 5.01818C0.385042 5.1509 0.439418 5.2775 0.534465 5.37015L3.40478 8.16858L2.72665 12.1201C2.71075 12.2121 2.72092 12.3066 2.75602 12.393C2.79111 12.4795 2.84972 12.5544 2.9252 12.6092C3.00068 12.664 3.09001 12.6966 3.18306 12.7032C3.27611 12.7098 3.36916 12.6903 3.45165 12.6467L7.00009 10.7811L10.5485 12.6467C10.6454 12.6983 10.7579 12.7155 10.8657 12.6967C11.1376 12.6498 11.3204 12.392 11.2735 12.1201L10.5954 8.16858L13.4657 5.37015C13.5438 5.29358 13.5954 5.19358 13.611 5.08421C13.6532 4.81077 13.4626 4.55765 13.1892 4.51702ZM9.38759 7.77483L9.95165 11.0608L7.00009 9.51077L4.04853 11.0623L4.61259 7.7764L2.22509 5.44827L5.52509 4.96858L7.00009 1.97952L8.47509 4.96858L11.7751 5.44827L9.38759 7.77483Z"
                fill="#9292A2"
              />
            </svg>
          )}
        </div>
        <span
          className={ClassNames(
            styles.singleReportText,
            !isNew && styles.singleReportTextLarge
          )}
        >{`${reportCode} - ${reportName}`}</span>
      </div>
      {isNew && <div className={styles.singleReportNew}>New</div>}
    </div>
  );
};
