import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchComponent from '../components/SearchComponent';
import ResultsComponent from '../containers/ResultsComponent';
import { useUserData } from '../hooks/useUserData';

const SearchPage: React.FC = () => {
    const [view, setView] = useState<'search' | 'results'>('search');
    const [activeTab, setActiveTab] = useState(0);
    const [inputUsername, setInputUsername] = useState('');
    const [username, setUsername] = useState('');

    const { loading, error, profileData, gistsData, orgsData } = useUserData(
        username,
        activeTab
    );

    const handleSearch = () => {
        if (inputUsername.trim() === '') return;
        setUsername(inputUsername.trim());
        setView('results');
    };

    const handleNewSearch = () => {
        setView('search');
        setInputUsername('');
        setUsername('');
        setActiveTab(0);
    };

    return (
        <Box sx={{ width: '80%', margin: 'auto', marginTop: '2rem' }}>
            {view === 'search' ? (
                <SearchComponent
                    inputUsername={inputUsername}
                    setInputUsername={setInputUsername}
                    handleSearch={handleSearch}
                />
            ) : (
                <ResultsComponent
                    loading={loading}
                    error={error}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    profileData={profileData}
                    gistsData={gistsData}
                    orgsData={orgsData}
                    handleNewSearch={handleNewSearch}
                />
            )}
        </Box>
    );
};

export default SearchPage;
