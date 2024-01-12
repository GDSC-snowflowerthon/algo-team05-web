import { Ttitle, Wrapper, QuizButtonStyle, QuizStyle, Lttext } from "../../styles/styles";
import { quizdata } from '@/pages/quiz/quizdata';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quizpage() {
    const quiz = quizdata;
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [alertMessage, setAlertMessage] = useState(null);
    const [finish, sertFinish] = useState(false);

    const goToback = () => {
        navigate("/");
    }

    const retry = () => {
        location.reload();
    }

    const handleAnswer = (answer) => {
        if (isAnswered) return; 

    const isCorrect = quiz[currentQuizIndex].answer === answer;

    if (isCorrect) {
        setAlertMessage("정답입니다!");
        setCorrectCount(correctCount + 1);
      } else {
        setAlertMessage("오답입니다!");
    }
      setIsAnswered(true);

      setTimeout(() => {
        if (currentQuizIndex < quiz.length - 1) {
          setCurrentQuizIndex(currentQuizIndex + 1);
          setIsAnswered(false);
          setAlertMessage(null);
        } else {
            sertFinish(true);
            setAlertMessage(<>
                퀴즈가 모두 끝났습니다.<br />
                점수 : {correctCount * 10}점 / 100 점
                
              </>);
        }
      }, 500);
  };
    return (
    <Wrapper>
        <Ttitle>
            재난 키워드 퀴즈
        </Ttitle>
        <QuizStyle>
            <Lttext style={{ fontSize : '30px', marginTop : '80px'}}>{quiz[currentQuizIndex].quiz}</Lttext>
        </QuizStyle>
        {!finish ? 
        (<>
        <QuizButtonStyle style={{ left: '13%', right: 'auto' }} onClick={() => {handleAnswer("O")}}>O</QuizButtonStyle>
        <QuizButtonStyle style={{ right: '13%', left: 'auto' }} onClick={() => {handleAnswer("X")}}>X</QuizButtonStyle></>
        ) : 
        (<>
        <QuizButtonStyle style={{ left: '13%', right: 'auto', fontSize : '25px' }} onClick={() => {retry()}}>다시하기</QuizButtonStyle>
        <QuizButtonStyle style={{ right: '13%', left: 'auto', fontSize : '25px' }} onClick={() => {goToback()}}>돌아가기</QuizButtonStyle>
        <QuizAnswerStyle onClick={() => {setModal(true)}}> 정답 확인하기 </QuizAnswerStyle>
        <ModalStyle isopen={modal} >
            모달입니다.
        </ModalStyle>
        </>
        )
        }
        <div style={{ fontSize : '20px', position: "absolute", top: '540px', opacity: alertMessage ? 1 : 0, height: alertMessage ? 'auto' : 0, overflow: 'hidden', transition: "opacity 0.5s, height 0.5s" }}>
                <p style={{ color: "#333d42" }}>{alertMessage}</p>
            </div>
    </Wrapper>
    )
}