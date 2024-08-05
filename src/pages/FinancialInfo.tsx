import React from 'react';
import UserLayout from '../components/Layouts/UserLayout';
import InfoCard from '../components/InfoCard';

const FinancialInfo: React.FC = () => {
  const financialInfo = [
    { label: 'Bank Name', value: 'CIB' },
    { label: 'IBAN', value: '12346546413216446' },
  ];

  return (
    <UserLayout>
      <InfoCard title="Bank Information" info={financialInfo} onEdit={() => {}} />
    </UserLayout>
  );
};

export default FinancialInfo;
