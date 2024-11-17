import { supabase } from "$lib/supabase";
import { type HikeWithImages, type Hike } from "$lib/interfaces";

export const load = async ({ params }: { params: { id: string } }): Promise<{ hike: HikeWithImages }> => {
    const id = params.id;

    const { data, error } = await supabase
        .from<'hikes', Hike>('hikes')
        .select('*, images(image_path, caption)')
        .eq('id', id)
        .single();

    if (error) {
        console.error("Error fetching hike:", error);
        throw new Error("Failed to fetch hike");
    }

    return {
        hike: data as HikeWithImages
    };
};