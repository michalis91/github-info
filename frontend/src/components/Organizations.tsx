import React from 'react';
import CardComponent from './CardComponent';

type OrganizationsProps = {
    data: Array<{
        login: string;
        avatar_url: string;
    }>;
};

const Organizations: React.FC<OrganizationsProps> = ({ data }) => {
    if (data.length === 0) return <p>No Organizations Found</p>;

    return (
        <div>
            {data.map((org) => (
                <CardComponent
                    key={org.login}
                    image={org.avatar_url}
                    title={org.login}
                    description="Organization"
                />
            ))}
        </div>
    );
};

export default Organizations;
