import * as React from 'react';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import {useState} from "react";
import {Item_c_basic, Item_Modal} from "../LayOuts/LayOuts";

export const ClientJoinList = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <UserList pinNum={props.pinNum} setOpen={setOpen}></UserList>
            <HostCountOutModal open={open} setOpen={setOpen}></HostCountOutModal>
        </div>
    )
}

const UserList = (props) => {
    // 나중에 레디스로 참여 유저 현황 가져오기
    const [client, setClient] = useState([
        {key: '123123', nickName: '갑시다'},
        {key: '123456', nickName: 'gogo'},
    ])

    return (
        <div>
            {client.map((item) => {
                return (
                    <div key={item.key} style={{display: "inline-block"}}>
                        <Chip
                            label={item.nickName}
                            sx={{marginLeft: 1, marginRight: 1}}
                            onDelete={() => {
                                props.setOpen(true)
                            }}
                        />
                    </div>
                )
            })}
        </div>
    )
}


const HostCountOutModal = (props) => {
    const handleClose = () => props.setOpen(false);
    return (
        <Modal
            open={props.open}
            onClose={() => {
                props.setOpen(false)
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Item_Modal>
                <CardMedia
                    component="img"
                    height="150"
                    width="50"
                    image="/img/logo192.png"
                    alt="green iguana"
                />
                <Item_c_basic>선택한 참여자를 내보냅니다.</Item_c_basic>
                <Item_c_basic>
                    <Button variant="contained" onClick={() => {
                        //     stompSend("ban", {
                        //         pinNum: props.pinNum,
                        //         nickName: props.nickName
                        //     });
                    }}>확인</Button>
                    <Button variant="contained" color="primary" onClick={handleClose}>취소</Button>
                </Item_c_basic>
            </Item_Modal>
        </Modal>
    );
}

