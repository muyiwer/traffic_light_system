import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 20px;
`;

export const TrafficLightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffbf00;
  padding: 10px;
  border-radius: 10px;
  height: 150px;
  width: 60px;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #287602;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #549833;
  }
`;

export const StreetContainer = styled.div<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  position: relative;
`;

export const StreetLabel = styled.span<{ position?: string }>`
  position: absolute;
  ${({ position }) => (position === "top" ? "top: -30px;" : "right: 150px;")}
  width: 100px;
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
`;

export const StreetBContainer = styled.div`
  width: 70vw;
  height: 180px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  position: relative;
`;
