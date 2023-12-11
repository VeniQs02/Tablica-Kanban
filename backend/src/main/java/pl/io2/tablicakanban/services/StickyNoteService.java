package pl.io2.tablicakanban.services;

import org.springframework.stereotype.Service;
import pl.io2.tablicakanban.dto.StickyNoteDataTransferObject;
import pl.io2.tablicakanban.exceptions.StickyNoteNotFoundException;
import pl.io2.tablicakanban.model.StickyNote;
import pl.io2.tablicakanban.model.User;
import pl.io2.tablicakanban.repository.StickyNoteRepo;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class StickyNoteService {
    private final StickyNoteRepo stickyNoteRepo;
    private final UserService userService;
    private final BoardService boardService;

    public StickyNoteService(StickyNoteRepo stickyNoteRepo, UserService userService, BoardService boardService) {
        this.stickyNoteRepo = stickyNoteRepo;
        this.userService = userService;
        this.boardService = boardService;
    }

    public StickyNote addStickyNote(StickyNoteDataTransferObject stickyNoteDto) {
        StickyNote stickyNote = getStickyNoteFromDto(stickyNoteDto);
        if (Objects.isNull(stickyNote)) {
            return null;
        }
        return stickyNoteRepo.save(stickyNote);
    }

    public StickyNote getStickyNoteFromDto(StickyNoteDataTransferObject stickyNoteDto) {
        StickyNote stickyNote = new StickyNote();
        stickyNote.setId(stickyNoteDto.getId());
        stickyNote.setColumnId(stickyNoteDto.getColumnId());
        stickyNote.setAssignedUser(userService.findUserById(stickyNoteDto.getAssignedUserId()));
        stickyNote.setCreator(userService.findUserById(stickyNoteDto.getCreatorId()));
        stickyNote.setBoard(boardService.findBoardById(stickyNoteDto.getBoardId()));
        stickyNote.setTitle(stickyNoteDto.getTitle());
        stickyNote.setDescription(stickyNoteDto.getDescription());
        stickyNote.setCompleted(stickyNoteDto.isCompleted());
        return stickyNote;
    }

    public StickyNoteDataTransferObject getStickyNoteDtoFromStickyNote(StickyNote stickyNote) {
        StickyNoteDataTransferObject stickyNoteDto = new StickyNoteDataTransferObject();

        if (Objects.isNull(stickyNote.getCreator())) {
            stickyNoteDto.setCreatorId(null);
        } else {
            stickyNoteDto.setCreatorId(stickyNote.getCreator().getId());
        }

        if (Objects.isNull(stickyNote.getBoard())) {
            stickyNoteDto.setBoardId(null);
        } else {
            stickyNoteDto.setBoardId(stickyNote.getBoard().getId());
        }

        if (Objects.isNull(stickyNote.getAssignedUser())) {
            stickyNoteDto.setAssignedUserId(null);
        } else {
            stickyNoteDto.setAssignedUserId(stickyNote.getAssignedUser().getId());
        }

        stickyNoteDto.setColumnId(stickyNote.getColumnId());
        stickyNoteDto.setTitle(stickyNote.getTitle());
        stickyNoteDto.setId(stickyNote.getId());
        stickyNoteDto.setDescription(stickyNote.getDescription());
        stickyNoteDto.setCompleted(stickyNoteDto.isCompleted());
        return stickyNoteDto;
    }

    public StickyNote updateStickyNote(StickyNoteDataTransferObject stickyNoteDto) {
        StickyNote stickyNote = getStickyNoteFromDto(stickyNoteDto);
        if (Objects.isNull(stickyNote)) {
            return null;
        }
        return stickyNoteRepo.save(stickyNote);
    }

    public StickyNote findStickyNoteById(Long id) {
        return stickyNoteRepo.findStickyNoteById(id).orElseThrow(
                () -> new StickyNoteNotFoundException("StickyNote by id " + id + " was not found")
        );
    }

    public void deleteStickyNote(Long id) {
        stickyNoteRepo.deleteStickyNoteById(id);
    }

    public List<StickyNote> findStickyNotesByAssignedUser(User assignedUser) {
        return stickyNoteRepo.findStickyNotesByAssignedUser(assignedUser);
    }

    public List<StickyNote> findStickyNotesByCreator(User creator) {
        return stickyNoteRepo.findStickyNotesByCreator(creator);
    }

    public List<StickyNoteDataTransferObject> findAllStickyNotes() {
        List<StickyNote> all = stickyNoteRepo.findAll();
        List<StickyNoteDataTransferObject> stickyNoteDtos = new ArrayList<>();
        for (StickyNote stickyNote : all) {
            stickyNoteDtos.add(getStickyNoteDtoFromStickyNote(stickyNote));
        }
        return stickyNoteDtos;
    }
}
