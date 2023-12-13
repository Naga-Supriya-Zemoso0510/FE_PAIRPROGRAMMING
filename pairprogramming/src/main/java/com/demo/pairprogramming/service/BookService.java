package com.demo.pairprogramming.service;

import com.demo.pairprogramming.dto.BookDto;
import org.springframework.stereotype.Service;

import java.util.List;

public interface BookService {
    String createBook(BookDto book);
   BookDto fetchBooksById(Long id);
}
