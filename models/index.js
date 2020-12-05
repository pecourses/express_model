const {Client} = require('pg');

const Task = require('./task.model');

const db_config={
  database:'todo_db_pe2020',
  user:'postgres',
  password:'admin',
  host:'127.0.0.1',
  port:5432
}

const client = new Client(db_config);

Task.client = client;

client.connect(()=>{console.log('Connected to PostgreSQL');});

process.on('beforeExit', ()=>{client.end();})

module.exports = Task;
