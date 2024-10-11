"use client";
import React from "react";

interface TaskItemProps {
    task: { id: number; text: string; completed: boolean };
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onRemove }) => {
    return (
        <li>
            <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => onToggle(task.id)}
            >
                {task.text}
            </span>
            <button onClick={() => onRemove(task.id)}>Remover</button>
        </li>
    );
};

export default TaskItem;
