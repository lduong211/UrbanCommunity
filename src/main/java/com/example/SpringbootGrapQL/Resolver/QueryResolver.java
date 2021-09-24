package com.example.SpringbootGrapQL.Resolver;

import com.example.SpringbootGrapQL.Entities.user.Tasks;
import com.example.SpringbootGrapQL.Service.TaskService;
import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class QueryResolver implements GraphQLQueryResolver {

    private final TaskService taskService;

    public List<Tasks> getTasks() {
        return taskService.findAll();
    }

    public Tasks getTasksById(Long id) {

        return taskService.getTaskById(id);
    }

}
