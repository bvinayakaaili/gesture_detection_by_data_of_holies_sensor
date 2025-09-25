import React, { useState, useEffect } from 'react';
import { SlidingWindowPrediction } from '../types/dashboard';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface SlidingWindowSimulationProps {
  data: SlidingWindowPrediction[];
}

const SlidingWindowSimulation: React.FC<SlidingWindowSimulationProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && currentIndex < data.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (currentIndex >= data.length - 1) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentIndex, data.length]);

  const togglePlayback = () => {
    if (currentIndex >= data.length - 1) {
      setCurrentIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  const reset = () => {
    setCurrentIndex(0);
    setIsPlaying(false);
  };

  const currentPrediction = data[currentIndex];
  const visiblePredictions = data.slice(Math.max(0, currentIndex - 4), currentIndex + 1);

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Real-Time Sliding Window Simulation</h3>
      
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={togglePlayback}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
        <div className="text-sm text-gray-600">
          Window {currentIndex + 1} of {data.length}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-3">Current Prediction</h4>
          <div className="p-4 border-2 border-blue-200 rounded-lg bg-blue-50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Sequence ID:</span>
              <span className="font-medium">{currentPrediction.sequenceId}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Prediction:</span>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                currentPrediction.prediction === 'Target' 
                  ? 'bg-red-100 text-red-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                {currentPrediction.prediction}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Confidence:</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${currentPrediction.confidence * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium">
                  {(currentPrediction.confidence * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Recent Predictions</h4>
          <div className="space-y-2">
            {visiblePredictions.reverse().map((pred, index) => (
              <div
                key={pred.sequenceId}
                className={`p-3 rounded-lg border transition-all ${
                  index === 0 
                    ? 'border-blue-300 bg-blue-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{pred.sequenceId}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    pred.prediction === 'Target' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {pred.prediction}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${((currentIndex + 1) / data.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SlidingWindowSimulation;