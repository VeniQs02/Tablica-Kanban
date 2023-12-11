package pl.io2.tablicakanban.controllers;

import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.io2.tablicakanban.dto.StickyNoteDataTransferObject;
import pl.io2.tablicakanban.model.StickyNote;
import pl.io2.tablicakanban.services.StickyNoteService;

import java.util.List;
import java.util.Objects;

@Transactional
@RestController
@RequestMapping("/stickyNote")
public class StickyNoteController {
    private final StickyNoteService stickyNoteService;

    public StickyNoteController(StickyNoteService stickyNoteService) {
        this.stickyNoteService = stickyNoteService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<StickyNoteDataTransferObject>> getAllStickyNotes() {
        List<StickyNoteDataTransferObject> allStickyNotes = stickyNoteService.findAllStickyNotes();
        return new ResponseEntity<>(allStickyNotes, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<StickyNoteDataTransferObject> getStickyNoteById(@PathVariable("id") Long id) {
        StickyNote stickyNote = stickyNoteService.findStickyNoteById(id);
        return new ResponseEntity<>(stickyNoteService.getStickyNoteDtoFromStickyNote(stickyNote), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<StickyNoteDataTransferObject> addStickyNote(@RequestBody StickyNoteDataTransferObject stickyNoteDto) {
        StickyNote newStickyNote = stickyNoteService.addStickyNote(stickyNoteDto);
        if (Objects.isNull(newStickyNote)) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(stickyNoteDto, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<StickyNoteDataTransferObject> updateStickyNote(@RequestBody StickyNoteDataTransferObject stickyNoteDto) {
        StickyNote updatedStickyNote = stickyNoteService.updateStickyNote(stickyNoteDto);
        if (Objects.isNull(updatedStickyNote)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(stickyNoteDto, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> updateStickyNote(@PathVariable("id") Long id) {
        stickyNoteService.deleteStickyNote(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
