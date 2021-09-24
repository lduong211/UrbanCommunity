package com.example.SpringbootGrapQL.Resolver;

import com.example.SpringbootGrapQL.Entities.user.Tasks;
import com.example.SpringbootGrapQL.Repository.TaskRepository;
import graphql.kickstart.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class Mutation implements GraphQLMutationResolver {

    private final TaskRepository taskRepository;

//    public List<Tasks> getTasks() { return taskRepository.findAll(); }
}
