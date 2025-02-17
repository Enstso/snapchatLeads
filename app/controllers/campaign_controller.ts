import Campaign from '#models/campaign'
import type { HttpContext } from '@adonisjs/core/http'

export default class CampaignController {
    async index({inertia}:HttpContext){
        const campaigns = await Campaign.all();
        console.log(campaigns);
        return inertia.render('campaigns/index', {campaigns:campaigns});
    }

    async createForm({inertia}:HttpContext){
        return inertia.render('campaigns/create');
    }

    async create({}:HttpContext){

    }

    async updateForm({}:HttpContext){

    }

    async update({}:HttpContext){
        
    }

    async delete({}:HttpContext){
        
    }
}