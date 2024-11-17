import { supabase } from "$lib/supabase";
import { type Hike, type LoadProps } from "$lib/interfaces";


export const load = async (): Promise<{ props: LoadProps }> => {
    const { data, error } = await supabase
        .from<'hikes', Hike>('hikes')
        .select("*");

    if (error) {
        console.error("Error fetching hikes:", error);
        return {
            props: {
                hikes: null,
            }
        };
    }

    return {
        props: {
            hikes: data as Hike[],
        },
    };
};
