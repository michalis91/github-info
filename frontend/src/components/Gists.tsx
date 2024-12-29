import React from 'react';
import CardComponent from './CardComponent';

type GistsProps = {
    data: Array<{
        id: string;
        description: string;
        html_url: string;
    }>;
};

const Gists: React.FC<GistsProps> = ({ data }) => {
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
