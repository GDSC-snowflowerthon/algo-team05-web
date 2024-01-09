import styled from "styled-components";
import PlayStation from "@/assets/images/Navigation/Playstation.svg";
import Setting from "@/assets/images/Navigation/Setting.svg";

export const Wrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
`;

export const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 45px;
  max-width: 390px;
  margin-top: 10px;
`;

export const HomeBtn = styled.div`
  width: 30px;
  height: 30px;
  background: url(${PlayStation});
  background-repeat: no-repeat;
`;

export const SettingBtn = styled.div`
  width: 30px;
  height: 30px;
  background: url(${Setting});
  background-repeat: no-repeat;
`;

export default function Navigation() {
  return (
    <Wrapper>
      <NavigationBar>
        <HomeBtn />
        <SettingBtn />
      </NavigationBar>
    </Wrapper>
  );
}
