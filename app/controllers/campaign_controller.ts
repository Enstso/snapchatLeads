 import Campaign from '#models/campaign'
import type { HttpContext } from '@adonisjs/core/http'

export default class CampaignController {
    async index({inertia}:HttpContext){
        const campaigns =  Campaign.all();
        
    }
}