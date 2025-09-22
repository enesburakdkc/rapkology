export interface Post {
    _id: string;
    user_id: string;
    type: string;
    attributes: {
        trends: boolean;
        category: string[];
        tags: string[];
        authors: string[];
        title: string;
        slug: string;
        content: string;
        seo: {
            metaTitle: string;
            canonicalURL: string;
            metaDescription: string;
        };
        desc: string;
        img: string;
    };
    lang: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}