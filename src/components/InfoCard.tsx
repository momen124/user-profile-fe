import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const InfoCard: React.FC<{ title: string; info: { label: string; value: string }[]; onEdit: () => void }> = ({ title, info, onEdit }) => {
  return (
    <Card className="mb-6">
      <CardContent>
        <Typography variant="h5" component="div" className="mb-4">
          {title}
        </Typography>
        <div className="space-y-2">
          {info.map((item, index) => (
            <div key={index} className="flex justify-between">
              <Typography variant="body2" color="textSecondary" className="mr-2">
                {item.label}:
              </Typography>
              <Typography variant="body2">{item.value}</Typography>
            </div>
          ))}
        </div>
        <Button variant="contained" color="primary" onClick={onEdit}>
          Edit
        </Button>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
