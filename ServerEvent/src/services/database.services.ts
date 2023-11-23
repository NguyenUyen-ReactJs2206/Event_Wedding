import { Db, MongoClient } from 'mongodb'
import { config } from 'dotenv'
config()

console.log(process.env.DB_USERNAME)

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clusterevent.li65dq2.mongodb.net/?retryWrites=true&w=majority`

class DatabaseSevice {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }

  async connect() {
    try {
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log('Error', error)
      throw error
    }
  }
}

//Create Object from DatabaseService
const databaseService = new DatabaseSevice()
export default databaseService
