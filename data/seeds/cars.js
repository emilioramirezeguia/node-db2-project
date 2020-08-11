exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          vin: "ACKXSPHHR4U90C8TQ",
          make: "Nissan",
          model: "Rogue",
          mileage: 1000,
          transmission: null,
          title: null,
        },
        {
          id: 2,
          vin: "T3M7UBRZTDXQEE3MS",
          make: "Honda",
          model: "CRV",
          mileage: 2000,
          transmission: null,
          title: null,
        },
        {
          id: 3,
          vin: "ELFB84DNM6QQQPFLR",
          make: "Mazda",
          model: "CX-3",
          mileage: 3000,
          transmission: null,
          title: null,
        },
        {
          id: 4,
          vin: "RGMALD1DFNZMAVZIK",
          make: "Volkswagen",
          model: "Tiguan",
          mileage: 4000,
          transmission: null,
          title: null,
        },
        {
          id: 5,
          vin: "ZWAA8BCL44SZJW69Y",
          make: "Ford",
          model: "Lobo",
          mileage: 5000,
          transmission: null,
          title: null,
        },
      ]);
    });
};
