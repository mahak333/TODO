package com.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.todo.model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
    // Custom query methods (if needed) can be defined here
}