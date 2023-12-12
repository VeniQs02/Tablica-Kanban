package pl.io2.tablicakanban.exceptions;

public class StickyNoteNotFoundException extends RuntimeException {
    public StickyNoteNotFoundException(String message) {
        super(message);
    }
}
