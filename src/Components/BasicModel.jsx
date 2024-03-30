import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CreatePostArea from './CreatePostArea';
import CreateIcon from '@mui/icons-material/Create';

function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button style={{
        color: 'white',
        backgroundColor:'rgb(174, 40, 156)',
        height: 50,
        width: 100,
        borderRadius: 50,
        float: 'right',
        margin: 30,
        position: 'fixed',
        right: 350
      }} onClick={handleOpen}><CreateIcon />Post</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreatePostArea onAddPost={props.onPostUpdate} onClose={handleClose}/>
      </Modal>
    </div>
  );
}

export default BasicModal;