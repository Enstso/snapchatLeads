import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Campaign from './campaign.js'
import { BelongsTo } from '@adonisjs/lucid/types/relations'
import Lead from './lead.js'

export default class CodePromo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare code: string

  @column()
  declare used: boolean

  @column({ columnName: "campaignId" })
  declare campaignId: number

  @column({ columnName: "leadId" })
  declare leadId:number
 
  @belongsTo(()=>Campaign)
  declare campaign: BelongsTo<typeof Campaign>

  @belongsTo(()=>Lead)
  declare lead: BelongsTo<typeof Lead>
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}