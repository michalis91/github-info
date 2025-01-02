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
import Repos from '../components/Repos';
import { ProfileModel } from '../data/models/Profile.model';
import { GistModel } from '../data/models/Gist.model';
import { OrganizationModel } from '../data/models/Organization.model';
import { RepoModel } from '../data/models/Repo.model';

interface ResultsComponentProps {
    loading: boolean;
    error: string | null;
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    profileData: ProfileModel;
    gistsData: GistModel[];
    orgsData: OrganizationModel[];
    reposData: RepoModel[];
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
    reposData,
    handleNewSearch
}) => {
    const renderTabContent = () => {
        if (loading) return <CircularProgress />;
        if (error) return <Typography color="error">{error}</Typography>;

        switch (activeTab) {
            case 'profile':
                return <Profile data={profileData} />;
            case 'gists':
                return <Gists data={gistsData} />;
            case 'organizations':
                return <Organizations data={orgsData} />;
            case 'repos':
                return <Repos data={reposData} />;
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
                <Tab label="Profile" value="profile" />
                <Tab label="Repos" value="repos" />
                <Tab label="Gists" value="gists" />
                <Tab label="Organizations" value="organizations" />
            </Tabs>
            <Box sx={{ marginTop: '2rem' }}>{renderTabContent()}</Box>
        </Box>
    );
};

export default ResultsComponent;
