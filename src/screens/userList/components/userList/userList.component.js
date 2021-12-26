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
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from "react-icons/bs"; 

export const UserList = ({ data }) => {
  return (
    <Box className="list">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell__name">{labels.lblName}</TableCell>
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
                    <Avatar
                      alt="Diego Plaza"
                      src="/static/images/avatar/1.jpg"
                    />
                    <Box className="avatarName__text">
                      <Typography className="avatarName__text__name">
                        Diego Plaza
                      </Typography>
                      <Typography
                        className="avatarName__text__delete"
                        variant="inherit"
                        display="none"
                        onClick={() => (console.log('ELIMINADO'))}
                      >
                        {labels.lblDelete}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell className="avatarName__text__description" align="left" component="tr" scope="column">
                  Lorem Ipsum is simply dummy texts of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummsssy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="pagination">
        <Button className="pagination__buttonNext" variant="text" startIcon={<BsFillArrowLeftCircleFill className="pagination__icon" size="1.1em"/>}>Página anterior</Button>
        <Button className="pagination__buttonNext" variant="text" endIcon={<BsFillArrowRightCircleFill className="pagination__icon" size="1.1em"/>}>Siguiente página</Button>
      </Box>
    </Box>
  );
};

export default UserList;