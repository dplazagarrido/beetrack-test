import { Button, Divider, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import labels from "./labels";

const ErrorModal = ({ openError, handleOpenError }) => {
  return (
    <Box className="contentModal">
      <Modal
        open={openError}
        onClose={handleOpenError}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableBackdropClick
      >
        <Box className="modal">
          <Box className="modal__header">
            <Typography className="modal__header__text" variant="h6">
              {labels.titleError}
            </Typography>
          </Box>
          <Divider></Divider>
          <Box className="modal__header">
            <Typography variant="subtitle1">{labels.txtError}</Typography>
          </Box>
          <Box className="modal__buttonBox">
            <Button
              variant="contained"
              className="modal__buttonBox__button"
              onClick={handleOpenError}
            >
              {labels.lblButton}
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ErrorModal;
