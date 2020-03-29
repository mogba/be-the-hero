// este arquivo foi criado com o comando "npx knex migrate:make create_incidents"

exports.up = function(knex) {
  return knex.schema.createTable('incidents', (table) => {
    table.increments();
    // cria a coluna de chave primária que se auto incrementa

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    // coluna com o id da ong (outra entidade) que criou o caso (incident)
    table.string('ong_id').notNullable();
    // como é chave estrangeira, precisa existir na entidade de origem
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  return knex.schema.droptTable('incidents');
};
