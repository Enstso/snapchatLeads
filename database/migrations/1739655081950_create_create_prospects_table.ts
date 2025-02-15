import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'create_prospects'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('username').notNullable()
      table.string('snap_id').unique().notNullable()
      table.integer('nbClicked').defaultTo(1)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}