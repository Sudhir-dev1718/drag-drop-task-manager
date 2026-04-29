package com.project.dragdrop_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.dragdrop_backend.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
