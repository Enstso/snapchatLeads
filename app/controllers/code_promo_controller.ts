import Campaign from '#models/campaign';
import type { HttpContext } from '@adonisjs/core/http'
import { getDataFromImport } from '../../utils/utilsBack.js';
import CodePromo from '#models/code_promo';

export default class CodePromoController {
    async index({inertia,params}: HttpContext){
        const id = params.id;
        const campaign = await Campaign.findByOrFail({id:id});
        const codePromos = campaign.codes_promo;
        return inertia.render('codes_promo/index',{code_promos:codePromos});
    }
    
    async importForm({inertia,params}:HttpContext){
        const campaignId = params.id;
        const campaignName = params.name;
        const data = {
            campaignId:campaignId,
            campaignName:campaignName
        };    
        return inertia.render('codes_promo/importCodes',data);
    }

    async import({request}:HttpContext){
        const body = request.all();
        const mime = body.mime;
        getDataFromImport();
        CodePromo.create({});
    }

    async export({params}:HttpContext){
        const id = params.id;
        const typeDocument = params.type_document; 
        const campaign =  await Campaign.findByOrFail({id:id});
        const codesPromo = campaign.codes_promo;
    }
}