package pl.io2.tablicakanban.model;

import org.springframework.data.annotation.Id;

public class Karteczka {
    @Id
    long id;
    int columnId;
    User assignedUser;
    User createdBy;
    String title;
    String description;
    boolean completed;

    public Karteczka(int columnId, User assignedUser, User createdBy, String title, String description, boolean completed) {
        this.columnId = columnId;
        this.assignedUser = assignedUser;
        this.createdBy = createdBy;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }

    public int getColumnId() {
        return columnId;
    }

    public User getAssignedUser() {
        return assignedUser;
    }

    public User getCreatedBy() {
        return createdBy;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public boolean isCompleted() {
        return completed;
    }
}
