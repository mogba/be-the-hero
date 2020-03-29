// este arquivo foi criado com o comando "npx knex migrate:make create_ongs"

// método up é responsável pela criação de tabelas
exports.up = function(knex) {
  return knex.schema.createTable('ongs', (table) => {
      // criação de colunas da tabela
      table.string('id').primary();
      // chave primária string serve mais para casos de criação manual do id

      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
      // o segundo parâmetro pode ser passado para settar o tamanho da coluna
  });
};

// método up é responsável pela exclusão de tabelas
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
