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
//router.on('/').renderInertia('home')
