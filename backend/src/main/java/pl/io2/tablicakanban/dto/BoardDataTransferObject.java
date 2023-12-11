package pl.io2.tablicakanban.dto;

import java.util.List;

public class BoardDataTransferObject {
    private Long id;
    private String title;
    private Long creatorId;
    private List<Long> stickyNoteIds;
    private List<Long> userIds;

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

    public List<Long> getStickyNoteIds() {
        return stickyNoteIds;
    }

    public void setStickyNoteIds(List<Long> stickyNoteIds) {
        this.stickyNoteIds = stickyNoteIds;
    }

    public List<Long> getUserIds() {
        return userIds;
    }

    public void setUserIds(List<Long> userIds) {
        this.userIds = userIds;
    }
}
