import React from 'react';
import CardComponent from './CardComponent';
import { GistsData } from '../data/models/Gist.model';

const Gists: React.FC<GistsData> = ({ data }) => {
    if (data.length === 0) return <p>No Gists Found</p>;

    return (
        <div>
            {data.map((gist) => (
                <CardComponent
                    key={gist.id}
                    title={gist.description || 'No Description'}
                    description={`Gist ID: ${gist.id}`}
                />
            ))}
        </div>
    );
};

export default Gists;
