import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

type CardComponentProps = {
    image?: string;
    title: string;
    description: string;
};

const CardComponent: React.FC<CardComponentProps> = ({
    image,
    title,
    description
}) => {
    return (
        <Card sx={{ display: 'flex', marginBottom: '1rem', padding: '1rem' }}>
            {image && (
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{ width: 100, height: 100, borderRadius: '50%' }}
                />
            )}
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2" color="textSecondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardComponent;
