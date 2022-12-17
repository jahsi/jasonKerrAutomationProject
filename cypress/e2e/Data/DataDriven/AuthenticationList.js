module.exports = {
  weak_password: "Password is invalid",
  credentials: [
    {
      duplicate: true,
      password: "P@ssword!@",
      email: "test1@tester.com",
      weak_password: false,
      allGood: false,
    },
    {
      duplicate: false,
      password: "password",
      email: "fblacksell1@jalbum.net",
      weak_password: true,
      allGood: false,
    },
    {
      duplicate: false,
      password: "P@ssword1@",
      email: "fblacksell1@jalbum.net",
      weak_password: false,
      allGood: true,
    },

    // {
    //   duplicate: true,
    //   password: "Jan",
    //   email: "test1@tester.com",
    //   weak_password: true,
    // },
    // {
    //   duplicate: true,
    //   password: "Cassi",
    //   email: "test1@tester.com",
    //   weak_password: true,
    // },
    // {
    //   duplicate: true,
    //   password: "Iorgo",
    //   email: "idumingo5@clickbank.net",
    //   weak_password: false,
    // },
    // {
    //   duplicate: true,
    //   password: "Josephina",
    //   email: "jhapper6@google.com.br",
    //   weak_password: true,
    // },
    // {
    //   duplicate: true,
    //   password: "Shaylynn",
    //   email: "sdudgeon7@ebay.com",
    //   weak_password: true,
    // },
  ],
  wrong_info: {
    name: "lol",
    email: "lol",
    streetAddress: "LittleRoot Town",
    appSuite: "20",
    city: "London",
    province: "SOmwhere",
    postalCode: "123",
    country: "Jamaica",
  },
  email: {
    email: "qualityEmail@",
  },
};
