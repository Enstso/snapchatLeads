import Campaign from '#models/campaign'
import { campaignValidator } from '#validators/campaign';
import type { HttpContext } from '@adonisjs/core/http'


export default class CampaignController {
    async index({inertia}:HttpContext){
        const campaigns = await Campaign.all();
        return inertia.render('campaigns/index', {campaigns:campaigns});
    }

    async createForm({inertia}:HttpContext){
        return inertia.render('campaigns/create');
    }

    async create({request,response}:HttpContext){
        const body = request.all();
        const campaignDto = await campaignValidator.validate(body);
        await Campaign.create({
            snapchater:campaignDto.snapchater,
            url:campaignDto.url,
            promo:campaignDto.promo
        });
        response.safeStatus(201);
    }

    async updateForm({params,inertia}:HttpContext){
        const id:number  = params.id;
        const campaign = await Campaign.findByOrFail({id:id});
        console.log(campaign);
        return inertia.render('campaigns/update',{props:campaign});
    }

    async update({params,request,response}:HttpContext){
        const id = params.id;
        const body = request.all();
        const campaignDto = await campaignValidator.validate(body);
        const campaign = await Campaign.findByOrFail({id:id});
        campaign.snapchater =  campaignDto.snapchater;
        campaign.url =  campaignDto.url;
        campaign.promo = campaign.promo;
        campaign.save();
        return response.safeStatus(200).json({message:"campaign updated"});
    }

    async delete({params,response}:HttpContext){
        const id = params.id;
        const campaign = await Campaign.findByOrFail({id:id});
        await campaign.delete();
        return response.safeStatus(200).json({message:"campaign deleted"});
    }
}