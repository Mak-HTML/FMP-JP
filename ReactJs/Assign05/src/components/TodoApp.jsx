// src/components/TodoApp.jsx
import React, { useState } from 'react'
import { Button, Form, ListGroup, Row, Col, InputGroup } from 'react-bootstrap'

function TodoApp() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  // Create or Update Task
  const handleAddTask = () => {
    if (!task.trim()) return

    if (editIndex === null) {
      setTasks([...tasks, task])
    } else {
      const updatedTasks = [...tasks]
      updatedTasks[editIndex] = task
      setTasks(updatedTasks)
      setEditIndex(null)
    }

    setTask('')
  }

  // Edit Task
  const handleEdit = (index) => {
    setTask(tasks[index])
    setEditIndex(index)
  }

  // Delete Task
  const handleDelete = (index) => {
    const filtered = tasks.filter((_, i) => i !== index)
    setTasks(filtered)
    if (editIndex === index) {
      setTask('')
      setEditIndex(null)
    }
  }

  return (
    <div className="card shadow p-4">
      <Form.Group className="mb-3">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button variant={editIndex !== null ? 'warning' : 'primary'} onClick={handleAddTask}>
            {editIndex !== null ? 'Update' : 'Add'}
          </Button>
        </InputGroup>
      </Form.Group>

      <ListGroup>
        {tasks.length === 0 && <ListGroup.Item>No tasks added.</ListGroup.Item>}
        {tasks.map((t, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <span>{t}</span>
            <div>
              <Button variant="success" size="sm" className="me-2" onClick={() => handleEdit(index)}>
                Edit
              </Button>
              <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default TodoApp
