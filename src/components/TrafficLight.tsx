import Light from "./Light";
import { useTrafficLight } from "@/hooks/useTrafficLight";
import {
  Container,
  TrafficLightBox,
  Button,
  StreetContainer,
  StreetLabel,
  StreetBContainer,
} from "@/styles/TrafficLight.styles";

const TrafficLight: React.FC = () => {
  const { currentLight, isRunning, startTraffic, resetTraffic } =
    useTrafficLight();

  return (
    <Container>
      {/* Street A (Top) */}
      <StreetContainer $width="150px" $height="250px">
        <StreetLabel>Street A</StreetLabel>
        <TrafficLightBox>
          <Light
            color="red"
            active={currentLight === "B_GREEN" || currentLight === "B_YELLOW"}
          />
          <Light color="yellow" active={currentLight === "A_YELLOW"} />
          <Light color="green" active={currentLight === "A_GREEN"} />
        </TrafficLightBox>
      </StreetContainer>

      {/* Street B (Middle) */}
      <StreetBContainer>
        <StreetLabel position="top">Street B</StreetLabel>
        <TrafficLightBox>
          <Light
            color="red"
            active={currentLight === "A_GREEN" || currentLight === "A_YELLOW"}
          />
          <Light color="yellow" active={currentLight === "B_YELLOW"} />
          <Light color="green" active={currentLight === "B_GREEN"} />
        </TrafficLightBox>

        {!isRunning ? (
          <Button onClick={startTraffic}>Start</Button>
        ) : (
          <Button onClick={resetTraffic}>Reset</Button>
        )}

        <TrafficLightBox>
          <Light
            color="red"
            active={currentLight === "A_GREEN" || currentLight === "A_YELLOW"}
          />
          <Light color="yellow" active={currentLight === "B_YELLOW"} />
          <Light color="green" active={currentLight === "B_GREEN"} />
        </TrafficLightBox>
      </StreetBContainer>

      {/* Street A (Bottom) */}
      <StreetContainer $width="150px" $height="250px">
        <TrafficLightBox>
          <Light
            color="red"
            active={currentLight === "B_GREEN" || currentLight === "B_YELLOW"}
          />
          <Light color="yellow" active={currentLight === "A_YELLOW"} />
          <Light color="green" active={currentLight === "A_GREEN"} />
        </TrafficLightBox>
      </StreetContainer>
    </Container>
  );
};

export default TrafficLight;
