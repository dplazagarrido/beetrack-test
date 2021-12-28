import {
  Avatar,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import labels from "./labels";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export const UserList = ({
  data,
  handleNextPage,
  handleBackPage,
  buttonsVisibles,
  deleteUser,
}) => {
  return (
    <Box className="list">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell__name">
                {labels.lblName}
              </TableCell>
              <TableCell className="tableCell__description" align="left">
                {labels.lblDescription}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                className="hoverDelete"
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="tableCell" component="tr" scope="column">
                  <Box className="avatarName">
                    <Avatar alt={row.name} src={row.photo} />
                    <Box className="avatarName__text">
                      <Typography className="avatarName__text__name">
                        {row.name}
                      </Typography>
                      <Typography
                        className="avatarName__text__delete"
                        variant="inherit"
                        display="none"
                        onClick={() => deleteUser(row.id)}
                      >
                        {labels.lblDelete}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="left" component="tr" scope="column">
                  <Typography
                    variant="body2"
                    className="avatarName__text__description"
                  >
                    {row.description}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="pagination">
        {buttonsVisibles?.back ? (
          <Button
            className="pagination__buttonNext"
            variant="text"
            onClick={handleBackPage}
            startIcon={
              <BsFillArrowLeftCircleFill
                className="pagination__icon"
                size="1.1em"
              />
            }
          >
            {labels.btnBack}
          </Button>
        ) : (
          <Box />
        )}
        {buttonsVisibles?.next ? (
          <Button
            className="pagination__buttonNext"
            variant="text"
            onClick={handleNextPage}
            endIcon={
              <BsFillArrowRightCircleFill
                className="pagination__icon"
                size="1.1em"
              />
            }
          >
            {labels.btnNext}
          </Button>
        ) : (
          <Box />
        )}
      </Box>
    </Box>
  );
};

export default UserList;
