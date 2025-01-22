package com.example.portfolio.controller;

import com.example.portfolio.model.Resume;
import com.example.portfolio.repository.ResumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;

@RestController
@RequestMapping("/api/resume")
public class ResumeController {

    @Autowired
    private ResumeRepository resumeRepository;

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> downloadResume(@PathVariable Long id) {
        Resume resume = resumeRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Resume not found"));

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(resume.getContentType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resume.getFilename() + "\"")
                .body(resume.getData());
    }
    @PostMapping("/upload")
    public ResponseEntity<String> uploadResume(@RequestParam("file") MultipartFile file) throws IOException {
        Resume resume = new Resume();
        resume.setFilename(file.getOriginalFilename());
        resume.setContentType(file.getContentType());
        resume.setData(file.getBytes());

        resumeRepository.save(resume);
        return ResponseEntity.ok("Resume uploaded successfully");
    }

}
