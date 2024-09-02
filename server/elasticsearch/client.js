const { Client } = require('@elastic/elasticsearch');
const config = require('config');

const elasticConfig = config.get('elastic');

const client = new Client({
    node: elasticConfig.node,
    auth: {
        // username: elasticConfig.username,
        // password: elasticConfig.password,
        apiKey: elasticConfig.apiKey,
    },
});

client.ping()
    .then(response => console.log("You are connected to Elasticsearch!"))
    .catch(error => console.error("Elasticsearch is not connected."))

module.exports = client; 