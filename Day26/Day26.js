const { MongoClient } = require('mongodb');

async function calculateProductStatistics(databaseName, collectionName) {
    const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();

        const database = client.db(databaseName);
        const collection = database.collection(collectionName);

        const pipeline = [
            {
                $group: {
                    _id: null,
                    total_products: { $sum: 1 },
                    average_price: { $avg: '$price' },
                    highest_quantity: { $max: '$quantity' }
                }
            }
        ];

        const result = await collection.aggregate(pipeline).toArray();

        if (result.length > 0) {
            return result[0];
        } else {
            return null;
        }
    } finally {
        await client.close();
    }
}

// Example usage
const databaseName = 'Node-JS-Challenge';
const collectionName = 'products';

calculateProductStatistics(databaseName, collectionName)
    .then(statistics => {
        if (statistics) {
            console.log("Total number of products:", statistics.total_products);
            console.log("Average price:", statistics.average_price);
            console.log("Highest quantity:", statistics.highest_quantity);
        } else {
            console.log("No data found.");
        }
    })
    .catch(err => {
        console.error("Error:", err);
    });
