import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'codes_promo'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('code').notNullable().unique()
      table.boolean('used').notNullable().defaultTo(0)
      table.integer('campaign_id').unsigned().references('id').inTable('campaigns').onDelete('CASCADE')
      table.integer('lead_id').unsigned().unique().references('id').inTable('leads').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}