package pl.io2.tablicakanban.services;

import org.springframework.stereotype.Service;
import pl.io2.tablicakanban.exceptions.BoardNotFoundException;
import pl.io2.tablicakanban.model.Board;
import pl.io2.tablicakanban.model.User;
import pl.io2.tablicakanban.repository.BoardRepo;

import java.util.List;
import java.util.Objects;

@Service
public class BoardService {
    private final BoardRepo boardRepo;

    public BoardService(BoardRepo boardRepo) {
        this.boardRepo = boardRepo;
    }

    public Board addBoard(Board board) {
        if (!validBoard(board)) {
            return null;
        }
        return boardRepo.save(board);
    }

    private boolean validBoard(Board board) {
        return Objects.isNull(findBoardById(board.getId()));
    }

    public Board updateBoard(Board board) {
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
}
