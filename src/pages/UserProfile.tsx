import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import UserLayout from '../components/Layouts/UserLayout';
import InfoCard from '../components/InfoCard';
import EditInfoCard from '../components/EditInfoCard';
import { GET_USER_BASIC_INFO } from '../graphql/queries';
import { UPDATE_USER_BASIC_INFO } from '../graphql/mutations';

interface Country {
  id: number;
  name: string;
}

interface Nationality {
  country: Country;
  countryId: number;
}

interface MaritalStatus {
  name: string;
}

interface User {
  id: number;
  nationalId: { idNumber: string };
  employmentCode: string;
  title: string;
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
  gender: string;
  nationalities: Nationality[];
  passportNumber: string;
  maritalStatus: MaritalStatus;
  dependants: string;
  email: string;
  phone: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  address: string;
  drivingLicenseNumber: string;
  drivingLicenseExpiry: string;
  militaryStatus: { name: string };
}

const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState<{ [key: string]: boolean }>({
    basicInfo: false,
    contactInfo: false,
    emergencyContacts: false,
    addressDetails: false,
    drivingLicenseDetails: false,
    militaryStatus: false,
  });

  const { data, loading, error } = useQuery<{ user: User }>(GET_USER_BASIC_INFO, {
    variables: { id: 1 }, // Use actual user ID or context
  });

  const [updateUserBasicInfo] = useMutation(UPDATE_USER_BASIC_INFO);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  const handleEdit = (section: string) => {
    setIsEditing(prev => ({ ...prev, [section]: true }));
  };

  const handleSave = async (section: string, updatedData: { [key: string]: any }) => {
    try {
      await updateUserBasicInfo({
        variables: { id: 1, input: updatedData },
      });
      setIsEditing(prev => ({ ...prev, [section]: false }));
    } catch (err) {
      console.error('Error saving data:', err);
      setErrorMessage('Failed to save data. Please try again.');
    }
  };

  const formatField = (field: any) => {
    if (typeof field === 'object' && field !== null) {
      return JSON.stringify(field);
    }
    return field || 'N/A';
  };

  const basicInfo = [
    { label: 'National ID', value: formatField(data?.user.nationalId?.idNumber) },
    { label: 'Employment Code', value: formatField(data?.user.employmentCode) },
    { label: 'Title', value: formatField(data?.user.title) },
    { label: 'First Name', value: formatField(data?.user.firstName) },
    { label: 'Father Name', value: formatField(data?.user.fatherName) },
    { label: 'Grandfather Name', value: formatField(data?.user.grandfatherName) },
    { label: 'Family Name', value: formatField(data?.user.familyName) },
    { label: 'Gender', value: formatField(data?.user.gender) },
    { label: 'Nationality', value: formatField(data?.user.nationalities?.map(n => n.country?.name).join(', ')) },
    { label: 'Passport Number', value: formatField(data?.user.passportNumber) },
    { label: 'Marital Status', value: formatField(data?.user.maritalStatus?.name) },
    { label: 'Dependents', value: formatField(data?.user.dependants) },
  ];

  const contactInfo = [
    { label: 'Email', value: formatField(data?.user.email) },
    { label: 'Phone', value: formatField(data?.user.phone) },
  ];

  const emergencyContacts = [
    { label: 'Emergency Contact Name', value: formatField(data?.user.emergencyContactName) },
    { label: 'Emergency Contact Phone', value: formatField(data?.user.emergencyContactPhone) },
  ];

  const addressDetails = [
    { label: 'Address', value: formatField(data?.user.address) },
  ];

  const drivingLicenseDetails = [
    { label: 'Driving License Number', value: formatField(data?.user.drivingLicenseNumber) },
    { label: 'Driving License Expiry', value: formatField(data?.user.drivingLicenseExpiry) },
  ];

  const militaryStatus = [
    { label: 'Military Status', value: formatField(data?.user.militaryStatus?.name) },
  ];

  return (
    <UserLayout>
      <div className="space-y-6">
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        
        {isEditing.basicInfo ? (
          <EditInfoCard
            title="Basic Information"
            userId={data?.user.id || 1}
            info={basicInfo}
            onSave={(data) => handleSave('basicInfo', data)}
          />
        ) : (
          <InfoCard
            title="Basic Information"
            info={basicInfo}
            onEdit={() => handleEdit('basicInfo')}
          />
        )}

        {isEditing.contactInfo ? (
          <EditInfoCard
            title="Contact Information"
            userId={data?.user.id || 1}
            info={contactInfo}
            onSave={(data) => handleSave('contactInfo', data)}
          />
        ) : (
          <InfoCard
            title="Contact Information"
            info={contactInfo}
            onEdit={() => handleEdit('contactInfo')}
          />
        )}

        {isEditing.emergencyContacts ? (
          <EditInfoCard
            title="Emergency Contacts"
            userId={data?.user.id || 1}
            info={emergencyContacts}
            onSave={(data) => handleSave('emergencyContacts', data)}
          />
        ) : (
          <InfoCard
            title="Emergency Contacts"
            info={emergencyContacts}
            onEdit={() => handleEdit('emergencyContacts')}
          />
        )}

        {isEditing.addressDetails ? (
          <EditInfoCard
            title="Address Details"
            userId={data?.user.id || 1}
            info={addressDetails}
            onSave={(data) => handleSave('addressDetails', data)}
          />
        ) : (
          <InfoCard
            title="Address Details"
            info={addressDetails}
            onEdit={() => handleEdit('addressDetails')}
          />
        )}

        {isEditing.drivingLicenseDetails ? (
          <EditInfoCard
            title="Driving License Details"
            userId={data?.user.id || 1}
            info={drivingLicenseDetails}
            onSave={(data) => handleSave('drivingLicenseDetails', data)}
          />
        ) : (
          <InfoCard
            title="Driving License Details"
            info={drivingLicenseDetails}
            onEdit={() => handleEdit('drivingLicenseDetails')}
          />
        )}

        {isEditing.militaryStatus ? (
          <EditInfoCard
            title="Military Status"
            userId={data?.user.id || 1}
            info={militaryStatus}
            onSave={(data) => handleSave('militaryStatus', data)}
          />
        ) : (
          <InfoCard
            title="Military Status"
            info={militaryStatus}
            onEdit={() => handleEdit('militaryStatus')}
          />
        )}
      </div>
    </UserLayout>
  );
};

export default UserProfile;
