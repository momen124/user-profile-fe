import { Button, ButtonProps, Card, CardContent, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

export const InfoCardHeader = ({ title, buttonProps: { content, ...buttonProps } }: { title: string, buttonProps: ButtonProps & { content: ReactNode } }) => {
  return (
    <div className='flex w-full justify-between'>
      <Typography variant="h5" component="div" className="mb-4">
        {title}
      </Typography>
      <Button variant="contained" color="primary" className='w-fit' {...buttonProps}>
        {content}
      </Button>
    </div>
  );
}

const InfoCard: React.FC<{ title: string; info: { label: string; value: string }[]; onEdit: () => void }> = ({ title, info, onEdit }) => {
  return (
    <Card className="!rounded-md !shadow-md">
      <CardContent className='flex flex-col'>
        <InfoCardHeader
          buttonProps={{
            onClick: onEdit,
            content: "Edit"
          }}
          title={title}
        />
        <div className='flex flex-wrap gap-4'>
          {info.map(({ label, value }, index) => (
            <div key={index} className='flex flex-col w-1/2 md:w-1/4'>
              <Typography variant="body1" color="text.primary">
                {label}:
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {value}
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
