import React from 'react';
import CardComponent from './CardComponent';
import { OrganizationsData } from '../data/models/Organization.model';

const Organizations: React.FC<OrganizationsData> = ({ data }) => {
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
