import React from 'react';
import { Hand, Brain, BarChart3, Users, Clock, Award } from 'lucide-react';
import MetricCard from './components/MetricCard';
import ClassificationReport from './components/ClassificationReport';
import ConfusionMatrixChart from './components/ConfusionMatrixChart';
import FeatureImportanceChart from './components/FeatureImportanceChart';
import PrecisionRecallChart from './components/PrecisionRecallChart';
import DemographicAnalysis from './components/DemographicAnalysis';
import SlidingWindowSimulation from './components/SlidingWindowSimulation';
import ModelComparison from './components/ModelComparison';
import {
  mockClassificationMetrics,
  mockConfusionMatrix,
  mockFeatureImportances,
  mockPrecisionRecall,
  mockDemographicPerformance,
  mockSlidingWindowPredictions,
  mockModelComparison
} from './data/mockData';

function App() {
  const overallAccuracy = 0.89;
  const targetPrecision = mockClassificationMetrics['Target'].precision;
  const totalSamples = mockClassificationMetrics['Target'].support + mockClassificationMetrics['Non-Target'].support;
  const avgF1Score = (mockClassificationMetrics['Target'].f1Score + mockClassificationMetrics['Non-Target'].f1Score) / 2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                <Hand className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Gesture Classification Dashboard</h1>
                <p className="text-sm text-gray-500">Techfest Innovation Challenge | SDG 3 & SDG 10</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Model Active
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Key Metrics */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Overall Accuracy"
              value={`${(overallAccuracy * 100).toFixed(1)}%`}
              change={2.3}
              icon={<BarChart3 className="w-6 h-6" />}
              color="blue"
            />
            <MetricCard
              title="Target Precision"
              value={`${(targetPrecision * 100).toFixed(1)}%`}
              change={1.7}
              icon={<Brain className="w-6 h-6" />}
              color="green"
            />
            <MetricCard
              title="Total Samples"
              value={totalSamples.toLocaleString()}
              icon={<Users className="w-6 h-6" />}
              color="purple"
            />
            <MetricCard
              title="Average F1-Score"
              value={`${(avgF1Score * 100).toFixed(1)}%`}
              change={0.8}
              icon={<Award className="w-6 h-6" />}
              color="amber"
            />
          </div>
        </section>

        {/* Classification Results */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Classification Analysis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ClassificationReport metrics={mockClassificationMetrics} />
            <ConfusionMatrixChart data={mockConfusionMatrix} />
          </div>
        </section>

        {/* Feature Analysis */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Feature Analysis</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <FeatureImportanceChart data={mockFeatureImportances} />
            <PrecisionRecallChart data={mockPrecisionRecall} />
          </div>
        </section>

        {/* Model Comparison */}
        <section>
          <ModelComparison data={mockModelComparison} />
        </section>

        {/* Fairness Analysis */}
        <section>
          <DemographicAnalysis data={mockDemographicPerformance} />
        </section>

        {/* Real-Time Simulation */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Real-Time Analysis</h2>
          </div>
          <SlidingWindowSimulation data={mockSlidingWindowPredictions} />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-500">
            <p className="flex items-center justify-center gap-2">
              Crafted with <span className="text-red-500">❤️</span> for Techfest Innovation Challenge
            </p>
            <p className="text-sm mt-2">
              Advanced Gesture Recognition System | Machine Learning Dashboard
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;