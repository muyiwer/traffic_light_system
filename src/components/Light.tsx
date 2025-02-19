import styled from "styled-components";

type LightProps = {
  color: "red" | "yellow" | "green";
  active: boolean;
};

const StyledLight = styled.div<{ color: string; active: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ color, active }) => (active ? color : "#ba9944")};
  box-shadow: ${({ active, color }) => (active ? `0 0 15px ${color}` : "none")};
  margin: 10px auto;
`;

const Light: React.FC<LightProps> = ({ color, active }) => {
  return <StyledLight color={color} active={active} />;
};

export default Light;
