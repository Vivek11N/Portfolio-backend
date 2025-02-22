package com.example.portfolio;

import com.example.portfolio.model.Project;
import com.example.portfolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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
            @RequestParam("details") String details,
            @RequestParam("image") MultipartFile image) throws IOException {

        // Convert image file to byte array
        byte[] imageBytes = image.getBytes();

        // Save the project with the image byte array and details
        Project project = new Project(title, description, imageBytes, details);
        projectRepository.save(project);

        return ResponseEntity.ok("Project added successfully!");
    }

    @GetMapping
    public ResponseEntity<?> getAllProjects() {
        return ResponseEntity.ok(projectRepository.findAll());
    }

    @GetMapping("/{id}/image")
    public ResponseEntity<byte[]> getImage(@PathVariable Long id) {
        Project project = projectRepository.findById(id).orElse(null);

        if (project == null || project.getImage() == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok()
                .header("Content-Type", "image/jpeg")
                .body(project.getImage());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProjectDetails(@PathVariable Long id) {
        Project project = projectRepository.findById(id).orElse(null);

        if (project == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(project);
    }
}
