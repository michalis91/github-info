export type GistModel = {
    id: string;
    description: string;
    html_url: string;
};

export type GistsData = {
    data: GistModel[];
};
