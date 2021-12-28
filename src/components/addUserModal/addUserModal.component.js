import {
  Button,
  Divider,
  FormControl,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import labels from "./labels";

export const AddUserModal = ({ openModal, handleOpen, addUser }) => {
  return (
    <Box className="contentModal">
      <Modal
        open={openModal}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <Box className="modal__header">
            <Typography className="modal__header__text" variant="h6">
              {labels.txtNewContact}
            </Typography>
          </Box>
          <Divider></Divider>
          <Box className="modal__form">
            <form onSubmit={addUser}>
              <FormControl className="modal__form__formControl" required>
                <TextField
                  label={labels.lblUrl}
                  name="photo"
                  required
                />
              </FormControl>
              <FormControl className="modal__form__formControl" required>
                <TextField
                  label={labels.lblName}
                  name="name"
                  required
                />
              </FormControl>
              <FormControl className="modal__form__formControl" required>
                <TextField
                  label={labels.lblDescp}
                  name="description"
                  required
                  multiline
                  rows={4}
                />
              </FormControl>
              <Box className="modal__buttonBox">
                <Button
                  type="submit"
                  variant="contained"
                  className="modal__buttonBox__button"
                >
                  {labels.lblBtn}
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
