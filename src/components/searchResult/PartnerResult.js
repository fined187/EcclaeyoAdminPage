import { Table } from "react-bootstrap";

function PartnerResult(props) {

  const tableStyles = {
    listTitle: {
      textAlign: "center",
      width: "170px",
      background: "#F8F9FD"
    },
    listInfo: {
      width: "100%",
      textAlign: "center",
      margin: "10px"
    },
    contentListBody: {
      textAlign: "center",
      height: "100%"
    }
  }

  return (
    <>
      <div>
        <Table striped border hover size="sm">
          <thead>
            <tr>
              <th style={tableStyles.listTitle}>NO</th>
              <th style={tableStyles.listTitle}>진행상태</th>
              <th style={tableStyles.listTitle}>파트너ID</th>
              <th style={tableStyles.listTitle}>파트너 이름</th>
              <th style={tableStyles.listTitle}>연락처</th>
              <th style={tableStyles.listTitle}>사업자 등록번호</th>
              <th style={tableStyles.listTitle}>화물 자격증</th>
              <th style={tableStyles.listTitle}>운전 면허증</th>
              <th style={tableStyles.listTitle}>통장 사본</th>
              <th style={tableStyles.listTitle}>다운로드</th>
              <th style={tableStyles.listTitle}>파트너 활동지역</th>
              <th style={tableStyles.listTitle}>등록 일자</th>
              <th style={tableStyles.listTitle}>최근 수정</th>
            </tr>
          </thead>
          <tbody style={tableStyles.contentListBody}>
            {
              (props.jsonList)?.map((item, i) => {
                return (
                  <GetPartner 
                    key={i}

                  />
                )
              })
            }
          </tbody>
        </Table>
      </div>
    </>
  )
};

function GetPartner(props) {
  return (
    <tr>
      <td>{}</td>
      <td>{}</td>
      <td>{}</td>
      <td>{}</td>
      <td>{}</td>
      <td>{}</td>
      <td>{}</td>
      <td>{}</td>
      <td>{}</td>
      <td>{}</td>
      <td>{}</td>
      <td>{}</td>
      <td>{}</td>
    </tr>
  )
}

export default PartnerResult;