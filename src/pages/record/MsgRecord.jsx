import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  RegisterButtonStyle,
  Ttitle,
  Msgtable,
} from "@/styles/styles";
import { msgRecords } from "@/pages/record/RecordData";
import Table from "@/components/record/Table";

export default function MsgRecordPage() {
  const navigate = useNavigate();

  const goToback = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Ttitle>재난 문자 기록</Ttitle>
      <Msgtable>
        <thead>
          <tr>
            <th>CREAT_DT</th>
            <th>MSG_CN</th>
            <th>RCV_AREA_ID</th>
            <th>EMRGNCY_STEP_NM</th>
            <th>DSSTR_SE_ID</th>
            <th>생성일시</th>
          </tr>
        </thead>
        <tbody>
          {msgRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.CREAT_DT}</td>
              <td>{record.MSG_CN}</td>
              <td>{record.RCV_AREA_ID}</td>
              <td>{record.EMRGNCY_STEP_NM}</td>
              <td>{record.DSSTR_SE_ID}</td>
              <td>{record.생성일시}</td>
            </tr>
          ))}
        </tbody>
      </Msgtable>
      <RegisterButtonStyle style={{ marginTop: "20px" }} onClick={goToback}>
        돌아가기
      </RegisterButtonStyle>
    </Wrapper>
  );
}
