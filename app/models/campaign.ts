import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Lead from './lead.js'
import { HasMany } from '@adonisjs/lucid/types/relations'
import CodePromo from './code_promo.js'

export default class Campaign extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() 
  declare snapchater: string

  @column() 
  declare url: string | null

  @column()
  declare promo: boolean | null
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Lead)
  declare leads: HasMany<typeof Lead>

  @hasMany(()=>CodePromo)
  declare codes_promo: HasMany<typeof CodePromo>
}