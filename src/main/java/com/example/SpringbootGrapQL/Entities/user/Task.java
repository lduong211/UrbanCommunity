package com.example.SpringbootGrapQL.Entities.user;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@Table(name = "m_task")
@NoArgsConstructor
@AllArgsConstructor
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id", updatable = false)
    private Long taskId;

    @Column(name = "task")
    private String task;

    @Column(name = "created_at")
    private String createdAt;

}
