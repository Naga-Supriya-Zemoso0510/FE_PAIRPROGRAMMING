package com.demo.pairprogramming.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookDto {
   private Long id;
   @NotNull
   @Size(min=3,message="There should be minimum three characters")
   private String author;
   @NotNull(message="Name should not be null")
   private String name;
   private Long pages;
}
