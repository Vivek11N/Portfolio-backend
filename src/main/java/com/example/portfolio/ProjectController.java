package com.example.portfolio;

import com.example.portfolio.model.Project;
import com.example.portfolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;


    @PostMapping
    public ResponseEntity<?> addProject(
            @RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam("image") MultipartFile image) throws IOException {


        byte[] imageBytes = image.getBytes();


        Project project = new Project(title, description, imageBytes);
        projectRepository.save(project);

        return ResponseEntity.ok("Project added successfully!");
    }

    // Get all projects
    @GetMapping
    public ResponseEntity<?> getAllProjects() {
        return ResponseEntity.ok(projectRepository.findAll());
    }

    // Get image for a specific project
    @GetMapping("/{id}/image")
    public ResponseEntity<byte[]> getImage(@PathVariable Long id) {
        Project project = projectRepository.findById(id).orElse(null);

        if (project == null || project.getImage() == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().header("Content-Type", "image/jpeg").body(project.getImage());
    }

    // Delete a project by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable Long id) {
        if (projectRepository.existsById(id)) {
            projectRepository.deleteById(id);
            return ResponseEntity.ok("Project deleted successfully!");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
