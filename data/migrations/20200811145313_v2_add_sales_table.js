exports.up = function (knex) {
  return knex.schema.createTable("sales", (table) => {
    table.increments("id");
    table.integer("car_id").unsigned();
    table.foreign("car_id").references("cars.id");
    table.decimal("price").notNullable();
    // created automatically
    table.timestamp("date_sold").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("sales");
};
