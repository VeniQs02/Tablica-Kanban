package pl.io2.tablicakanban.controllers;

import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.io2.tablicakanban.dto.BoardDataTransferObject;
import pl.io2.tablicakanban.dto.StickyNoteDataTransferObject;
import pl.io2.tablicakanban.model.Board;
import pl.io2.tablicakanban.model.StickyNote;
import pl.io2.tablicakanban.services.BoardService;

import java.util.List;
import java.util.Objects;

@Transactional
@RestController
@RequestMapping("/board")
public class BoardController {
    private final BoardService boardService;

    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<BoardDataTransferObject>> getAllBoards() {
        List<BoardDataTransferObject> allBoards = boardService.findAllBoards();
        return new ResponseEntity<>(allBoards, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<BoardDataTransferObject> getBoardById(@PathVariable("id") Long id) {
        Board stickyNote = boardService.findBoardById(id);
        return new ResponseEntity<>(boardService.getBoardDtoFromBoard(stickyNote), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<BoardDataTransferObject> addBoard(@RequestBody BoardDataTransferObject boardDto) {
        Board newBoard = boardService.addBoard(boardDto);
        if (Objects.isNull(newBoard)) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(boardDto, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<BoardDataTransferObject> updateBoard(@RequestBody BoardDataTransferObject boardDto) {
        Board updatedBoard = boardService.updateBoard(boardDto);
        if (Objects.isNull(updatedBoard)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(boardDto, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> updateBoard(@PathVariable("id") Long id) {
        boardService.deleteBoard(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
