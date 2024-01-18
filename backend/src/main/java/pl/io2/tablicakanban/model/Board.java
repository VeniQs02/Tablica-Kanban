package pl.io2.tablicakanban.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name = "boards", schema = "tablicakanban")
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(nullable = false, updatable = false, name = "id")
    private Long id;

    @Column(nullable = false)
    String title;

    @OneToOne()
    @JoinColumn(name = "creator_id", referencedColumnName = "id")
    User creator;

    @OneToMany()
    @JoinColumn(name = "stickyNotes")
    List<StickyNote> stickyNotes;

    @OneToMany()
    List<User> users;

    public Board() {
    }

    public Board(String title, User creator, List<StickyNote> stickyNotes, List<User> users) {
        this.title = title;
        this.creator = creator;
        this.stickyNotes = stickyNotes;
        this.users = users;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    public List<StickyNote> getStickyNotes() {
        return stickyNotes;
    }

    public void setStickyNotes(List<StickyNote> stickyNotes) {
        this.stickyNotes = stickyNotes;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
