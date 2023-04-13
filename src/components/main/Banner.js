import { useEffect, useState } from "react";
import { SBanner, BannerText, RegiBanner, RegiBtn, WaitingBtn, ApprovedBtn, DroppedBtn, SearchBox, SearchText, WaitingBox, WatingList, WaitingNumber } from "./BannerStyle";
import PartnerResult from "../searchResult/PartnerResult";
import { PartnerSearch } from "../../api/partner/PartnerSearch";

function Banner() {
  const [btnActive, setBtnActive] = useState('active1');
  const [jsonList, setJsonList] = useState(null);

  const [post, setPost] = useState({
    keyword: null,
    profileStatus: "ALL",
    dateOfAccessionType: "ALL",
    page: 1,
    size: 5
  });

  const waitingPartner = async() => {
    let result;
    result = await PartnerSearch(post);
    console.log(result);
    setJsonList(result.data);
  }

  return (
    <>
      <SBanner>
        <BannerText type="text" value="파트너 관리" readOnly/>
      </SBanner>
      <RegiBanner>
        <RegiBtn>
          <WaitingBtn className={(btnActive === 'active1' ? " active" : null)} onClick={() => {waitingPartner(); setBtnActive('active1');}}>
            가입 대기
          </WaitingBtn>
          <ApprovedBtn className={(btnActive === 'active2' ? " active" : null)} onClick={() => {setBtnActive('active2');}}>
            승인 파트너
          </ApprovedBtn>
          <DroppedBtn className={(btnActive === 'active3' ? " active" : null)} onClick={() => {setBtnActive('active3');}}>
            탈퇴 인원
          </DroppedBtn>
        </RegiBtn>
      </RegiBanner>
      <SearchBox>
        <SearchText>
          기본 검색
        </SearchText>
      </SearchBox>
      <WaitingBox>
        <WaitingNumber>
          가입 대기 목록 (총 {jsonList?.length}개)
        </WaitingNumber>
        <WatingList>
          <PartnerResult jsonList={jsonList} setJsonList={setJsonList} post={post} setFormData={setPost} />
        </WatingList>
      </WaitingBox>
    </>
  );
};

export default Banner;