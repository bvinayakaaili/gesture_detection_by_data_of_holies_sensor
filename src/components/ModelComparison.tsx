import React from 'react';
import { ModelComparison as ModelComparisonType } from '../types/dashboard';
import { Award, TrendingUp } from 'lucide-react';

interface ModelComparisonProps {
  data: ModelComparisonType[];
}

const ModelComparison: React.FC<ModelComparisonProps> = ({ data }) => {
  const metrics = ['accuracy', 'precision', 'recall', 'f1Score'] as const;
  const metricLabels = {
    accuracy: 'Accuracy',
    precision: 'Precision',
    recall: 'Recall',
    f1Score: 'F1-Score'
  };

  const bestModel = data.reduce((best, current) => 
    current.f1Score > best.f1Score ? current : best
  );

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-emerald-600" />
        <h3 className="text-lg font-semibold">Model Performance Comparison</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-yellow-500" />
            Best Performing Model
          </h4>
          <div className="p-4 border-2 border-emerald-200 rounded-lg bg-emerald-50">
            <div className="text-lg font-bold text-emerald-800 mb-2">
              {bestModel.model}
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>F1-Score: <strong>{(bestModel.f1Score * 100).toFixed(1)}%</strong></div>
              <div>Accuracy: <strong>{(bestModel.accuracy * 100).toFixed(1)}%</strong></div>
              <div>Precision: <strong>{(bestModel.precision * 100).toFixed(1)}%</strong></div>
              <div>Recall: <strong>{(bestModel.recall * 100).toFixed(1)}%</strong></div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Performance Metrics</h4>
          <div className="space-y-3">
            {metrics.map(metric => (
              <div key={metric}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{metricLabels[metric]}</span>
                </div>
                <div className="space-y-1">
                  {data.map(model => (
                    <div key={model.model} className="flex items-center gap-2">
                      <div className="w-16 text-xs truncate">{model.model}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            model.model === bestModel.model && metric === 'f1Score'
                              ? 'bg-gradient-to-r from-emerald-500 to-emerald-600'
                              : 'bg-gradient-to-r from-blue-500 to-blue-600'
                          }`}
                          style={{ width: `${model[metric] * 100}%` }}
                        ></div>
                      </div>
                      <div className="w-12 text-xs text-right">
                        {(model[metric] * 100).toFixed(1)}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelComparison;