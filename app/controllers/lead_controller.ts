import Campaign from '#models/campaign'
import Lead from '#models/lead'
import type { HttpContext } from '@adonisjs/core/http'

export default class LeadController {
  async index({ inertia, params }: HttpContext) {
    const id = params.id;
    const campaign = await Campaign.findByOrFail({ id: id });
    const leads = campaign.leads;
    return inertia.render('leads/index', { leads: leads });
  }

  async create({ request }: HttpContext) {
    const body = request.all();

  }

  async delete({ params,response }: HttpContext) {
    const id = params.id;
    const lead = await Lead.findByOrFail({id:id});
    await lead.delete();
    return response.safeStatus(200).json({message:"lead deleted"});
  }
}
