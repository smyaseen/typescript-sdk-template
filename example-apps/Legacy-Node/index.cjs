const sdk = require("../../dist/index.cjs");

sdk.default.fetchUsers().then((users) => console.log(users));
