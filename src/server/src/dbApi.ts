import { getClient, db_name } from './dbClient';
const db_collection = process.env.db_collection;

export async function readNumber(): Promise<number> {
  const client = getClient();
  try {
    await client.connect();
    const database = client.db(db_name);
    if (!db_collection) {
      throw console.error('collection name is empty');
    }
    const collection = database.collection(db_collection);
    const result = await collection.findOne({});
    return result;
  } finally {
    await client.close();
  }
}

export async function replaceNumber(value: number): Promise<void> {
  const client = getClient();
  try {
    await client.connect();
    const database = client.db(db_name);
    if (!db_collection) {
      throw console.error('collection name is empty');
    }
    const collection = database.collection(db_collection);
    await collection.replaceOne({}, { number: value });
  } finally {
    await client.close();
  }
}
