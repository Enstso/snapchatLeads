import Campaign from '#models/campaign'
import CodePromo from '#models/code_promo'
import Lead from '#models/lead'
import type { HttpContext } from '@adonisjs/core/http'
import { generateUniqueGuid } from '../../utils/utilsBack.js'

export default class LeadController {
  async index({ inertia, params }: HttpContext) {
    const id = params.id;
    const campaign = await Campaign.findByOrFail({ id: id });
    console.log(campaign);
    const leads = await Lead.findManyBy({campaignId:campaign.id})
    return inertia.render('leads/index', { leads: leads });
  }

  async callback({ request, response }: HttpContext) {
    const body = request.all();
    const { campaign_id, snapchater } = body;
    const url = request.url(true);
    const campaignExist = await Campaign.findByOrFail({ id: campaign_id, snapchater:snapchater });

    if (!campaignExist) {
      response.abort;
    }
    const tokenResponse = '';
    const accessToken = '';
    const leadResponse = '';
    const leadFromSnap = 'leadResponse';
    const username = 'pros..';
    const snapId = 'pros..';

    let lead = await Lead.findByOrFail({
      username: username,
      campaign_id: campaignExist.id,
    });

    if (!lead) {
      const newLead = await Lead.create({
        username: username,
        nbClicked: 1,
        campaignId: campaignExist.id,
      });
      if (campaignExist.promo) {
        const nbCodesPromo = campaignExist.codes_promo.length
        if (nbCodesPromo < campaignExist.capping) {
          await CodePromo.create({
            code: generateUniqueGuid(),
            used: true,
            campaignId: campaignExist.id,
            leadId: newLead.id,
          });
        }
      }
    } else {
      lead.nbClicked += 1;
      lead.save();
    }
    return response.redirect(url);
  }

  async export({params}:HttpContext) {
    const campaignId = params.id;
    const campaigns = await Campaign.findByOrFail({id:campaignId});
    
  }

  async delete({ params, response }: HttpContext) {
    const id = params.id;
    const lead = await Lead.findByOrFail({ id: id });
    await lead.delete();
    return response.safeStatus(200).json({ message: 'lead deleted' });
  }
}
