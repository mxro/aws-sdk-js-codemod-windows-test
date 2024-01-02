import AWS from "aws-sdk";
const client = new AWS.DynamoDB();
const response = await client.listTables({}).promise();