package com.demo.pairprogramming.utils.converters;

import com.demo.pairprogramming.dto.BookDto;
import com.demo.pairprogramming.entity.Book;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Converters {

    @Autowired
    public ModelMapper modelMapper;

    public BookDto entitytoDto(Book book){
        return modelMapper.map(book, BookDto.class);
    }

    public Book dtotoentity(BookDto bookDto){
        return modelMapper.map(bookDto, Book.class);
    }

}
