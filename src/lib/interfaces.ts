export interface Hike {
    id: number;              // `SERIAL` translates to `number`
    name: string;            // `VARCHAR` maps to `string`
    date: string;            // `DATE` maps to `string` (ISO 8601 format)
    description: string | null; 
    location: string | null;    
    trail: string | null;       
    length_mi: number | null;
}

export interface Image {
    id: number;
    hike_id: number | null;
    image_path: string;
    caption: string | null;
}

// Helps dynamic route load hike images
export interface HikeWithImages extends Hike {
    images: Image[];
}

export interface LoadProps {
    hikes: Hike[] | null;
}