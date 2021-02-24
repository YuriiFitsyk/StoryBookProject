import React, { useState } from "react";

import { ReportsCard, report, ReportsCardProps } from "../ReportsCard/ReportsCard";

import styles from "./ReportsPage.module.scss";

interface dataType {
  contacts: ReportsCardProps;
  marketing: ReportsCardProps;
  finances: ReportsCardProps;
  appointsments: ReportsCardProps;
  leads: ReportsCardProps;
  staff: ReportsCardProps;
  stock: ReportsCardProps;
  custom: ReportsCardProps;
}

const data: dataType = {
  contacts: {
    catHeading: "Contacts",
    description:
      "Monitor your overall finances including sales, refunds, taxes, payments and more",
    graphDescription: "Revenue by week",
    chartLabel: "int",
    reportsFromServer: [
      {
        id: 1,
        reportCode: "CO001",
        reportName: "Basic Information",
        isNew: true,
        favorite: true,
      },

      {
        id: 2,
        reportCode: "CO020",
        reportName: "New Clients",
        isNew: true,
        favorite: false,
      },

      {
        id: 3,
        reportCode: "CO045",
        reportName: "Big Spender by Receipt",
        isNew: false,
        favorite: false,
      },

      {
        id: 4,
        reportCode: "CO003",
        reportName: "Birthday",
        isNew: true,
        favorite: true,
      },
      {
        id: 5,
        reportCode: "CO010",
        reportName: "Outstanding Packages",
        isNew: false,
        favorite: true,
      },

      {
        id: 6,
        reportCode: "CO060",
        reportName: "Duplicate Clients",
        isNew: true,
        favorite: false,
      },

      {
        id: 7,
        reportCode: "CO035",
        reportName: "Clients by Location",
        isNew: false,
        favorite: false,
      },

      {
        id: 8,
        reportCode: "CO050",
        reportName: "Client Receipts by Category",
        isNew: false,
        favorite: true,
      },

      {
        id: 9,
        reportCode: "CO030",
        reportName: "Last Spend",
        isNew: false,
        favorite: true,
      },

      {
        id: 10,
        reportCode: "CO031",
        reportName: "Last Visit",
        isNew: true,
        favorite: false,
      },

      {
        id: 11,
        reportCode: "CO046",
        reportName: "First Visit",
        isNew: true,
        favorite: true,
      },

      {
        id: 12,
        reportCode: "CO105",
        reportName: "Patient Prescriptions",
        isNew: true,
        favorite: false,
      },

      {
        id: 13,
        reportCode: "CO065",
        reportName: "Client Retail Purchases",
        isNew: false,
        favorite: false,
      },

      {
        id: 14,
        reportCode: "CO070",
        reportName: "Account Balance",
        isNew: true,
        favorite: true,
      },

      {
        id: 15,
        reportCode: "CO075",
        reportName: "Client Service Sales",
        isNew: false,
        favorite: true,
      },

      {
        id: 16,
        reportCode: "CO147",
        reportName: "Medical Data Report",
        isNew: true,
        favorite: false,
      },

      {
        id: 17,
        reportCode: "CO110",
        reportName: "Clients Treatment Interest",
        isNew: false,
        favorite: false,
      },

      {
        id: 18,
        reportCode: "CO111",
        reportName: "Never Purchased Before",
        isNew: false,
        favorite: true,
      },

      {
        id: 19,
        reportCode: "CO115",
        reportName: "Client Enquiry Conversion",
        isNew: false,
        favorite: true,
      },

      {
        id: 20,
        reportCode: "CO130",
        reportName: "Product Consumption",
        isNew: true,
        favorite: false,
      },

      {
        id: 21,
        reportCode: "CO135",
        reportName: "Account Activity",
        isNew: false,
        favorite: true,
      },

      {
        id: 22,
        reportCode: "CO140",
        reportName: "Last Customer Bookings by Employee",
        isNew: true,
        favorite: false,
      },

      {
        id: 23,
        reportCode: "CO145",
        reportName: "Contact Activity",
        isNew: false,
        favorite: false,
      },

      {
        id: 24,
        reportCode: "CO146",
        reportName: "Treatment Missing Data",
        isNew: false,
        favorite: true,
      },

      {
        id: 25,
        reportCode: "CO145",
        reportName: "Account Balance by Date",
        isNew: false,
        favorite: true,
      },

      {
        id: 26,
        reportCode: "VA001",
        reportName: "Vaccination Report",
        isNew: true,
        favorite: false,
      },
    ],
    graphData: [
      ["Jan", 20],
      ["Feb", 5],
      ["Mar", 12],
      ["Apr", 20],
      ["May", 5],
      ["Jun", 12],
      ["Jul", 20],
      ["Aug", 5],
      ["Sep", 12],
      ["Oct", 20],
      ["Nov", 5],
      ["Dec", 12],
    ],
  },

  marketing: {
    catHeading: "Marketing",
    description:
      "Monitor your overall finances including sales, refunds, taxes, payments and more",
    graphDescription: "New clients by week",
    chartLabel: "O",
    reportsFromServer: [
      {
        id: 27,
        reportCode: "MA020",
        reportName: "Referral Sources",
        isNew: true,
        favorite: true,
      },

      {
        id: 28,
        reportCode: "CO085",
        reportName: "Gift Cards",
        isNew: true,
        favorite: false,
      },

      {
        id: 29,
        reportCode: "CO090",
        reportName: "Gift Card Analysis",
        isNew: false,
        favorite: false,
      },

      {
        id: 30,
        reportCode: "CO095",
        reportName: "Client Recalls",
        isNew: true,
        favorite: true,
      },

      {
        id: 31,
        reportCode: "CO100",
        reportName: "Loyalty Report",
        isNew: false,
        favorite: true,
      },

      {
        id: 32,
        reportCode: "MA005",
        reportName: "Opt In Text Contacts",
        isNew: true,
        favorite: true,
      },

      {
        id: 33,
        reportCode: "MA010",
        reportName: "Opt In Email Contacts",
        isNew: true,
        favorite: false,
      },

      {
        id: 34,
        reportCode: "MA025",
        reportName: "Feedback Results",
        isNew: false,
        favorite: false,
      },

      {
        id: 35,
        reportCode: "MA030",
        reportName: "Survey Feedback",
        isNew: true,
        favorite: true,
      },

      {
        id: 36,
        reportCode: "MA001",
        reportName: "Sales by Referral Source",
        isNew: false,
        favorite: true,
      },
    ],
    graphData: [
      ["Jan", 20],
      ["Feb", 5],
      ["Mar", 12],
      ["Apr", 20],
      ["May", 5],
      ["Jun", 12],
      ["Jul", 20],
      ["Aug", 5],
      ["Sep", 12],
      ["Oct", 20],
      ["Nov", 5],
      ["Dec", 12],
    ],
  },

  finances: {
    catHeading: "Finances",
    description:
      "Monitor your overall finances including sales, refunds, taxes, payments and more",
    graphDescription: "Utilization by week",
    chartLabel: "%",
    reportsFromServer: [
      {
        id: 37,
        reportCode: "FI000",
        reportName: "Daily Sales",
        isNew: true,
        favorite: true,
      },

      {
        id: 38,
        reportCode: "FI001",
        reportName: "Daily Reconciliation",
        isNew: true,
        favorite: false,
      },

      {
        id: 39,
        reportCode: "FI002",
        reportName: "Daily Payments",
        isNew: false,
        favorite: false,
      },

      {
        id: 40,
        reportCode: "FI005",
        reportName: "Receipts by Employee - Detailed",
        isNew: true,
        favorite: true,
      },
      {
        id: 41,
        reportCode: "FI011",
        reportName: "Receipts by Service Category",
        isNew: false,
        favorite: true,
      },

      {
        id: 42,
        reportCode: "FI010",
        reportName: "Receipts by Retail Category",
        isNew: true,
        favorite: false,
      },

      {
        id: 43,
        reportCode: "FI022",
        reportName: "Daily Performance Stats",
        isNew: false,
        favorite: false,
      },

      {
        id: 44,
        reportCode: "FI012",
        reportName: "Receipts by Category",
        isNew: false,
        favorite: true,
      },

      {
        id: 45,
        reportCode: "FI014",
        reportName: "Sales by Category",
        isNew: false,
        favorite: true,
      },

      {
        id: 46,
        reportCode: "FI019",
        reportName: "VAT Report",
        isNew: true,
        favorite: false,
      },

      {
        id: 47,
        reportCode: "FI006",
        reportName: "Sales by Employee Detailed Cross",
        isNew: true,
        favorite: true,
      },

      {
        id: 48,
        reportCode: "FI015",
        reportName: "Receipts by Employee (Service)",
        isNew: true,
        favorite: false,
      },

      {
        id: 49,
        reportCode: "FI016",
        reportName: "Receipts by Employee (Retail)",
        isNew: false,
        favorite: false,
      },

      {
        id: 50,
        reportCode: "FI025",
        reportName: "Receipts by Month",
        isNew: true,
        favorite: true,
      },
      {
        id: 51,
        reportCode: "FI026",
        reportName: "Monthly Taking (Summary)",
        isNew: false,
        favorite: true,
      },

      {
        id: 52,
        reportCode: "FI030",
        reportName: "Raised Invoices",
        isNew: true,
        favorite: false,
      },

      {
        id: 53,
        reportCode: "FI040",
        reportName: "Expenses",
        isNew: false,
        favorite: false,
      },

      {
        id: 54,
        reportCode: "FI075",
        reportName: "Outstanding Invoices",
        isNew: false,
        favorite: true,
      },

      {
        id: 55,
        reportCode: "FI085",
        reportName: "Service vs Retail Receipts",
        isNew: false,
        favorite: true,
      },

      {
        id: 56,
        reportCode: "FI090",
        reportName: "Aged Insurance Debt Report",
        isNew: true,
        favorite: false,
      },

      {
        id: 57,
        reportCode: "FI017",
        reportName: "Receipts by Employee Detailed (VAT)",
        isNew: true,
        favorite: true,
      },

      {
        id: 58,
        reportCode: "FI031",
        reportName: "Invoice Activity",
        isNew: true,
        favorite: false,
      },

      {
        id: 59,
        reportCode: "FI035",
        reportName: "Receipts by Payment Method",
        isNew: false,
        favorite: false,
      },

      {
        id: 60,
        reportCode: "FI055",
        reportName: "Unpaid Visits",
        isNew: true,
        favorite: true,
      },

      {
        id: 61,
        reportCode: "FI060",
        reportName: "Free Giveaways",
        isNew: false,
        favorite: true,
      },

      {
        id: 62,
        reportCode: "FI065",
        reportName: "Appointment Income Projection",
        isNew: true,
        favorite: false,
      },

      {
        id: 63,
        reportCode: "FI070",
        reportName: "Discount Report",
        isNew: false,
        favorite: false,
      },

      {
        id: 64,
        reportCode: "FI080",
        reportName: "Sales vs Expense",
        isNew: false,
        favorite: true,
      },

      {
        id: 65,
        reportCode: "FI155",
        reportName: "Insurance Report",
        isNew: false,
        favorite: true,
      },

      {
        id: 66,
        reportCode: "OT001",
        reportName: "Sales Conversion",
        isNew: true,
        favorite: false,
      },

      {
        id: 67,
        reportCode: "OT002",
        reportName: "Telesales Report",
        isNew: true,
        favorite: false,
      },
    ],
    graphData: [
      ["Jan", 20],
      ["Feb", 5],
      ["Mar", 12],
      ["Apr", 20],
      ["May", 5],
      ["Jun", 12],
      ["Jul", 20],
      ["Aug", 5],
      ["Sep", 12],
      ["Oct", 20],
      ["Nov", 5],
      ["Dec", 12],
    ],
  },

  appointsments: {
    catHeading: "Appointsments",
    description:
      "Monitor your overall finances including sales, refunds, taxes, payments and more",
    graphDescription: "",
    chartLabel: "int",
    graphData: [
      ["Jan", 20],
      ["Feb", 5],
      ["Mar", 12],
      ["Apr", 20],
      ["May", 5],
      ["Jun", 12],
      ["Jul", 20],
      ["Aug", 5],
      ["Sep", 12],
      ["Oct", 20],
      ["Nov", 5],
      ["Dec", 12],
    ],
    reportsFromServer: [
      {
        id: 68,
        reportCode: "CO021",
        reportName: "Booked Appointments",
        isNew: true,
        favorite: true,
      },

      {
        id: 69,
        reportCode: "CO025",
        reportName: "Missed/Cancelled Appointments",
        isNew: true,
        favorite: false,
      },

      {
        id: 70,
        reportCode: "ST000",
        reportName: "Staff Appointment Schedule",
        isNew: false,
        favorite: false,
      },

      {
        id: 71,
        reportCode: "CO006",
        reportName: "Appointments by Service Type Count",
        isNew: false,
        favorite: false,
      },

      {
        id: 72,
        reportCode: "CO036",
        reportName: "Connect Registration & Bookings",
        isNew: true,
        favorite: true,
      },
      {
        id: 73,
        reportCode: "CO040",
        reportName: "Consultation Conversion",
        isNew: false,
        favorite: true,
      },

      {
        id: 74,
        reportCode: "ST025",
        reportName: "Employee Appointment Summary",
        isNew: true,
        favorite: false,
      },

      {
        id: 75,
        reportCode: "BETA",
        reportName: "Locations Report",
        isNew: false,
        favorite: false,
      },

      {
        id: 76,
        reportCode: "OT003",
        reportName: "Classes and Appointments report",
        isNew: false,
        favorite: true,
      },

      {
        id: 77,
        reportCode: "CO125",
        reportName: "Surgery Preparations",
        isNew: false,
        favorite: true,
      },

      {
        id: 78,
        reportCode: "CO140",
        reportName: "Last Customer Bookings by Employee",
        isNew: true,
        favorite: false,
      },

      {
        id: 79,
        reportCode: "OT014",
        reportName: "Room Utilization",
        isNew: true,
        favorite: true,
      },

      {
        id: 80,
        reportCode: "OT009",
        reportName: "Clinic Conversion",
        isNew: true,
        favorite: false,
      },
    ],
  },

  leads: {
    catHeading: "Leads",
    description:
      "Monitor your overall finances including sales, refunds, taxes, payments and more",
    graphDescription: "Revenue by week",
    chartLabel: "int",
    reportsFromServer: [
      {
        id: 81,
        reportCode: "LE000",
        reportName: "Open Leads",
        isNew: true,
        favorite: true,
      },

      {
        id: 82,
        reportCode: "LE001",
        reportName: "Converted Leads",
        isNew: true,
        favorite: false,
      },

      {
        id: 83,
        reportCode: "LE005",
        reportName: "Leads",
        isNew: false,
        favorite: false,
      },

      {
        id: 84,
        reportCode: "LE015",
        reportName: "Leads by Status",
        isNew: true,
        favorite: true,
      },
      {
        id: 85,
        reportCode: "LE020",
        reportName: "Leads by Sources",
        isNew: false,
        favorite: true,
      },

      {
        id: 86,
        reportCode: "LE035",
        reportName: "Leads by Interest",
        isNew: true,
        favorite: false,
      },

      {
        id: 87,
        reportCode: "LE040",
        reportName: "Leads by Clinic",
        isNew: false,
        favorite: false,
      },
    ],
    graphData: [
      ["Jan", 20],
      ["Feb", 5],
      ["Mar", 12],
      ["Apr", 20],
      ["May", 5],
      ["Jun", 12],
      ["Jul", 20],
      ["Aug", 5],
      ["Sep", 12],
      ["Oct", 20],
      ["Nov", 5],
      ["Dec", 12],
    ],
  },

  staff: {
    catHeading: "Staff",
    description:
      "Monitor your overall finances including sales, refunds, taxes, payments and more",
    graphDescription: "New clients by week",
    chartLabel: "%",
    reportsFromServer: [
      {
        id: 88,
        reportCode: "ST001",
        reportName: "Staff Performance Summary",
        isNew: true,
        favorite: true,
      },

      {
        id: 89,
        reportCode: "ST002",
        reportName: "Commission Summary",
        isNew: true,
        favorite: false,
      },

      {
        id: 90,
        reportCode: "ST004",
        reportName: "Staff Performance Tracker",
        isNew: false,
        favorite: false,
      },

      {
        id: 91,
        reportCode: "ST015",
        reportName: "Staff Hourrs",
        isNew: true,
        favorite: true,
      },
      {
        id: 92,
        reportCode: "ST025",
        reportName: "Employee Appointment Summary",
        isNew: false,
        favorite: true,
      },

      {
        id: 93,
        reportCode: "BETA",
        reportName: "Staff Bookouts",
        isNew: true,
        favorite: true,
      },

      {
        id: 94,
        reportCode: "ST005",
        reportName: "Employee Holidays To Date",
        isNew: true,
        favorite: false,
      },

      {
        id: 95,
        reportCode: "ST035",
        reportName: "Staff Days Off",
        isNew: false,
        favorite: false,
      },

      {
        id: 96,
        reportCode: "ST033",
        reportName: "Daily Employee Stats",
        isNew: true,
        favorite: true,
      },
      {
        id: 97,
        reportCode: "ST031",
        reportName: "Daily Employee Stats (Summary)",
        isNew: false,
        favorite: true,
      },

      {
        id: 98,
        reportCode: "ST003",
        reportName: "Commission Report (Retail)",
        isNew: true,
        favorite: true,
      },

      {
        id: 99,
        reportCode: "ST015",
        reportName: "Staff Hours",
        isNew: true,
        favorite: false,
      },

      {
        id: 100,
        reportCode: "ST035",
        reportName: "Staff Days Off",
        isNew: false,
        favorite: false,
      },

      {
        id: 101,
        reportCode: "ST036",
        reportName: "Staff Payroll Report",
        isNew: true,
        favorite: true,
      },

      {
        id: 102,
        reportCode: "ST037",
        reportName: "Timeslots Report",
        isNew: false,
        favorite: true,
      },

      {
        id: 103,
        reportCode: "ST037",
        reportName: "Staff Clock In/Out",
        isNew: false,
        favorite: true,
      },
    ],
    graphData: [
      ["Jan", 20],
      ["Feb", 5],
      ["Mar", 12],
      ["Apr", 20],
      ["May", 5],
      ["Jun", 12],
      ["Jul", 20],
      ["Aug", 5],
      ["Sep", 12],
      ["Oct", 20],
      ["Nov", 5],
      ["Dec", 12],
    ],
  },

  stock: {
    catHeading: "Stock",
    description:
      "Monitor your overall finances including sales, refunds, taxes, payments and more",
    graphDescription: "Utilization by week",
    chartLabel: "£",
    reportsFromServer: [
      {
        id: 104,
        reportCode: "STK001",
        reportName: "Stock Report",
        isNew: true,
        favorite: true,
      },

      {
        id: 105,
        reportCode: "STK005",
        reportName: "Low Stock",
        isNew: true,
        favorite: false,
      },

      {
        id: 106,
        reportCode: "STK015",
        reportName: "Cost of Goods",
        isNew: false,
        favorite: false,
      },

      {
        id: 107,
        reportCode: "STK025",
        reportName: "Stock Count",
        isNew: true,
        favorite: true,
      },
    ],
    graphData: [
      ["Jan", 20],
      ["Feb", 5],
      ["Mar", 12],
      ["Apr", 20],
      ["May", 5],
      ["Jun", 12],
      ["Jul", 20],
      ["Aug", 5],
      ["Sep", 12],
      ["Oct", 20],
      ["Nov", 5],
      ["Dec", 12],
    ],
  },

  custom: {
    catHeading: "Custom",
    description:
      "Monitor your overall finances including sales, refunds, taxes, payments and more",
    graphDescription: "",
    chartLabel: "0",
    graphData: [
      ["Jan", 20],
      ["Feb", 5],
      ["Mar", 12],
      ["Apr", 20],
      ["May", 5],
      ["Jun", 12],
      ["Jul", 20],
      ["Aug", 5],
      ["Sep", 12],
      ["Oct", 20],
      ["Nov", 5],
      ["Dec", 12],
    ],
    reportsFromServer: [],
  },
};

