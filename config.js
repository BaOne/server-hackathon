var config = {}

config.host = process.env.HOST || "https://team18-axasafe.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "UkNBAemuQOBpQPc6sP90vQq4Bg7OxhwmmxRVjWZJHzuHnMQu6JmK6TVTsYQpdQnyza5BahkiH8OVsbqTWPcEcw==";
config.databaseId = "List";
config.collectionId = "Items";

module.exports = config;