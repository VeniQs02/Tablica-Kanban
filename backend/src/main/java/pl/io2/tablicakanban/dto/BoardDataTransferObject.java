package pl.io2.tablicakanban.dto;

import java.util.List;

public class BoardDataTransferObject {
    private Long id;
    private String title;
    private Long creatorId;
    private List<Long> stickyNotesId;
    private List<Long> usersId;

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

    public Long getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(Long creatorId) {
        this.creatorId = creatorId;
    }

    public List<Long> getStickyNotesId() {
        return stickyNotesId;
    }

    public void setStickyNotesId(List<Long> stickyNotesId) {
        this.stickyNotesId = stickyNotesId;
    }

    public List<Long> getUsersId() {
        return usersId;
    }

    public void setUsersId(List<Long> usersId) {
        this.usersId = usersId;
    }
}
