import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change?: number;
  icon?: React.ReactNode;
  color?: 'blue' | 'green' | 'purple' | 'amber';
}

const colorClasses = {
  blue: 'bg-blue-50 border-blue-200 text-blue-700',
  green: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  purple: 'bg-purple-50 border-purple-200 text-purple-700',
  amber: 'bg-amber-50 border-amber-200 text-amber-700'
};

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon, color = 'blue' }) => {
  return (
    <div className={`p-6 rounded-lg border-2 transition-all hover:shadow-md ${colorClasses[color]}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-75">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {change !== undefined && (
            <div className="flex items-center mt-2">
              {change > 0 ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              <span className="text-sm font-medium">
                {change > 0 ? '+' : ''}{change.toFixed(1)}%
              </span>
            </div>
          )}
        </div>
        {icon && <div className="opacity-75">{icon}</div>}
      </div>
    </div>
  );
};

export default MetricCard;