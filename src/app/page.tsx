"use client";
import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]); // Inicializa o estado de tarefas

  // Recupera tarefas do localStorage quando o componente monta
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks)); // Converte JSON em objeto e atualiza o estado
    }
  }, []); // O array vazio garante que isso só será executado uma vez

  // Atualiza o localStorage sempre que as tarefas mudarem
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); // Executa o efeito sempre que 'tasks' for atualizado

  // Função para adicionar uma nova tarefa
  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  // Função para alternar o status de uma tarefa
  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Função para remover uma tarefa
  const removeTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <AddTask onAddTask={addTask} /> {/* Corrigido para AddTask */}
      <TaskList tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
    </div>
  );
}
