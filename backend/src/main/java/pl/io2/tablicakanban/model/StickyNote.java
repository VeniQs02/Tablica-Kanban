package pl.io2.tablicakanban.model;

import jakarta.persistence.*;

@Entity
@Table(name = "stickyNotes", schema = "tablicakanban")
public class StickyNote {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(nullable = false, updatable = false, name = "id")
    private long id;

    @Column(nullable = false)
    private int columnId;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "assignedUser")
    private User assignedUser;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "creator")
    private User creator;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "board")
    private Board board;

    @Column(nullable = false)
    private String title;

    @Column()
    private String description;

    @Column(nullable = false)
    private boolean completed;

    public StickyNote() {
    }

    public StickyNote(int columnId, User assignedUser, User creator, String title, String description, boolean completed) {
        this.columnId = columnId;
        this.assignedUser = assignedUser;
        this.creator = creator;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getColumnId() {
        return columnId;
    }

    public void setColumnId(int columnId) {
        this.columnId = columnId;
    }

    public User getAssignedUser() {
        return assignedUser;
    }

    public void setAssignedUser(User assignedUser) {
        this.assignedUser = assignedUser;
    }

    public User getCreator() {
        return creator;
    }

    public void setCreator(User createdBy) {
        this.creator = createdBy;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public Board getBoard() {
        return board;
    }

    public void setBoard(Board board) {
        this.board = board;
    }
}
