import { useState } from "react";
import styled from "styled-components";
import { MenuInfo } from "./Constants";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Container = styled.div`
  height: 300px;
  width: 230px;
  background-color: #404A5C;
`;

const ContainerOut = styled.div`
  width: 230px;
  height: 800px;
  background-color: #455063;
  `;

const Content = styled.div`
  width: 200px;
  height: 190px;
  margin-left: -10px;
  margin-top: 0px;
`;

const MenuTitle = styled.span`
  align-items: center;
  display: flex;
  color: #FFFFFF;
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  li {
    padding: 15px 1px;
    opacity: 0.8;
    font-size: 20px;
    list-style-type: none;
  }
  .link {
    color: #FFFFFF;
  }
`;

const Line = styled.div`
  position: absolute;
  width: 180px;
  height: 1px;
  left: 20px;
  top: 108px;
  background: #EBECEF;
`;

function Sidebar() {
  const [clicked, setClicked] = useState(false);
  const onClick = () => setClicked(!clicked);

  return (
    <>
      <Container>
        <Content>
          <MenuTitle>
            <Links>
              {
                MenuInfo.map((item, index) => {
                  return (
                      <li key={index}>
                        <Link key={index} className='link' style={{textDecoration: 'none'}} to={item.path}>
                          {item.title}
                        </Link>
                        <Line />
                      </li>
                  )
                })
              }
            </Links>
          </MenuTitle>
        </Content>
      </Container>
      <ContainerOut />
    </>
  )
};

export default Sidebar;