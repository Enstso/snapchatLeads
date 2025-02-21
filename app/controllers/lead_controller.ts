import Campaign from '#models/campaign'
import CodePromo from '#models/code_promo'
import Lead from '#models/lead'
import type { HttpContext } from '@adonisjs/core/http'
import { generateUniqueGuid } from '../../utils/utilsBack.js'

export default class LeadController {
  async index({ inertia, params }: HttpContext) {
    const id = params.id
    const campaign = await Campaign.findByOrFail({ id: id })
    const leads = campaign.leads
    return inertia.render('leads/index', { leads: leads })
  }

  async create({ params, request, response }: HttpContext) {
    const { campaign_id, snapchater } = params
    const url = request.url(true)
    const campaignExist = await Campaign.findByOrFail({ id: campaign_id, snapchater:snapchater });

    if (!campaignExist) {
      response.abort;
    }
    const tokenResponse = ''

    const accessToken = ''

    const leadResponse = ''
    const leadFromSnap = 'leadResponse'
    const username = 'pros..'
    const snapId = 'pros..'

    let lead = await Lead.findByOrFail({
      username: username,
      campaign_id: campaignExist.id,
    })

    if (!lead) {
      const newLead = await Lead.create({
        username: username,
        nbClicked: 1,
        campaign_id: campaignExist.id,
      });
      if (campaignExist.promo) {
        const nbCodesPromo = campaignExist.codes_promo.length
        if (nbCodesPromo < campaignExist.capping) {
          await CodePromo.create({
            code: generateUniqueGuid(),
            used: true,
            campaign_id: campaignExist.id,
            lead_id: newLead.id,
          });
        }
      }
    } else {
      lead.nbClicked += 1
      lead.save();
    }
    return response.redirect(url);
  }

  async delete({ params, response }: HttpContext) {
    const id = params.id
    const lead = await Lead.findByOrFail({ id: id })
    await lead.delete()
    return response.safeStatus(200).json({ message: 'lead deleted' })
  }
}
