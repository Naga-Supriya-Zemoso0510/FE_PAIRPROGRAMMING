package com.demo.pairprogramming.service;

import com.demo.pairprogramming.dto.BookDto;
import com.demo.pairprogramming.entity.Book;
import com.demo.pairprogramming.exception.BookNotFoundException;
import com.demo.pairprogramming.repository.BookRepository;
import com.demo.pairprogramming.utils.converters.Converters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.demo.pairprogramming.utils.constants.Constants.CREATED_STATUS;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private Converters converters;
    @Override
    public String createBook(BookDto book) {
        Book newBook = converters.dtotoentity(book);
        bookRepository.save(newBook);
        return CREATED_STATUS;
    }

    @Override
    public BookDto fetchBooksById(Long id) {
        Book newBook=bookRepository.findById(id).orElseThrow(()->new BookNotFoundException(id.toString()));
        return converters.entitytoDto((newBook));
    }

}
