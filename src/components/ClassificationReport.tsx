import React from 'react';
import { ClassificationMetrics } from '../types/dashboard';
import { Target, Shield } from 'lucide-react';

interface ClassificationReportProps {
  metrics: Record<string, ClassificationMetrics>;
}

const ClassificationReport: React.FC<ClassificationReportProps> = ({ metrics }) => {
  const metricNames = {
    precision: 'Precision',
    recall: 'Recall',
    f1Score: 'F1-Score',
    support: 'Support'
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Classification Report</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 font-medium">Class</th>
              {Object.entries(metricNames).map(([key, label]) => (
                <th key={key} className="text-center py-2 font-medium">{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(metrics).map(([className, classMetrics]) => (
              <tr key={className} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-3 font-medium flex items-center gap-2">
                  {className === 'Target' ? (
                    <Target className="w-4 h-4 text-red-600" />
                  ) : (
                    <Shield className="w-4 h-4 text-green-600" />
                  )}
                  {className}
                </td>
                <td className="py-3 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                        style={{ width: `${classMetrics.precision * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">
                      {(classMetrics.precision * 100).toFixed(1)}%
                    </span>
                  </div>
                </td>
                <td className="py-3 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full"
                        style={{ width: `${classMetrics.recall * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">
                      {(classMetrics.recall * 100).toFixed(1)}%
                    </span>
                  </div>
                </td>
                <td className="py-3 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                        style={{ width: `${classMetrics.f1Score * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">
                      {(classMetrics.f1Score * 100).toFixed(1)}%
                    </span>
                  </div>
                </td>
                <td className="py-3 text-center text-sm font-medium">
                  {classMetrics.support}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassificationReport;