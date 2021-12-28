import React, { useEffect, useState } from "react";
import HomeLayout from "./home.layout";
import userServices from "../../services/userServices";
import { useDispatch, useSelector } from "react-redux";
import { getNumberUsers } from "../../redux/user";
import { numberOfUserPerPage } from "../../utils/config";
import ErrorModal from "../../components/errorModal/errorModal.component";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const numberOfPages = useSelector((store) => store.user.numberPages);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [userList, setUserList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [deleteItem, setDeleteItem] = useState(false);
  const [addItem, setAddItem] = useState(false);
  const [buttonsVisibles, setButtonVisibles] = useState({
    next: false,
    back: false,
  });
  const [openError, setOpenError] = useState(false);

  useEffect(() => {
    getUserList(page, numberOfUserPerPage);
    handleVisiblePagination();
  }, [page, deleteItem, addItem]);

  useEffect(() => {
    dispatch(getNumberUsers());
    handleVisiblePagination();
  }, [deleteItem, addItem]);

  useEffect(() => {
    if (page > 1 && page !== numberOfPages - 1) {
      handleBackPage();
    }
    handleVisiblePagination();
    getUserList(page, numberOfUserPerPage);
  }, [numberOfPages]);

  const handleOpen = () => setOpen(!open);
  const handleOpenError = () => setOpenError(!openError);

  const getUserList = async (page, limit) => {
    try {
      const response = await userServices.getListOfUsers(page, limit);
      setUserList(response.data);
      setSearchList(response.data);
    } catch (error) {
      handleOpenError();
    }
  };

  const addUser = async (event) => {
    try {
      event.preventDefault();
      const { photo, name, description } = event.target.elements;
      const user = {
        photo: photo.value,
        name: name.value,
        description: description.value,
      };
      await userServices.addUser(user);
      handleOpen();
      setAddItem(!addItem);
    } catch (error) {
      handleOpenError();
    }
  };

  const deleteUser = async (idUser) => {
    try {
      await userServices.deleteUser(idUser);
      setDeleteItem(!deleteItem);
    } catch (error) {
      handleOpenError();
    }
  };

  const handleVisiblePagination = () => {
    if (page < numberOfPages) {
      setButtonVisibles({ next: true, back: false });
    }
    if (page > 1) {
      setButtonVisibles({ next: true, back: true });
    }
    if (page === numberOfPages && numberOfPages > 1) {
      setButtonVisibles({ next: false, back: true });
    }
    if (page === numberOfPages && numberOfPages === 1) {
      setButtonVisibles({ next: false, back: false });
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleBackPage = () => {
    setPage(page - 1);
  };

  const handleSearch = async (result) => {
    const { value } = result.target;
    let resultSearch = userList.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchList(resultSearch);
  };

  return (
    <>
      <HomeLayout
        handleOpen={handleOpen}
        open={open}
        userList={searchList}
        handleNextPage={handleNextPage}
        handleBackPage={handleBackPage}
        buttonsVisibles={buttonsVisibles}
        handleSearch={handleSearch}
        deleteUser={deleteUser}
        addUser={addUser}
      />
      <ErrorModal handleOpenError={handleOpenError} openError={openError} />
    </>
  );
};

export default HomeScreen;
