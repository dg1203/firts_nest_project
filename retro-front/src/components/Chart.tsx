import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const colors = [
  '247ba0',
  '52796f',
  'e63946',
  'ffbe0b',
  '293241',
  'c8553d',
  '5ca4a9',
  '143601',
  '815839',
  'ef8354',
  'ff99c8',
  '8b1e3f',
  '3c153b',
  'ffe66d',
  '8ac926',
];

interface ChartProps {
  reply: string[];
}

interface DataChart {
  name: string;
  quantity: number;
  percentage: number;
}

const Wrapper = styled.div`
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BarWrapper = styled.div`
  display: flex;
  margin-bottom: 25px;
  align-items: center;
`;

const Bar = styled.div<{ width: number; background: string }>`
  width: 100%;
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.3;
    background: #${(props) => props.background};
    width: ${(props) => props.width}%;
    height: 100%;
    transition: 0.3s;
  }
  &:hover {
    font-weight: bold;
  }
  &:hover:after {
    opacity: 0.6;
  }
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.black};
  width: 200px;
`;

const Chart: React.FC<ChartProps> = ({ reply }) => {
  const [replies, setReplies] = useState<DataChart[]>([]);
  useEffect(() => {
    const length: number = reply.length;
    const unique: string[] = [];
    const dataChart: DataChart[] = [];
    reply.forEach((rep: string) => {
      if (!unique.includes(rep)) {
        unique.push(rep);
      }
    });
    unique.forEach((uniq: string) => {
      let iterator = 0;
      reply.forEach((rep: string) => {
        if (uniq === rep) {
          iterator++;
        }
      });
      dataChart.push({
        name: uniq,
        quantity: iterator,
        percentage: (iterator / length) * 100,
      });
    });
    setReplies(dataChart);
  }, [reply]);
  return (
    <Wrapper>
      {replies.map((reply: DataChart, index: number) => {
        return (
          <BarWrapper key={index}>
            <Title>{reply.name}</Title>
            <Bar width={reply.percentage} background={colors[index]}>
              ({reply.quantity}/{reply.percentage.toFixed(0)}%)
            </Bar>
          </BarWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Chart;
