package com.example.SpringbootGrapQL.Resolver;

import com.example.SpringbootGrapQL.Entities.user.Task;
import com.example.SpringbootGrapQL.Service.TaskService;
import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;

@Controller
@CrossOrigin(origins = "http://localhost:19006/")
@RequiredArgsConstructor
public class QueryResolver implements GraphQLQueryResolver {

    @Autowired
    private final TaskService taskService;

    public List<Task> getTask() {
        return taskService.findAll();
    }

    public Optional<Task> getTaskById(Long id) {
        return taskService.getTaskById(id);
    }

    public Task getTaskByName(String task) {
        return taskService.getTaskByName(task);
    }

}
