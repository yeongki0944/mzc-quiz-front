import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>참가자 퇴장</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AlterImg></AlterImg>
          <Typography align='center' id="modal-modal-title" variant="h6" component="h2">
           진행자에 의해 강퇴 되었습니다.
          </Typography>

          <Link to="/">
          <Typography variant="h5" component="div" align='center'>
          <Button variant="contained">확인</Button>
          </Typography>
          </Link>
        </Box>
      </Modal>
    </div>
  );
}

export function AlterImg() {
  return (
      <CardMedia
        component="img"
        height="150"
        image="/img/logo192.png"
        alt="green iguana"
      />
  );
}
