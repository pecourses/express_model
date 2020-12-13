class Task {
  static async create(values) {
    const { value, isDone, deadline } = values;

    const { rows: [createdTask] } = await Task.client.query(`
    INSERT INTO tasks(value, is_done, deadline)
    VALUES ('${value}', ${isDone}, '${new Date(deadline).toISOString()}')
    RETURNING value, is_done, deadline`);

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
    SELECT id, value, is_done, deadline 
    FROM tasks`);

    return rows;
  }
  // static async update(id,values) {
  //     const {value, isDone, deadline} = req
  //     const {rows:[updatedTask]} = await Task.client.query(`
  //     `)
  //     return updatedTa

  //  }

  static async update(id, values) {
    const { rows } = await Task.client.query(`
        UPDATE tasks 
        SET 
        ${values.value ? "value = '" + values.value + "'" : ""}
        ${values.isDone && values.value ? ',' : ''}
        ${values.isDone ? "is_done = '" + values.isDone + "'" : ""}
        ${values.deadline && values.isDone && values.value ? ',' : ''}
        ${values.deadline ? "deadline = '" + values.deadline + "'" : ""} 
        WHERE id=${id}
        RETURNING *
        `)
    return rows;
  }

  static async delete(id) {
    const {
      rows: [deletedTask],
    } = await Task.client.query(`
    DELETE FROM tasks
    WHERE id = ${id}
    RETURNING id, value, is_done, deadline`);

    return deletedTask;
  }
}

module.exports = Task;