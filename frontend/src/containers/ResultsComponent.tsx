import React from 'react';
import {
    Box,
    Tabs,
    Tab,
    Button,
    CircularProgress,
    Typography
} from '@mui/material';
import Profile from '../components/Profile';
import Gists from '../components/Gists';
import Organizations from '../components/Organizations';

interface ResultsComponentProps {
    loading: boolean;
    error: string | null;
    activeTab: number;
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
    profileData: any;
    gistsData: any[];
    orgsData: any[];
    handleNewSearch: () => void;
}

const ResultsComponent: React.FC<ResultsComponentProps> = ({
    loading,
    error,
    activeTab,
    setActiveTab,
    profileData,
    gistsData,
    orgsData,
    handleNewSearch
}) => {
    const renderTabContent = () => {
        if (loading) return <CircularProgress />;
        if (error) return <Typography color="error">{error}</Typography>;

        switch (activeTab) {
            case 0:
                return <Profile data={profileData} />;
            case 1:
                return <Gists data={gistsData} />;
            case 2:
                return <Organizations data={orgsData} />;
            default:
                return null;
        }
    };

    return (
        <Box>
            <Button
                variant="outlined"
                color="secondary"
                onClick={handleNewSearch}
                sx={{ marginBottom: '1rem' }}
            >
                New Search
            </Button>
            <Tabs
                value={activeTab}
                onChange={(event, newValue) => setActiveTab(newValue)}
                centered
                variant="fullWidth"
            >
                <Tab label="Profile" />
                <Tab label="Gists" />
                <Tab label="Organizations" />
            </Tabs>
            <Box sx={{ marginTop: '2rem' }}>{renderTabContent()}</Box>
        </Box>
    );
};

export default ResultsComponent;
