import React from 'react';
import { DemographicPerformance } from '../types/dashboard';
import { Users, Scale } from 'lucide-react';

interface DemographicAnalysisProps {
  data: DemographicPerformance[];
}

const DemographicAnalysis: React.FC<DemographicAnalysisProps> = ({ data }) => {
  const categories = [...new Set(data.map(d => d.category))];

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <Scale className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold">Fairness Analysis by Demographics</h3>
      </div>
      
      <div className="space-y-6">
        {categories.map(category => {
          const categoryData = data.filter(d => d.category === category);
          
          return (
            <div key={category} className="border border-gray-100 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-3 capitalize flex items-center gap-2">
                <Users className="w-4 h-4" />
                Performance by {category.replace('_', ' ')}
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-xs text-gray-500 uppercase">
                      <th className="pb-2">Group</th>
                      <th className="pb-2">Accuracy</th>
                      <th className="pb-2">Precision (Target)</th>
                      <th className="pb-2">Sample Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryData.map(item => (
                      <tr key={item.group} className="border-t border-gray-50">
                        <td className="py-2 font-medium">{item.group}</td>
                        <td className="py-2">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-20">
                              <div
                                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all"
                                style={{ width: `${item.accuracy * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium">
                              {(item.accuracy * 100).toFixed(1)}%
                            </span>
                          </div>
                        </td>
                        <td className="py-2">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-20">
                              <div
                                className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full transition-all"
                                style={{ width: `${item.precisionTarget * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium">
                              {(item.precisionTarget * 100).toFixed(1)}%
                            </span>
                          </div>
                        </td>
                        <td className="py-2 text-sm text-gray-600">{item.sampleSize}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DemographicAnalysis;