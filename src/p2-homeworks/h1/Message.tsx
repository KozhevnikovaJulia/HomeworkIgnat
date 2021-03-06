import React from "react";
import style from './Message.module.css';


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


 function Message(props:MessagePropsType) {
    return (
        <div className={style.contaner}>
        <div className={style.message}>
            <div className={style.ava}>
                <img src={props.avatar} />
            </div>
            <div className={style.messageArea}>
                <span>{props.name}</span>
                <div> {props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>




        </div>
    );
}

export default Message;
