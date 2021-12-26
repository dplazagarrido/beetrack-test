import { Container } from "@mui/material";
import React from "react";
import Options from "./components/options/options.component";
import Header from "./components/header/header.component";
import UserList from "./components/userList/userList.component";
import { AddUserModal } from "../../components/addUserModal/addUserModal.component";

const userListLayout = ({handleOpen, open}) => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <>
      <Container>
        <Header />
        <Options handleOpen={handleOpen} />
        <UserList data={rows} />
        <AddUserModal openModal={open} handleOpen={handleOpen}/>
      </Container>
    </>
  );
};

const styles = {
  divContent: {
    backgroundColor: "#E5E5E5",
  },
  button: {
    backgroundColor: "#EFB755",
  },
  beetrackText: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "row",
    color: "#999B9D",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "30px",
    height: "40px",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "30px",
  },
  tableCell: {
    borderRightStyle: "solid",
    borderRightColor: "#E0E0E0",
    display: "tableRowGroup",
    borderLeftWidth: "thin",
  },
};

export default userListLayout;
