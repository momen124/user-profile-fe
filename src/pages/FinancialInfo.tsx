// src/pages/FinancialInfo.tsx
import React from 'react';
import UserLayout from '../components/Layouts/UserLayout';
import InfoCard from '../components/InfoCard';

const FinancialInfo: React.FC = () => {
  const financialInfo = [
    { label: 'Salary', value: '$100,000' },
    { label: 'Bank Account', value: '1234-5678-9012-3456' },
  ];

  return (
    <UserLayout>
      <InfoCard title="Financial Information" info={financialInfo} onEdit={() => {}} />
    </UserLayout>
  );
};

export default FinancialInfo;
