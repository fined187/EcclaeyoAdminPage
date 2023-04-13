import { Table } from "react-bootstrap";
import picture from "../img/picture.png";
import { useState } from "react";
import { downloadFile } from "../../api/partner/donwloadAll/DownloadAll";
import styled from "styled-components";
import Select from "react-select";
import { statusMenu } from "../Constants";
import { ChangeStatus } from "../../api/partner/ChangeStatus";

function PartnerResult({jsonList}) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handlePage = (page) => {
    setPage(page);
  }

  const tableStyles = {
    listTitle: {
      textAlign: "center",
      width: "170px",
      background: "#EFF2F8",
      height: "30px"
    },
    listInfo: {
      width: "100%",
      textAlign: "center",
      margin: "10px"
    },
    contentListBody: {
      textAlign: "center",
      height: "100%",
      background: "#F8F9FD",
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
              <th style={tableStyles.listTitle}>사업자 등록증</th>
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
              (jsonList !== null) ? jsonList?.map((item, i) => {
                return (
                  <GetPartner 
                    key={i}
                    Id={i + 1}
                    status={item.status}
                    partnerId={item.partnerId}
                    partnerName={item.partnerName}
                    phoneNumber={item.phoneNumber}
                    partnerUsername={item.partnerUsername}
                    businessRegistrationNumber={item.businessRegistrationNumber}
                    BUSINESS_LICENSE={item.documents[1]?.url}
                    CARRIERS_CERT={item.documents[2]?.url}
                    DRIVER_LICENSE={item.documents[0]?.url}
                    BANKBOOK={item.documents[3]?.url}
                    partnerBusinessArea={item.partnerBusinessArea}
                    dateOfRegistration={item.dateOfRegistration}
                    lastModifiedDate={item.lastModifiedDate}
                  />
                )
              }) : null
            }
          </tbody>
        </Table>
      </div>
    </>
  )
};

function GetPartner(props) {

  const options = statusMenu;

  const dropdownOptions = options.map((option) => {
    return {value: option.engStatus, label: option.korStatus}
  });

  const handleSelectChange = async(selectedOption) => {
    let data = 
    {
      id: props.partnerId,
      profileStatus: selectedOption.value,
      message: "in modification",
    };
    
    let result;
    result = await ChangeStatus(data);
    // console.log(selectedOption.value);
    // console.log(props.partnerId);
    console.log(result);
  };

  const ButtonZip = styled.button`
    color: black;
    border: none;
    background-color: #EFF2F8;
    font-weight: 400;
    font-family: "Inter";
    font-style: normal;
    font-size: 16px;
    line-height: 16px;
  `;

  const StyledSelect = styled(Select)`
    width: 150px;
  `;

  return (
    <tr>
      <td>{props.Id}</td>
      <td>
        <StyledSelect options={dropdownOptions} defaultValue={props.status} placeholder={props.status} onChange={handleSelectChange} />
      </td>
      <td>{props.partnerId}</td>
      <td>{props.partnerName}</td>
      <td>{props.phoneNumber}</td>
      <td>{props.businessRegistrationNumber}</td>
      <td><a href={props.BUSINESS_LICENSE} download={props.BUSINESS_LICENSE} ><img src={picture} /></a></td>
      <td><a href={props.CARRIERS_CERT} download={props.CARRIERS_CERT}><img src={picture} /></a></td>
      <td><a href={props.DRIVER_LICENSE} download={props.DRIVER_LICENSE}><img src={picture} /></a></td>
      <td><a href={props.BANKBOOK} download={props.BANKBOOK}><img src={picture} /></a></td>
      <td><ButtonZip onClick={() => {downloadFile(props.partnerId)}}>[전체 다운로드]</ButtonZip></td>
      <td>{props.partnerBusinessArea}</td>
      <td>{props.dateOfRegistration}</td>
      <td>{props.lastModifiedDate}</td>
    </tr>
  )
}

export default PartnerResult;