export const ReportsPage: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.ReportsPage}>
      <div className={styles.ReportsPageHeader}>
        <div className={styles.ReportsPageHeaderContainer}>
          <div>
            <span>Setup</span>
            <span className={styles.ReportsPagePath}>{" > Reports"}</span>
          </div>

          <span className={styles.ReportsPageTitle}>Reports</span>
        </div>
        <div className={styles.SearchContainer}>
          <input
            id="report-search"
            className={styles.ReportsPageSearch}
            type="text"
            placeholder="Search by report name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className={styles.ReportsPageSearchButtonsContainer}>
            <div className={styles.ReportsPageSearchImage}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9891 14.0205L10.424 9.45547C11.1324 8.53965 11.5156 7.41992 11.5156 6.24219C11.5156 4.83242 10.9654 3.51055 9.97051 2.51387C8.97559 1.51719 7.6502 0.96875 6.24219 0.96875C4.83418 0.96875 3.50879 1.51895 2.51387 2.51387C1.51719 3.50879 0.96875 4.83242 0.96875 6.24219C0.96875 7.6502 1.51895 8.97559 2.51387 9.97051C3.50879 10.9672 4.83242 11.5156 6.24219 11.5156C7.41992 11.5156 8.53789 11.1324 9.45371 10.4258L14.0188 14.9891C14.0321 15.0025 14.048 15.0131 14.0655 15.0203C14.083 15.0276 14.1018 15.0313 14.1207 15.0313C14.1396 15.0313 14.1584 15.0276 14.1759 15.0203C14.1934 15.0131 14.2093 15.0025 14.2227 14.9891L14.9891 14.2244C15.0025 14.211 15.0131 14.1951 15.0203 14.1776C15.0276 14.1601 15.0313 14.1414 15.0313 14.1225C15.0313 14.1035 15.0276 14.0848 15.0203 14.0673C15.0131 14.0498 15.0025 14.0339 14.9891 14.0205ZM9.02656 9.02656C8.28125 9.77012 7.29336 10.1797 6.24219 10.1797C5.19102 10.1797 4.20313 9.77012 3.45781 9.02656C2.71426 8.28125 2.30469 7.29336 2.30469 6.24219C2.30469 5.19102 2.71426 4.20137 3.45781 3.45781C4.20313 2.71426 5.19102 2.30469 6.24219 2.30469C7.29336 2.30469 8.28301 2.7125 9.02656 3.45781C9.77012 4.20313 10.1797 5.19102 10.1797 6.24219C10.1797 7.29336 9.77012 8.28301 9.02656 9.02656Z"
                  fill="#9292A3"
                />
              </svg>
            </div>

            {query !== "" && (
              <button
                className={styles.ReportsSearchClearButton}
                onClick={() => setQuery("")}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0.125C3.65117 0.125 0.125 3.65117 0.125 8C0.125 12.3488 3.65117 15.875 8 15.875C12.3488 15.875 15.875 12.3488 15.875 8C15.875 3.65117 12.3488 0.125 8 0.125ZM10.9074 10.9918L9.74727 10.9865L8 8.90352L6.25449 10.9848L5.09258 10.99C5.01523 10.99 4.95195 10.9285 4.95195 10.8494C4.95195 10.816 4.96426 10.7844 4.98535 10.758L7.27227 8.0334L4.98535 5.31055C4.96411 5.28478 4.95233 5.25253 4.95195 5.21914C4.95195 5.1418 5.01523 5.07852 5.09258 5.07852L6.25449 5.08379L8 7.1668L9.74551 5.08555L10.9057 5.08027C10.983 5.08027 11.0463 5.1418 11.0463 5.2209C11.0463 5.2543 11.034 5.28594 11.0129 5.3123L8.72949 8.03516L11.0146 10.7598C11.0357 10.7861 11.048 10.8178 11.048 10.8512C11.048 10.9285 10.9848 10.9918 10.9074 10.9918Z"
                    fill="#54B2D3"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={styles.ReportsContainer}>
        {query === "" ? (
          <div className={styles.ReportsCategoryContainer}>
            {Object.values(data).map((reportsCategory) => (
              <div>
                <ReportsCard {...reportsCategory} />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.ReportsFoundReportsContainer}>
            {Object.entries(data).map((reportData) =>
              reportData[1].reportsFromServer.map((report :report) =>
                report.reportName
                  .toLowerCase()
                  .includes(query.toLowerCase()) ? (
                  <div
                    key={report.id}
                    className={styles.FoundReport}
                  >{`${report.reportCode} - ${report.reportName} - ${reportData[1].catHeading}`}</div>
                ) : (
                  ""
                )
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};
