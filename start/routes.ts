/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CampaignController from '#controllers/campaign_controller'
import router from '@adonisjs/core/services/router'

router.get('/',[CampaignController,'index']);
router.get('/campaigns',[CampaignController,'index']);
router.get('/campaigns/create',[CampaignController,'createForm']);
router.post('/campaigns/create',[CampaignController,'create']);
router.get('/campaigns/update/:id',[CampaignController,'updateForm']);
router.put('/campaigns/update/:id',[CampaignController,'update']);
router.delete('/campaigns/delete/:id',[CampaignController,'delete']);
