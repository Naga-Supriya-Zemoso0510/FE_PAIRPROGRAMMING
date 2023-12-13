package com.demo.pairprogramming.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class HandleExceptions {

    @ExceptionHandler(value=BookNotFoundException.class)
    public ResponseEntity<Object> handleNotFoundException(BookNotFoundException bookNotFoundException)
    {
        BookException bookException = new BookException(bookNotFoundException.getMessage(), HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(bookException,HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(value=BookNotNullException.class)
    public ResponseEntity<Object> handleNotNullException(BookNotNullException bookNotNullException)
    {
        BookException bookException = new BookException(bookNotNullException.getMessage(), HttpStatus.NOT_IMPLEMENTED);
        return new ResponseEntity<>(bookException,HttpStatus.NOT_IMPLEMENTED);
    }
}
