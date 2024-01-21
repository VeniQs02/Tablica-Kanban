package pl.io2.tablicakanban.services;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import pl.io2.tablicakanban.dto.BoardDataTransferObject;
import pl.io2.tablicakanban.exceptions.BoardNotFoundException;
import pl.io2.tablicakanban.model.Board;
import pl.io2.tablicakanban.model.StickyNote;
import pl.io2.tablicakanban.model.User;
import pl.io2.tablicakanban.repository.BoardRepo;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class BoardService {
    private final BoardRepo boardRepo;
    private final UserService userService;
    private final StickyNoteService stickyNoteService;

    public BoardService(BoardRepo boardRepo, UserService userService, @Lazy StickyNoteService stickyNoteService) {
        this.boardRepo = boardRepo;
        this.userService = userService;
        this.stickyNoteService = stickyNoteService;
    }

    public Board addBoard(BoardDataTransferObject boardDto) {
        Board board = getBoardFromDto(boardDto);
        return boardRepo.save(board);
    }

    public Board addStickyNoteToBoardById(Long boardId, StickyNote stickyNote) {
        Board board = findBoardById(boardId);
        List<StickyNote> stickyNotes = board.getStickyNotes();
        stickyNotes.add(stickyNote);
        board.setStickyNotes(stickyNotes);
        return board;
    }

    public Board updateBoard(BoardDataTransferObject boardDto) {
        Board board = getBoardFromDto(boardDto);
        if (Objects.isNull(board)) {
            return null;
        }
        return boardRepo.save(board);
    }

    public Board findBoardById(Long id) {
        return boardRepo.findBoardById(id).orElseThrow(
                () -> new BoardNotFoundException("Board by id " + id + " was not found")
        );
    }

    public void deleteBoard(Long id) {
        boardRepo.deleteBoardById(id);
    }

    public List<Board> findBoardsByCreator(User creator) {
        return boardRepo.findBoardsByCreator(creator);
    }

    public List<BoardDataTransferObject> findAllBoards() {
        List<Board> all = boardRepo.findAll();
        List<BoardDataTransferObject> boardDtos = new ArrayList<>();
        for (Board board : all) {
            boardDtos.add(getBoardDtoFromBoard(board));
        }
        return boardDtos;
    }

    private Board getBoardFromDto(BoardDataTransferObject boardDto) {
        Board board = new Board();
        board.setId(boardDto.getId());
        board.setTitle(boardDto.getTitle());
        board.setCreator(userService.findUserById(boardDto.getCreatorId()));
        List<User> users = new ArrayList<>();
        List<Long> userIds = boardDto.getUserIds();
        for (Long userId : userIds) {
            users.add(userService.findUserById(userId));
        }
        board.setUsers(users);
        List<StickyNote> stickyNotes = new ArrayList<>();
        List<Long> stickyNotesIds = boardDto.getStickyNoteIds();
        for (Long stickyNoteId : stickyNotesIds) {
            stickyNotes.add(stickyNoteService.findStickyNoteById(stickyNoteId));
        }
        board.setStickyNotes(stickyNotes);
        return board;
    }

    public BoardDataTransferObject getBoardDtoFromBoard(Board board) {
        BoardDataTransferObject boardDto = new BoardDataTransferObject();
        boardDto.setId(board.getId());
        boardDto.setTitle(board.getTitle());
        boardDto.setCreatorId(board.getCreator().getId());
        List<Long> userIds = new ArrayList<>();
        List<User> users = board.getUsers();
        for (User user : users) {
            userIds.add(user.getId());
        }
        boardDto.setUserIds(userIds);

        List<Long> stickyNoteIds = new ArrayList<>();
        List<StickyNote> stickyNotes = board.getStickyNotes();
        for (StickyNote stickyNote : stickyNotes) {
            stickyNoteIds.add(stickyNote.getId());
        }
        boardDto.setStickyNoteIds(stickyNoteIds);
        return boardDto;
    }
}
