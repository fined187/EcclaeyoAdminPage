import styled from "styled-components";
import logo from "../img/logo.svg";
import bell from "../img/bell.png";
import { space } from "styled-system";
import SLogout from "./Button";
import { useRef } from "react";


const STobBox = styled.div`
  width: 100%;
  height: 55px;
  left: 0px;
  top: 0px;

  background-color: #2D3039;
`;

const SLeftTopBox = styled.span`
  width: 42px;
  height: 18px;
  left: 107px;
  top: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;

  color: #FFFFFF;
`;

const SRightTopBox = styled.div`
  width: 263px;
  height: 30px;
  margin-left: 2270px;
  margin-top: -10px;
  `;

const Logo = styled.img`
  width: 79px;
  height: 21.61px;
  left: 30px;
  top: 17px;
  `;

const SUsernameBox = styled.span`
  color: white;
`;

const SMyInfo = styled.span`
  color: #FFFFFF;
  width: "65px";
  height: 30px;
  margin-top: 12px;
  left: 1716px;
  border-radius: 150px;
`;

const Spacer = styled.span(space);

const SAlarm = styled.img`
  left: 93.8%;
  right: 5.36%;
  top: 1.57%;
  bottom: 96.57%;
`;

const TopBox = ({username}) => {
  const userRef = useRef({});
  return (
    <STobBox>
      <Logo src="logo" />
      <SLeftTopBox>
        관리자
      </SLeftTopBox>
      <SRightTopBox>
        <SUsernameBox>
          {username} 님
        </SUsernameBox>
        &nbsp;&nbsp;&nbsp;
        <SMyInfo>
          내정보
        </SMyInfo>
        &nbsp;&nbsp;&nbsp;
        <SAlarm src="bell" />
        &nbsp;&nbsp;&nbsp;
        <SLogout value="로그아웃" onClick={() => userRef.current.logUserOut()}/>
      </SRightTopBox>
    </STobBox>
  )
};

export default TopBox;
