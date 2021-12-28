import { Container } from "@mui/material";
import React from "react";
import Options from "./components/options/options.component";
import Header from "./components/header/header.component";
import UserList from "./components/userList/userList.component";
import { AddUserModal } from "../../components/addUserModal/addUserModal.component";

const HomeLayout = ({
  handleOpen,
  open,
  userList,
  handleNextPage,
  handleBackPage,
  buttonsVisibles,
  handleSearch,
  deleteUser,
  addUser,
}) => {
  return (
    <>
      <Container>
        <Header />
        <Options handleSearch={handleSearch} handleOpen={handleOpen} />
        <UserList
          data={userList}
          handleNextPage={handleNextPage}
          handleBackPage={handleBackPage}
          buttonsVisibles={buttonsVisibles}
          deleteUser={deleteUser}
        />
        <AddUserModal
          openModal={open}
          handleOpen={handleOpen}
          addUser={addUser}
        />
      </Container>
    </>
  );
};

export default HomeLayout;
