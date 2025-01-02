export type RepoModel = {
    id: string;
    description: string;
    html_url: string;
};

export type ReposData = {
    data: RepoModel[];
};
