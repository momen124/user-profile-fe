import React from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { UPDATE_USER_BASIC_INFO } from '../graphql/mutations';

interface EditInfoCardProps {
  title: string;
  info: { label: string; value: string }[];
  userId: number;
  onSave: (data: { [key: string]: string }) => void;
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
      await updateUserBasicInfo({
        variables: {
          id: userId,
          input: {
            ...data,
            nationalities: data.nationalities
              ? data.nationalities.split(',').map((id) => ({ countryId: parseInt(id) }))
              : [],
            maritalStatus: {
              id: parseInt(data.maritalStatusId)
            }
          },
        },
      });
      onSave(data);
    } catch (e) {
      console.error('Mutation error:', e);
    }
  };

  return (
    <Card className="mb-4">
      <CardContent>
        <Typography variant="h5" component="div" className="mb-4">
          {title}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <Button type="submit" variant="contained" color="primary" disabled={loading}>
            {loading ? 'Saving...' : 'Save'}
          </Button>
          {error && <Typography color="error">{error.message}</Typography>}
        </form>
      </CardContent>
    </Card>
  );
};

export default EditInfoCard;
