package pl.io2.tablicakanban.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.io2.tablicakanban.model.StickyNote;
import pl.io2.tablicakanban.model.User;

import java.util.List;
import java.util.Optional;

public interface StickyNoteRepo extends JpaRepository<StickyNote, Long> {
    void deleteStickyNoteById(Long id);

    Optional<StickyNote> findStickyNoteById(Long id);

    List<StickyNote> findStickyNotesByAssignedUser(User assignedUser);
    List<StickyNote> findStickyNotesByCreator(User creator);
}
