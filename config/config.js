module.exports = {
    development: {
        port: process.env.PORT || 3000,
        COOKIE_NAME: "SESSION_DATA",
        TOKEN_SECRET: "MY_SECRET",
        SALT_ROUNDS: 10
    },
    production: {}
};