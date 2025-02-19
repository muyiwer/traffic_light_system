import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f0f2f5;
`;

export const Intersection = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background: #2c3e50;
  border-radius: 10px;
`;

export const StreetAxis = styled.div<{ vertical?: boolean }>`
  position: absolute;
  ${({ vertical }) =>
    vertical
      ? `width: 10px; height: 100%; left: 50%; transform: translateX(-50%);`
      : `height: 10px; width: 100%; top: 50%; transform: translateY(-50%);`}
  background: #34495e;
`;

export const CentralHub = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export const ControlButton = styled.button`
  padding: 12px 24px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background: #2980b9;
  }
`;
