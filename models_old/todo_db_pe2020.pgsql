CREATE DATABASE todo_db_pe2020;

CREATE TABLE tasks(
  id serial PRIMARY KEY,
  value text NOT NULL CHECK (value !~ '^\s.$'),
  is_done BOOLEAN NOT NULL,
  deadline timestamp NOT NULL CHECK (deadline >=CURRENT_TIMESTAMP),
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp DEFAULT NULL
)