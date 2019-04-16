const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB.DocumentClient()


exports.writeToDynamoDB = async (params, tableName) => {
    const dynamoPutParams = {
        TableName: tableName,
        Item: params
    }
    try {
        const result = await dynamodb.put(dynamoPutParams).promise();
    } catch (e) {
        console.error('Error', e, JSON.stringify(e), JSON.stringify(dynamoPutParams))
    }
}

exports.getFromDynamoDB = async (identifier, tableName) => {
    const dynamoListParams = {
        TableName: tableName,
        KeyConditionExpression: identifier
    }

    try {
        const result = await dynamodb.query(dynamoListParams).promise()
        return result.Items
    } catch (e) {
        console.error('Error', e, JSON.stringify(e), JSON.stringify(dynamoListParams))
    }
}

exports.deleteFromDynamoDB = async (key, tableName) => {
    var deleteParams = {
        TableName: tableName,
        Key: key
    };

    try {
        const result = await dynamodb.delete(deleteParams).promise()
        return result
    } catch (e) {
        console.error('Error', e, JSON.stringify(e), JSON.stringify(deleteParams))
    }
}