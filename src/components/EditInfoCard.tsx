import { Card, CardContent, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { InfoCardHeader } from './InfoCard';
import { useMutation, gql } from '@apollo/client';

const UPDATE_USER_BASIC_INFO = gql`
  mutation UpdateUser($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      firstName
      fatherName
      grandfatherName
      familyName
      localizedName {
        firstName
        fatherName
        grandfatherName
        familyName
      }
      nationalId {
        idNumber
        expiryDate
      }
      employmentCode
      title
      gender
      nationalities {
        country {
          id
          name
        }
        countryId
      }
      passportNumber
      passportIssueDate
      passportExpiryDate
      maritalStatus {
        id
        name
      }
      dependants
    }
  }
`;

interface SaveData {
  nationalId?: {
    idNumber: string;
    expiryDate: string;
  };
  title?: string;
  firstName?: string;
  fatherName?: string;
  grandfatherName?: string;
  familyName?: string;
  nationalities?: { countryId: number }[];
  maritalStatus?: {
    id: number;
    name: string;
  };
  dependants?: string;
  email?: string;
  phone?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  address?: string;
  drivingLicenseNumber?: string;
  drivingLicenseExpiry?: string;
  militaryStatus?: {
    name: string;
  };
}

interface EditInfoCardProps {
  title: string;
  info: { label: string; value: string }[];
  userId: number;
  onSave: (data: SaveData) => void;
}

const EditInfoCard: React.FC<EditInfoCardProps> = ({ title, info, userId, onSave }) => {
  const defaultValues = info.reduce((acc, item) => {
    acc[item.label] = item.value;
    return acc;
  }, {} as { [key: string]: string });

  const { control, handleSubmit } = useForm({ defaultValues });

  const [updateUserBasicInfo, { loading, error }] = useMutation(UPDATE_USER_BASIC_INFO);

  const onSubmit = async (data: { [key: string]: string }) => {
    try {
      const formattedData = {
        id: userId,
        input: {
          nationalId: {
            idNumber: data['National ID'] || '',
            expiryDate: data['National ID Expiry Date'] || '',
          },
          title: data['Title'],
          firstName: data['First Name'],
          fatherName: data['Father Name'],
          grandfatherName: data['Grandfather Name'],
          familyName: data['Family Name'],
          localizedName: {
            firstName: data['الاسم الاول'] || '',
            fatherName: data['اسم الاب'] || '',
            grandfatherName: data['اسم الجد'] || '',
            familyName: data['اسم العائله'] || '',
          },
          nationalities: data['Nationalities']
            ? data['Nationalities'].split(',').map(id => ({ countryId: parseInt(id, 10) }))
            : [],
          maritalStatus: {
            id: data['Marital Status ID'] ? parseInt(data['Marital Status ID'], 10) : 0,
            name: data['Marital Status Name'] || '',
          },
          dependants: data['Dependents'] || '',
          email: data['Email'],
          phone: data['Phone'],
          emergencyContactName: data['Emergency Contact Name'],
          emergencyContactPhone: data['Emergency Contact Phone'],
          address: data['Address'],
          drivingLicenseNumber: data['Driving License Number'],
          drivingLicenseExpiry: data['Driving License Expiry Date'],
          militaryStatus: data['Military Status']
            ? { name: data['Military Status'] }
            : undefined,
        },
      };
  
      await updateUserBasicInfo({
        variables: formattedData,
      });
      onSave(formattedData.input);
    } catch (e) {
      console.error('Mutation error:', e);
    }
  };
  
  return (
    <Card className="mb-4">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 flex-col">
          <InfoCardHeader buttonProps={{ type: 'submit', content: loading ? 'Saving...' : 'Save', disabled: loading }} title={title} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {info.map((item, index) => (
              <Controller
                key={index}
                name={item.label}
                control={control}
                defaultValue={defaultValues[item.label] || ''}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={item.label}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    style={{ flex: '1 1 calc(50% - 20px)' }}
                  />
                )}
              />
            ))}
          </div>
          {error && <Typography color="error">{error.message}</Typography>}
        </form>
      </CardContent>
    </Card>
  );
};

export default EditInfoCard;
