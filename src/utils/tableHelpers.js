import { TableCell, tableCellClasses, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

export const createData = (name, influence, currentState, futureState) => {
  return { name, influence, currentState, futureState };
};

export const rows = [
  createData(
    "Healthy Use Of Metrics And Data To Drive Decisions For Product Planning",
    3,
    2,
    4
  ),
  createData("Roadmap Tools Usage Efficiency(E.g. Aha!)", 1, 1, 3),
  createData("Swot Awareness And Competitive Awareness", 3, 4, 2),
  createData("Configuration Mindset Vs Customizations", 2, 0, 0),
  createData("Tech Debt % Allocation / Investment Health", 2, 2, 5),
  createData("New Features % Allocation / Investment Health", 3, 1, 4),
  createData("Data-driven Decision Making", 3, 2, 0),
  createData("CooEffectiveness/role/ownership", 2, 0, 0),
  createData("Collaboration Health Between Product/engineering", 2, 0, 0),
  createData("Agility And Prioritization Mechanics", 3, 0, 0),
];

export const BUTTONS_INFLUENCE = ["-", "S", "M", "L"];

export const StyledTableCell = styled(TableCell)(({ theme }) => ({



  [`&.${tableCellClasses.head}`]: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.2rem",

    "&:first-of-type": {
      textAlign: "left",
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "& td, & th": {
    borderBottom: "1px solid #ececec",
  },

  "&:last-of-type": {
    "td, th": {
      border: 0,
    },
  },
}));
