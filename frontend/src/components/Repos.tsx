import React from 'react';
import CardComponent from './CardComponent';
import { ReposData } from '../data/models/Repo.model';

const Repos: React.FC<ReposData> = ({ data }) => {
    if (data.length === 0) return <p>No Repos Found</p>;

    return (
        <div>
            {data.map((repo) => (
                <CardComponent
                    key={repo.id}
                    title={repo.description || 'No Description'}
                    description={`Repo ID: ${repo.id}`}
                />
            ))}
        </div>
    );
};

export default Repos;
