import React from 'react';
import CardComponent from './CardComponent';
import { ProfileData } from '../data/models/Profile.model';

const Profile: React.FC<ProfileData> = ({ data }) => {
    if (!data) return <p>No Profile Data. Search for a GitHub user.</p>;

    return (
        <CardComponent
            image={data.avatar_url}
            title={data.name || 'No Name'}
            description={`@${data.login} - ${data.bio || 'No Bio'}`}
        />
    );
};

export default Profile;
