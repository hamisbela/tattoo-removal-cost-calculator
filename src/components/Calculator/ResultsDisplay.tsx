import React from 'react';
import { DollarSign, Percent, Clock, TrendingUp, BarChart } from 'lucide-react';

interface ResultsDisplayProps {
  npv: number;
  pi: number;
  paybackPeriod: number;
  irr: number;
}

export default function ResultsDisplay({ 
  npv,
  pi,
  paybackPeriod,
  irr
}: ResultsDisplayProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const metrics = [
    {
      icon: DollarSign,
      title: "Net Present Value",
      value: formatCurrency(npv),
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Profitability Index",
      value: pi.toFixed(2),
      color: "text-green-600"
    },
    {
      icon: Clock,
      title: "Payback Period",
      value: `${paybackPeriod.toFixed(2)} years`,
      color: "text-purple-600"
    },
    {
      icon: BarChart,
      title: "Internal Rate of Return",
      value: `${irr.toFixed(2)}%`,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <metric.icon className={`h-5 w-5 ${metric.color}`} />
            <h3 className="text-sm font-medium text-gray-700">{metric.title}</h3>
          </div>
          <p className={`text-xl font-bold ${metric.color}`}>{metric.value}</p>
        </div>
      ))}
    </div>
  );
}