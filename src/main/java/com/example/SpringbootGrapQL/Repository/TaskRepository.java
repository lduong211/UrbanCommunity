package com.example.SpringbootGrapQL.Repository;

import com.example.SpringbootGrapQL.Entities.user.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Tasks, Long> {
}
