import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@/components/record/Table";
import { msgRecords } from "./RecordData";
import { messages } from "@/data/messages";
import { Wrapper, Title, ButtonStyle, TableBox } from "@/styles/styles";

export default function Record() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
  };

  const columns = useMemo(
    () => [
      {
        accessor: "CREAT_DT", // 변경된 부분
        Header: "Creation Date",
      },
      {
        accessor: "MSG_CN",
        Header: "Message Content",
      },
      {
        accessor: "RCV_AREA_ID",
        Header: "Receiver Area ID",
      },
      {
        accessor: "EMRGNCY_STEP_NM",
        Header: "Emergency Step Name",
      },
      {
        accessor: "DSSTR_SE_ID",
        Header: "Disaster ID",
      },
      {
        accessor: "생성일시",
        Header: "Created Timestamp",
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      messages.map((record) => ({
        CREAT_DT: record.CREAT_DT,
        MSG_CN: record.MSG_CN,
        RCV_AREA_ID: record.RCV_AREA_ID,
        EMRGNCY_STEP_NM: record.EMRGNCY_STEP_NM,
        DSSTR_SE_ID: record.DSSTR_SE_ID,
      })),
    [messages]
  );

  return (
    <Wrapper>
      <Title>재난 문자 기록</Title>
      <TableBox>
        <Table columns={columns} data={data} />
      </TableBox>
      <ButtonStyle top="58px" onClick={handleNavigate}>
        돌아가기
      </ButtonStyle>
    </Wrapper>
  );
}
