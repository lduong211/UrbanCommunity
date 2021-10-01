package com.example.SpringbootGrapQL.Service;

import com.example.SpringbootGrapQL.Entities.user.Task;
import com.example.SpringbootGrapQL.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    TaskRepository taskRepository;

    //Find All Task
    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    //Find One Task By Id
    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    //Find One Task By Name
    public Task getTaskByName(String task) {
        return taskRepository.getTaskByName(task);
    }

    //Insert Task
    public Task addTask(Task task) {
        Date currentUtilDate = new Date();
        task.setCreatedAt(currentUtilDate.toString());
        taskRepository.save(task);
        return task;
    }

    //Delete Task
    public String deleteTask(Long id) {
        taskRepository.deleteById(id);
        return "Task " + id + " is deleted";
    }

}
