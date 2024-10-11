"use client";
import React from "react";
import TaskItem from "./TaskItem";

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskItemProps {
    tasks: Task[];
    onToggle: (id:number)=> void;
    onRemove: (id:number)=> void;
}

const TaskList: React.FC<TaskItemProps> = ({tasks, onToggle, onRemove}) =>  (
    <ul>
        {tasks.map((tasks) => (
            <TaskItem key={tasks.id} task={tasks} onToggle = {onToggle} onRemove={onRemove}/>
        ))}
    </ul>
);

export default TaskList;