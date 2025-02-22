/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CampaignController from '#controllers/campaign_controller'
import CodePromoController from '#controllers/code_promo_controller';
import LeadController from '#controllers/lead_controller';
import router from '@adonisjs/core/services/router'

router.get('/',[CampaignController,'index']);
    
router.group(()=>{
    router.get('/',[CampaignController,'index']);
    router.get('/create',[CampaignController,'createForm']);
    router.post('/create',[CampaignController,'create']);
    router.get('/update/:id',[CampaignController,'updateForm']);
    router.put('/update/:id',[CampaignController,'update']);
    router.delete('/delete/:id',[CampaignController,'delete']);    
}).prefix('/campaigns');

router.group(()=>{
    router.get('/:id',[LeadController,'index']);
    router.post('/callback',[LeadController,'callback']);
    router.delete('/:id',[LeadController,'delete']);
}).prefix('/leads')

router.group(()=>{
    router.get('/:id',[CodePromoController,'index']);
    router.get('/import/:id/:name',[CodePromoController,'importForm']);
    router.post('/import',[CodePromoController,'import']);
    router.post('/export',[CodePromoController,'export'])
}).prefix('/codesPromo')
