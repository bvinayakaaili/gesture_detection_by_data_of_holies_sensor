import React from 'react';
import { FeatureImportance } from '../types/dashboard';

interface FeatureImportanceChartProps {
  data: FeatureImportance[];
  maxFeatures?: number;
}

const categoryColors = {
  'Acceleration': '#3b82f6',
  'Gyroscope': '#10b981',
  'Magnetometer': '#8b5cf6'
};

const FeatureImportanceChart: React.FC<FeatureImportanceChartProps> = ({ 
  data, 
  maxFeatures = 15 
}) => {
  const topFeatures = data.slice(0, maxFeatures);
  const maxImportance = Math.max(...topFeatures.map(f => f.importance));

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Top Feature Importances</h3>
      <div className="space-y-3">
        {topFeatures.map((feature, index) => (
          <div key={feature.feature} className="flex items-center gap-3">
            <div className="w-32 text-sm font-medium truncate" title={feature.feature}>
              {feature.feature}
            </div>
            <div className="flex-1 relative">
              <div 
                className="h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                style={{
                  backgroundColor: categoryColors[feature.category as keyof typeof categoryColors],
                  width: `${(feature.importance / maxImportance) * 100}%`,
                  minWidth: '60px'
                }}
              >
                <span className="text-white text-xs font-bold">
                  {(feature.importance * 100).toFixed(1)}%
                </span>
              </div>
            </div>
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: categoryColors[feature.category as keyof typeof categoryColors] }}
              title={feature.category}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-4 text-xs">
        {Object.entries(categoryColors).map(([category, color]) => (
          <div key={category} className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
            <span>{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureImportanceChart;