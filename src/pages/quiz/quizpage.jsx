import { Ttitle, Wrapper, QuizButtonStyle, QuizStyle, Lttext, QuizAnswerStyle, ModalStyle} from "../../styles/styles";
import { quizdata } from '@/pages/quiz/quizdata';
import { useState, useEffect } from "react";
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
    const [data, setData] = useState([]);
    
    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };
    useEffect(() => {
        const shuffledQuizzes = shuffleArray(quiz).slice(0, 4);
        setData(shuffledQuizzes);
    }, [quiz]);


    const goToback = () => {
        navigate("/home");
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
        if (currentQuizIndex < 3) {
          setCurrentQuizIndex(currentQuizIndex + 1);
          setIsAnswered(false);
          setAlertMessage(null);
        } else {
            sertFinish(true);
            setAlertMessage(<>
                퀴즈가 모두 끝났습니다.<br />
                점수 : {correctCount * 25}점 / 100 점
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
        <Lttext style={{ fontSize: '26px', marginTop: '90px' }}>{data.length > 0 && data[currentQuizIndex].quiz}</Lttext>
        </QuizStyle>
        
        {!finish ? 
        (<>
        <QuizButtonStyle style={{ left: '15%', right: 'auto' }} onClick={() => {handleAnswer("O")}}>O</QuizButtonStyle>
        <QuizButtonStyle style={{ right: '15%', left: 'auto' }} onClick={() => {handleAnswer("X")}}>X</QuizButtonStyle></>
        ) : 
        (<>
        <QuizButtonStyle style={{ left: '15%', right: 'auto', fontSize : '25px' }} onClick={() => {retry()}}>다시하기</QuizButtonStyle>
        <QuizButtonStyle style={{ right: '15%', left: 'auto', fontSize : '25px' }} onClick={() => {goToback()}}>돌아가기</QuizButtonStyle>
        <QuizAnswerStyle onClick={() => {setModal(true)}}> 정답 확인하기 </QuizAnswerStyle>
        {/* <Modal isOpen={modal}/> */}
        <ModalStyle isopen={modal} >
            <div style={{ marginBottom: '12px' }} >정답</div>
            {data.map((d, index) => (
                            <div key={d.id} style={{ marginBottom: '11px' }} > {index + 1}번 문제 : {quiz.find((q) => q.id === d.id)?.realanswer}</div>
                        ))}
        </ModalStyle>
        </>
        )
        
        }
        <div style={{ fontSize : '20px', position: "absolute", top: '510px', opacity: alertMessage ? 1 : 0, height: alertMessage ? 'auto' : 0, overflow: 'hidden', transition: "opacity 0.5s, height 0.5s" }}>
                <p style={{ color: "#333d42" }}>{alertMessage}</p>
            </div>
    </Wrapper>
    )
}
