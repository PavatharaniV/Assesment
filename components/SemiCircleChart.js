import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const SemiCircleChart = ({ data, size, strokeWidth }) => {
  const radius = size / 2 - strokeWidth / 2;
  const center = size / 2;

  const total = data.reduce((sum, item) => sum + item.count, 0);
  let startAngle = -Math.PI / 2; 

  const createArcPath = (startAngle, endAngle) => {
    const x1 = center + radius * Math.cos(startAngle);
    const y1 = center + radius * Math.sin(startAngle);
    const x2 = center + radius * Math.cos(endAngle);
    const y2 = center + radius * Math.sin(endAngle);

    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: size,
        width: size,
      }}
    >
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {data.map((item) => {
          const endAngle = startAngle + (item.count / total) * Math.PI;
          const path = createArcPath(startAngle, endAngle);

          startAngle = endAngle;

          return (
            <Path
              key={item.name}
              d={path}
              fill="none"
              stroke={item.color} 
              strokeWidth={strokeWidth}
              transform={`rotate(-90 ${center} ${center})`}
            />
          );
        })}
      </Svg>
    </View>
  );
};

export default SemiCircleChart;
