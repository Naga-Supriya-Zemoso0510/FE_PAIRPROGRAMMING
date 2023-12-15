package com.demo.pairprogramming.controller;

import com.demo.pairprogramming.dto.BookDto;
import com.demo.pairprogramming.exception.BookNotFoundException;
import com.demo.pairprogramming.exception.BookNotNullException;
import com.demo.pairprogramming.service.BookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import static com.demo.pairprogramming.utils.constants.Constants.API_URL;
import static com.demo.pairprogramming.utils.constants.Constants.BOOK_ID;

@RestController
@RequestMapping(API_URL)
public class BookController {
    @Autowired
   private BookServiceImpl bookService;
    @PostMapping
    public String createNewBook(@Validated @RequestBody BookDto bookDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()){
            StringBuilder errorMessage = new StringBuilder("The Messages:");
            for(FieldError error: bindingResult.getFieldErrors()){
                errorMessage.append(error.getDefaultMessage());
            }
            throw new BookNotNullException(errorMessage.toString());
        }
        else{
            return bookService.createBook(bookDto);
        }
    }

    @GetMapping(BOOK_ID)
    public BookDto fetchBookById(@PathVariable Long id) {
        return bookService.fetchBooksById(id);
    }
}
