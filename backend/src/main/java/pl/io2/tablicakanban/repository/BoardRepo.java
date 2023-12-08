package pl.io2.tablicakanban.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.io2.tablicakanban.model.Board;
import pl.io2.tablicakanban.model.User;

import java.util.List;
import java.util.Optional;

public interface BoardRepo extends JpaRepository<Board, Long> {
    void deleteBoardById(Long id);
    Optional<Board> findBoardById(Long id);
    List<Board> findBoardsByCreator(User creator);
}
