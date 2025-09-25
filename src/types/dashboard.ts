export interface ClassificationMetrics {
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  support: number;
}

export interface ConfusionMatrix {
  truePositives: number;
  falsePositives: number;
  trueNegatives: number;
  falseNegatives: number;
}

export interface FeatureImportance {
  feature: string;
  importance: number;
  category: string;
}

export interface PrecisionRecallPoint {
  threshold: number;
  precision: number;
  recall: number;
}

export interface DemographicPerformance {
  group: string;
  category: string;
  accuracy: number;
  precisionTarget: number;
  sampleSize: number;
}

export interface SlidingWindowPrediction {
  sequenceId: string;
  windowStart: number;
  prediction: 'Target' | 'Non-Target';
  confidence: number;
}

export interface ModelComparison {
  model: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
}