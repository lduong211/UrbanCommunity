package com.example.SpringbootGrapQL.Resolver;

import com.example.SpringbootGrapQL.Entities.user.Task;
import com.example.SpringbootGrapQL.Service.TaskService;
import graphql.kickstart.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:19006/")
@RequiredArgsConstructor
public class Mutation implements GraphQLMutationResolver {

    @Autowired
    private final TaskService taskService;

    //Add Task
    public Task addTask(String taskName) {
        Task task = new Task();
        task.setTask(taskName);
        return taskService.addTask(task);
    }

    //Delete Task
    public String deleteTask(Long taskId) {
        return taskService.deleteTask(taskId);
    }

}
