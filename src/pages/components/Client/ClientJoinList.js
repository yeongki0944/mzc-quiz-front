
import * as React from 'react';
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const User = ({userData}) => {
    let nickName = null;
    for(let i = 0; i<userData.length;i++){
        nickName = userData.nickName[i];
        console.log(userData.nickName);
    }

    return (
        <tr>
            {/* <td>핀번호 : {userData.pinNum}</td> */}
            <td>닉네임 : {userData.nickName}</td>
        </tr>

    )
}

const UserList = (props) => {
    const users = [
        {pinNum : '123123', nickName : '갑시다'},
        {pinNum : '123456', nickName : 'gogo'},
    ]

    return (
        <table>
            <thead>
            <tr>
            </tr>
            </thead>
            <tbody>
            {users.map(user => <User key={user.nickName} userData={user}/>)}
            </tbody>
        </table>
    )
}

export const ClientJoinList = (props) => {
    return (
        <>
            <Paper><HostCountOutModal></HostCountOutModal></Paper>
        </>
    )
}

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

export function HostCountOutModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}><UserList></UserList></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AlterImg></AlterImg>
                    <Typography align='center' id="modal-modal-title" variant="h6" component="h2">
                        선택한 참여자를 내보냅니다.
                    </Typography>

                    {/*<Link to="/QClient">*/}
                    <Typography variant="h5" component="div" align='center'>
                        <Button variant="contained" color="primary">취소</Button>
                        <Button variant="contained">확인</Button>
                    </Typography>
                    {/*</Link>*/}
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