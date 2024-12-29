import React from 'react';
import CardComponent from './CardComponent';

type ProfileProps = {
    data: {
        login: string;
        name: string;
        bio: string;
        avatar_url: string;
    } | null;
};

const Profile: React.FC<ProfileProps> = ({ data }) => {
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
