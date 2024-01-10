import { useState } from "react";
import styled from "styled-components";
import PlayStation from "@/assets/images/Navigation/Playstation.svg";
import SetImoge from "@/assets/images/Navigation/Setting.svg";
import Setting from "@/components/Setting/Setting";

export const Wrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100%;
  max-height: 10px;
  min-height: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 120;
`;

export const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 45px;
  max-width: 320px;
  margin-top: 20px;
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
  background: url(${SetImoge});
  background-repeat: no-repeat;
`;

export default function Navigation() {
  const [isShow, setIsShow] = useState(false);

  const handleSetting = () => {
    setIsShow(true);
  };

  return (
    <Wrapper>
      <NavigationBar>
        <HomeBtn />
        <SettingBtn onClick={handleSetting} />
      </NavigationBar>
      {isShow ? <Setting setIsShow={setIsShow} /> : <></>}
    </Wrapper>
  );
}
