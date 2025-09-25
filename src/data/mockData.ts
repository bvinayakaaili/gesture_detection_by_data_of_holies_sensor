import {
  ClassificationMetrics,
  ConfusionMatrix,
  FeatureImportance,
  PrecisionRecallPoint,
  DemographicPerformance,
  SlidingWindowPrediction,
  ModelComparison
} from '../types/dashboard';

export const mockClassificationMetrics: Record<string, ClassificationMetrics> = {
  'Non-Target': {
    accuracy: 0.89,
    precision: 0.91,
    recall: 0.94,
    f1Score: 0.92,
    support: 1247
  },
  'Target': {
    accuracy: 0.89,
    precision: 0.84,
    recall: 0.78,
    f1Score: 0.81,
    support: 423
  }
};

export const mockConfusionMatrix: ConfusionMatrix = {
  truePositives: 330,
  falsePositives: 63,
  trueNegatives: 1171,
  falseNegatives: 76
};

export const mockFeatureImportances: FeatureImportance[] = [
  { feature: 'accel_x_std', importance: 0.045, category: 'Acceleration' },
  { feature: 'gyro_z_max', importance: 0.042, category: 'Gyroscope' },
  { feature: 'accel_y_mean', importance: 0.038, category: 'Acceleration' },
  { feature: 'mag_x_std', importance: 0.035, category: 'Magnetometer' },
  { feature: 'gyro_x_std', importance: 0.033, category: 'Gyroscope' },
  { feature: 'accel_z_max', importance: 0.031, category: 'Acceleration' },
  { feature: 'mag_y_mean', importance: 0.029, category: 'Magnetometer' },
  { feature: 'gyro_y_max', importance: 0.028, category: 'Gyroscope' },
  { feature: 'accel_x_max', importance: 0.026, category: 'Acceleration' },
  { feature: 'mag_z_std', importance: 0.025, category: 'Magnetometer' },
  { feature: 'gyro_z_mean', importance: 0.024, category: 'Gyroscope' },
  { feature: 'accel_y_max', importance: 0.023, category: 'Acceleration' },
  { feature: 'mag_x_max', importance: 0.022, category: 'Magnetometer' },
  { feature: 'gyro_x_mean', importance: 0.021, category: 'Gyroscope' },
  { feature: 'accel_z_std', importance: 0.020, category: 'Acceleration' },
  { feature: 'mag_y_max', importance: 0.019, category: 'Magnetometer' },
  { feature: 'gyro_y_std', importance: 0.018, category: 'Gyroscope' },
  { feature: 'accel_x_min', importance: 0.017, category: 'Acceleration' },
  { feature: 'mag_z_mean', importance: 0.016, category: 'Magnetometer' },
  { feature: 'gyro_z_std', importance: 0.015, category: 'Gyroscope' }
];

export const mockPrecisionRecall: PrecisionRecallPoint[] = Array.from({ length: 100 }, (_, i) => {
  const threshold = i / 100;
  return {
    threshold,
    precision: Math.max(0.1, 0.95 - threshold * 0.3 + Math.random() * 0.1),
    recall: Math.max(0.1, threshold * 0.85 + Math.random() * 0.1)
  };
});

export const mockDemographicPerformance: DemographicPerformance[] = [
  { group: 'Male', category: 'sex', accuracy: 0.91, precisionTarget: 0.85, sampleSize: 890 },
  { group: 'Female', category: 'sex', accuracy: 0.87, precisionTarget: 0.82, sampleSize: 780 },
  { group: 'Right', category: 'handedness', accuracy: 0.89, precisionTarget: 0.84, sampleSize: 1420 },
  { group: 'Left', category: 'handedness', accuracy: 0.88, precisionTarget: 0.83, sampleSize: 250 },
  { group: 'Adult', category: 'adult_child', accuracy: 0.90, precisionTarget: 0.85, sampleSize: 1200 },
  { group: 'Child', category: 'adult_child', accuracy: 0.86, precisionTarget: 0.81, sampleSize: 470 }
];

export const mockSlidingWindowPredictions: SlidingWindowPrediction[] = Array.from({ length: 20 }, (_, i) => ({
  sequenceId: `seq_${String(i + 1).padStart(3, '0')}`,
  windowStart: i * 5,
  prediction: Math.random() > 0.7 ? 'Target' : 'Non-Target',
  confidence: 0.6 + Math.random() * 0.35
}));

export const mockModelComparison: ModelComparison[] = [
  { model: 'Random Forest', accuracy: 0.89, precision: 0.84, recall: 0.78, f1Score: 0.81 },
  { model: 'XGBoost', accuracy: 0.91, precision: 0.86, recall: 0.81, f1Score: 0.83 },
  { model: 'LightGBM', accuracy: 0.90, precision: 0.85, recall: 0.79, f1Score: 0.82 }
];