import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {QuizView} from "../../components/QuizView/QuizView";
import {useEffect} from "react";
import {QuizStartCounter} from "../../components/QuizStartCounter";
import {R_setData} from "../../redux/reducers/quizplayReducer";
import {Page} from "../../LayOuts/LayOuts";
import {QuizHostReady} from "./QuizHostReady";
import {stompInit, stompSubscribe} from "../../function/WebSocket";
import {Rank_Page} from "../../components/Result/Rank_Page";
import {FinalRankPage} from "../../components/Result/FinalRankPage"
import {getPinNum} from "../../function/localStorage";
import {disableBackPage} from "../../function/common";

export const QuizHostPlay = () => {
    const dispatch = useDispatch();
    const {quizPlay} = useSelector(state => state.quizPlay);

    useEffect(() => {
        disableBackPage();
    }, []);
    
    /**
     * 퀴즈 진행 command 시 페이지 변경용 useEffect
     * READY : 웹 소켓 시작 후 퀴즈 시작 전 대기 화면
     * START : 퀴즈 시작 카운트 다운 이후 퀴즈 진행 화면
     */
    useEffect(() => {
        switch (quizPlay.command) {
            case "READY":
                console.log(getPinNum());
                stompInit(getPinNum());
                setTimeout(() => {
                    dispatch(R_setData({key: "command", value: "WAIT"}));
                }, 50);
                break;
            case "START":
                setTimeout(() => {
                    dispatch(R_setData({key: "command", value: "SHOW"}));
                }, 3000);
                break;
        }
    }, [quizPlay.command]);


    /**
     * WAIT : 퀴즈 대기방 대기, 호스트가 시작 버튼 누르면 START로 이동
     * START : 퀴즈 시작, 3초 카운트 후 퀴즈 표시
     * SHOW : 퀴즈 문제 표시
     * RESULT : 중간 결과 표시
     * FINAL : 최종 결과 표시
     */
    return (

        <Page sx={{bg:'img',img: '/img/background_1.jpg'}}>
            {quizPlay.command === "WAIT" && <QuizHostReady/>}
            {quizPlay.command === "START" && <QuizStartCounter/>}
            {quizPlay.command === "SHOW" && <QuizView currentQuiz={quizPlay.quiz} state={"play"}/>}
            {quizPlay.command === "RESULT" && <Rank_Page/>}
            {quizPlay.command === "FINAL" && <FinalRankPage/>}
        </Page>
    );
}
