import React from 'react';
import { ConfusionMatrix } from '../types/dashboard';

interface ConfusionMatrixChartProps {
  data: ConfusionMatrix;
}

const ConfusionMatrixChart: React.FC<ConfusionMatrixChartProps> = ({ data }) => {
  const matrix = [
    [data.trueNegatives, data.falsePositives],
    [data.falseNegatives, data.truePositives]
  ];

  const labels = ['Non-Target', 'Target'];
  const maxValue = Math.max(...matrix.flat());

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Confusion Matrix</h3>
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Headers */}
        <div></div>
        <div className="text-center font-medium text-sm">Predicted Non-Target</div>
        <div className="text-center font-medium text-sm">Predicted Target</div>
        
        {/* Row 1 */}
        <div className="text-right font-medium text-sm pr-2">Actual Non-Target</div>
        <div 
          className="aspect-square flex items-center justify-center rounded-lg text-white font-bold transition-all hover:scale-105"
          style={{
            backgroundColor: `rgba(34, 197, 94, ${0.3 + (matrix[0][0] / maxValue) * 0.7})`
          }}
        >
          {matrix[0][0]}
        </div>
        <div 
          className="aspect-square flex items-center justify-center rounded-lg text-white font-bold transition-all hover:scale-105"
          style={{
            backgroundColor: `rgba(239, 68, 68, ${0.3 + (matrix[0][1] / maxValue) * 0.7})`
          }}
        >
          {matrix[0][1]}
        </div>
        
        {/* Row 2 */}
        <div className="text-right font-medium text-sm pr-2">Actual Target</div>
        <div 
          className="aspect-square flex items-center justify-center rounded-lg text-white font-bold transition-all hover:scale-105"
          style={{
            backgroundColor: `rgba(239, 68, 68, ${0.3 + (matrix[1][0] / maxValue) * 0.7})`
          }}
        >
          {matrix[1][0]}
        </div>
        <div 
          className="aspect-square flex items-center justify-center rounded-lg text-white font-bold transition-all hover:scale-105"
          style={{
            backgroundColor: `rgba(34, 197, 94, ${0.3 + (matrix[1][1] / maxValue) * 0.7})`
          }}
        >
          {matrix[1][1]}
        </div>
      </div>
      <div className="flex justify-between mt-4 text-xs text-gray-600">
        <span>🟢 Correct Predictions</span>
        <span>🔴 Incorrect Predictions</span>
      </div>
    </div>
  );
};

export default ConfusionMatrixChart;