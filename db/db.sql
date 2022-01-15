CREATE TABLE book(
    book_id integer(3) primary key,
    book_title varchar(30),
    publisher_name varchar(30),
    author_name varchar(30)
);
INSERT INTO book(book_id,book_title,publisher_name,author_name) VALUES(1,'What','Tejal','Tara');