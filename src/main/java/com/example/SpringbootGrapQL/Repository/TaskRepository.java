package com.example.SpringbootGrapQL.Repository;

import com.example.SpringbootGrapQL.Entities.user.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    @Query(value = "SELECT * FROM m_task WHERE task = ?1", nativeQuery = true)
    Task getTaskByName(String task);

    @Query(value = "SELECT * FROM m_task WHERE task_id = ?1", nativeQuery = true)
    Task getTaskById(Long id);

}
