import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import Campaign from '#models/campaign'
import { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import CodePromo from './code_promo.js'

export default class Lead extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare username: string

  @column()
  declare nbClicked: number 

  @column({ columnName: "campaignId" })
    declare campaignId: number

  @belongsTo(()=> Campaign)
  declare campaign: BelongsTo<typeof Campaign>

  @hasOne(()=>CodePromo)
  declare codePromo: HasOne<typeof CodePromo>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}