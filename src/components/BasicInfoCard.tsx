import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_BASIC_INFO } from '../graphql/queries';
import { Button, Card, CardContent, Typography } from '@mui/material';

interface BasicInfoCardProps {
  onEdit: () => void;
}

const BasicInfoCard: React.FC<BasicInfoCardProps> = ({ onEdit }) => {
  const { data, loading, error } = useQuery(GET_USER_BASIC_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.user;

  return (
    <Card className="mb-4">
      <CardContent>
        <Typography variant="h5" component="div" className="mb-4">
          Basic Information
        </Typography>
        <div className="flex flex-wrap gap-4">
          <Typography variant="body2" color="text.secondary">
            National ID: {user.nationalId.idNumber}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Employment Code: {user.employmentCode}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Title: {user.title}
          </Typography>
        </div>
        <Button variant="contained" onClick={onEdit} className="mt-4">
          Edit
        </Button>
      </CardContent>
    </Card>
  );
};

export default BasicInfoCard;
