import { useState, useEffect } from 'react';
import {
    getUserData,
    getUserGists,
    getUserOrgs,
    getUserRepos
} from '../services/api';
import { ProfileModel } from '../data/models/Profile.model';
import { GistModel } from '../data/models/Gist.model';
import { OrganizationModel } from '../data/models/Organization.model';
import { RepoModel } from '../data/models/Repo.model';

export const useUserData = (username: string, data: string) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [profileData, setProfileData] = useState<ProfileModel>(null);
    const [gistsData, setGistsData] = useState<GistModel[]>([]);
    const [orgsData, setOrgsData] = useState<OrganizationModel[]>([]);
    const [reposData, setReposData] = useState<RepoModel[]>([]);

    useEffect(() => {
        if (!username) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                if (data === 'profile') {
                    const response = await getUserData(username);
                    setProfileData(response.data);
                } else if (data === 'gists') {
                    const response = await getUserGists(username);
                    setGistsData(response.data);
                } else if (data === 'organizations') {
                    const response = await getUserOrgs(username);
                    setOrgsData(response.data);
                } else if (data === 'repos') {
                    const response = await getUserRepos(username);
                    setReposData(response.data);
                }
            } catch (err: any) {
                setError(err.response?.data?.message || 'Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [username, data]);

    return { loading, error, profileData, gistsData, orgsData, reposData };
};
