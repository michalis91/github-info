import { useState, useEffect } from 'react';
import { getUserData, getUserGists, getUserOrgs } from '../services/api';

export const useUserData = (username: string, activeTab: number) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [profileData, setProfileData] = useState<any>(null);
    const [gistsData, setGistsData] = useState<any[]>([]);
    const [orgsData, setOrgsData] = useState<any[]>([]);

    useEffect(() => {
        if (!username) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                if (activeTab === 0) {
                    const response = await getUserData(username);
                    setProfileData(response.data);
                } else if (activeTab === 1) {
                    const response = await getUserGists(username);
                    setGistsData(response.data);
                } else if (activeTab === 2) {
                    const response = await getUserOrgs(username);
                    setOrgsData(response.data);
                }
            } catch (err: any) {
                setError(err.response?.data?.message || 'Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [username, activeTab]);

    return { loading, error, profileData, gistsData, orgsData };
};
