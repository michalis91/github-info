export type ProfileModel = {
    login: string;
    name: string;
    bio: string;
    avatar_url: string;
};

export type ProfileData = {
    data: ProfileModel | null;
};
