import { useNavigate } from "react-router-dom";
import { Wrapper,RegisterButtonStyle, Ttitle, Msgtable } from "../../styles/styles"

export default function MsgRecordPage() {

    const navigate = useNavigate();

    const goToback = () => {
        navigate("/");
    };

    const msgRecords = [ // 더미데이터 
        {
          CREAT_DT: '2022-01-01',
          MSG_CN: '메시지 내용 1',
          RCV_AREA_ID: 1,
          EMRGNCY_STEP_NM: '긴급단계 1',
          DSSTR_SE_ID: 1,
          생성일시: '2022-01-01 12:00:00',
        },
        {
          CREAT_DT: '2022-01-02',
          MSG_CN: '메시지 내용 2',
          RCV_AREA_ID: 2,
          EMRGNCY_STEP_NM: '긴급단계 2',
          DSSTR_SE_ID: 2,
          생성일시: '2022-01-02 12:00:00',
        },
        {
            CREAT_DT: '2022-01-02',
            MSG_CN: '메시지 내용 2',
            RCV_AREA_ID: 2,
            EMRGNCY_STEP_NM: '긴급단계 2',
            DSSTR_SE_ID: 2,
            생성일시: '2022-01-02 12:00:00',
          },{
            CREAT_DT: '2022-01-02',
            MSG_CN: '메시지 내용 2',
            RCV_AREA_ID: 2,
            EMRGNCY_STEP_NM: '긴급단계 2',
            DSSTR_SE_ID: 2,
            생성일시: '2022-01-02 12:00:00',
          },{
            CREAT_DT: '2022-01-02',
            MSG_CN: '메시지 내용 2',
            RCV_AREA_ID: 2,
            EMRGNCY_STEP_NM: '긴급단계 2',
            DSSTR_SE_ID: 2,
            생성일시: '2022-01-02 12:00:00',
          },
          {
            CREAT_DT: '2022-01-02',
            MSG_CN: '메시지 내용 2',
            RCV_AREA_ID: 2,
            EMRGNCY_STEP_NM: '긴급단계 2',
            DSSTR_SE_ID: 2,
            생성일시: '2022-01-02 12:00:00',
          },{
            CREAT_DT: '2022-01-02',
            MSG_CN: '메시지 내용 2',
            RCV_AREA_ID: 2,
            EMRGNCY_STEP_NM: '긴급단계 2',
            DSSTR_SE_ID: 2,
            생성일시: '2022-01-02 12:00:00',
          },
      ];
    
      return (
        <Wrapper>
            <Ttitle>
                재난 문자 기록
            </Ttitle>
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
          <RegisterButtonStyle style={{marginTop: '20px'}} onClick={goToback}>돌아가기</RegisterButtonStyle>
        </Wrapper>
      );
};
