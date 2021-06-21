import styled from "styled-components";
import LightTheme from "themes/light";
import DarkTheme from "themes/dark";

const ToggleWrapper = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  margin: auto;
  display: flex;
  background: linear-gradient(
    to bottom,
    ${(p) => p.theme.secondaryColor},
    ${(p) => p.theme.primaryColor}
  );
`;

const Notch = styled.div`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${(p) => (p.isActive ? "26px" : "1px")});
`;

const Toggle = ({ isActive, onToggle }) => {
  // console.log(isActive, onToggle);
  if (isActive) {
    localStorage.setItem("Mytheme", JSON.stringify(DarkTheme));
  } else {
    localStorage.setItem("Mytheme", JSON.stringify(LightTheme));
  }
  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  );
};
export { Toggle };
