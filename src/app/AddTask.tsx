"use client";
import { useState } from "react";

interface AddTaskProps {
    onAddTask: (task: string) => void; // Corrigido o tipo da função
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => { // Corrigido para 'onAddTask' com letra minúscula
    const [task, setTask] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Evita o recarregamento da página
        if (task.trim()) { // Verifica se a tarefa não está vazia
            onAddTask(task); // Adiciona a tarefa
            setTask(''); // Reseta o campo de entrada
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Adicionar novar tarefa"
            />
            <button type="submit">Adiconar</button>
        </form>
    );
};

export default AddTask;