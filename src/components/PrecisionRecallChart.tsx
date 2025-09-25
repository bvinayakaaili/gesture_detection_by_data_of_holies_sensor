import React from 'react';
import { PrecisionRecallPoint } from '../types/dashboard';

interface PrecisionRecallChartProps {
  data: PrecisionRecallPoint[];
}

const PrecisionRecallChart: React.FC<PrecisionRecallChartProps> = ({ data }) => {
  const width = 400;
  const height = 300;
  const padding = 40;

  const xScale = (threshold: number) => padding + (threshold * (width - 2 * padding));
  const yScale = (value: number) => height - padding - (value * (height - 2 * padding));

  const precisionPath = data.map((d, i) => 
    `${i === 0 ? 'M' : 'L'} ${xScale(d.threshold)} ${yScale(d.precision)}`
  ).join(' ');

  const recallPath = data.map((d, i) => 
    `${i === 0 ? 'M' : 'L'} ${xScale(d.threshold)} ${yScale(d.recall)}`
  ).join(' ');

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Precision-Recall Curve</h3>
      <svg width={width} height={height} className="border border-gray-100 rounded">
        {/* Grid lines */}
        {[0, 0.2, 0.4, 0.6, 0.8, 1.0].map(value => (
          <g key={value}>
            <line
              x1={padding}
              y1={yScale(value)}
              x2={width - padding}
              y2={yScale(value)}
              stroke="#f3f4f6"
              strokeWidth={1}
            />
            <line
              x1={xScale(value)}
              y1={padding}
              x2={xScale(value)}
              y2={height - padding}
              stroke="#f3f4f6"
              strokeWidth={1}
            />
            <text
              x={padding - 5}
              y={yScale(value) + 4}
              textAnchor="end"
              className="text-xs fill-gray-500"
            >
              {value.toFixed(1)}
            </text>
            <text
              x={xScale(value)}
              y={height - padding + 15}
              textAnchor="middle"
              className="text-xs fill-gray-500"
            >
              {value.toFixed(1)}
            </text>
          </g>
        ))}
        
        {/* Axes */}
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#374151" strokeWidth={2} />
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#374151" strokeWidth={2} />
        
        {/* Precision line */}
        <path d={precisionPath} fill="none" stroke="#2563eb" strokeWidth={3} />
        
        {/* Recall line */}
        <path d={recallPath} fill="none" stroke="#10b981" strokeWidth={3} />
        
        {/* Labels */}
        <text x={width / 2} y={height - 5} textAnchor="middle" className="text-sm font-medium">
          Threshold
        </text>
        <text x={15} y={height / 2} textAnchor="middle" className="text-sm font-medium" transform={`rotate(-90 15 ${height / 2})`}>
          Score
        </text>
      </svg>
      
      <div className="flex gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-1 bg-blue-600"></div>
          <span className="text-sm">Precision</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-1 bg-emerald-600"></div>
          <span className="text-sm">Recall</span>
        </div>
      </div>
    </div>
  );
};

export default PrecisionRecallChart;