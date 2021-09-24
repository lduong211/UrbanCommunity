package com.example.SpringbootGrapQL.Service;

import com.example.SpringbootGrapQL.Entities.user.Tasks;
import com.example.SpringbootGrapQL.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    TaskRepository taskRepository;

    public List<Tasks> findAll() {
        return taskRepository.findAll();
    }

    public Tasks getTaskById(Long id) {
        id.toString();
        return taskRepository.getById(id);
    }


}
