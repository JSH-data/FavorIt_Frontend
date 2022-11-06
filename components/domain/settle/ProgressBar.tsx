import styled from '@emotion/styled';
import { useMemo } from 'react';

const PresentPictures = ({
  totalAmount,
  collectedAmount,
}: {
  totalAmount: number;
  collectedAmount: number;
}) => {
  const progressPercentage = useMemo(() => {
    return (collectedAmount / totalAmount) * 100;
  }, []);
  return (
    <BackgroundProgress>
      <CurrentProgress
        progress={progressPercentage > 100 ? 100 : progressPercentage}
      >
        <ProgressMarker>{progressPercentage}%</ProgressMarker>
      </CurrentProgress>
    </BackgroundProgress>
  );
};

type CurrentProgressProps = {
  progress: number;
};

const BackgroundProgress = styled.div`
  background-color: #f9ede5;
  width: 92%;
  height: 20px;
  border-radius: 20px;
`;

const CurrentProgress = styled.div<CurrentProgressProps>`
  border-radius: 20px;
  background-color: #a3cef5;
  height: 100%;
  position: relative;
  width: ${(props) => props.progress}%;
  left: 0;
`;

const ProgressMarker = styled.div`
  background-color: #6fb0e6;
  position: absolute;
  border-radius: 50%;
  color: white;
  right: 0;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -50%;
  font-weight: 700;
  font-size: 11px;
`;

export default PresentPictures;
