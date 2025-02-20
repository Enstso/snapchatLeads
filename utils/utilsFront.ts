import axios from "axios";


export const urlsCampaign = {
    create:'/campaigns/create',
    update:'/campaigns/update/',
    delete:'/campaigns/delete/'
}

export async function onCreate(url:string,data:any): Promise<void> {
    return await axios.post(url,data);
}

export async function onUpdate(url:string,data:any): Promise<any> {
    return await axios.put(url,data);
}

export async function onDelete(url:string): Promise<any> {
    return await axios.delete(url);
}

