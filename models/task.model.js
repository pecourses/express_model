class Task{
  static async create(values){
    const {value, isDone, deadline} = values;

    const {rows: [createdTask]} =  await Task.client.query(`INSERT INTO tasks(value, is_done, deadline)
    VALUES ('${value}', ${isDone}, '${new Date(deadline).toISOString()}') RETURNING value, is_done, deadline`);

    return createdTask;
  }
  static async findById(id) {
    const { rows: [foundTask] } = await Task.client.query(`
    SELECT value, is_done, deadline 
    FROM tasks 
    WHERE id=${id}`);

    return foundTask;
  }
  static async findAll() {
    const { rows } = await Task.client.query(`
    SELECT value, is_done, deadline 
    FROM tasks`);

    return rows;
   }
  static update(id,values) { }
  static delete(id) { }
}

module.exports = Task;