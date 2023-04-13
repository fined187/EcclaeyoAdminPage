import { useEffect, useState } from "react";
import { SBanner, BannerText, RegiBanner, RegiBtn, WaitingBtn, ApprovedBtn, DroppedBtn, SearchBox, SearchText, WaitingBox, WatingList, WaitingNumber } from "./BannerStyle";
import PartnerResult from "../searchResult/PartnerResult";
import Date from "../date/Date";

function Banner() {
  const [btn, setBtn] = useState("Waiting");

  const btnClick = (e) => {
    const {currentTarget: {id}} = e;
    setBtn(id);
  };

  const [jsonList, setJsonList] = useState(null);

  return (
    <>
      <SBanner>
        <BannerText type="text" value="파트너 관리" readOnly/>
      </SBanner>
      <RegiBanner>
        <RegiBtn>
          <WaitingBtn onClick={btnClick} id="Waiting">
            가입 대기
          </WaitingBtn>
          <ApprovedBtn onClick={btnClick} id="Approved">
            승인 파트너
          </ApprovedBtn>
          <DroppedBtn onClick={btnClick} id="Dropped">
            탈퇴 인원
          </DroppedBtn>
        </RegiBtn>
      </RegiBanner>
      <SearchBox>
        <SearchText>
          기본 검색
        </SearchText>
        <Date />
      </SearchBox>
      <WaitingBox>
        <WaitingNumber>
          가입 대기 목록 (총 {}개)
        </WaitingNumber>
        <WatingList>
          <PartnerResult jsonList={jsonList} setJsonList={setJsonList} />
        </WatingList>
      </WaitingBox>
    </>
  );
};

export default Banner;