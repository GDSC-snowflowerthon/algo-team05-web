import { useNavigate } from "react-router-dom";
import { LText, RegisterButtonStyle, Ttitle, Wrapper} from "../../styles/styles";

export default function Quizpage() {
    const navigate = useNavigate();

    const goToback = () => {
        navigate("/");
    };

    return (
    <Wrapper>
        <Ttitle>
            재난 키워드 퀴즈
        </Ttitle>
        <LText style={{position: 'absolute', top :'50%', bottom : '50%'}}>
            준비 중 입니다.
        </LText>
        <RegisterButtonStyle style={{position: 'absolute', bottom : '15%'}} onClick={goToback}>돌아가기</RegisterButtonStyle>
    </Wrapper>
    )
}