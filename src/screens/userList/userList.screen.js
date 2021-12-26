import React, { useState } from "react";
import UserListLayout from "./userList.layout";

const UserListScreen = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return <UserListLayout handleOpen={handleOpen} open={open} />
}

export default UserListScreen;