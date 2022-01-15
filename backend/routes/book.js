const { request, response } = require('express')
const express = require('express')
const router  = express.Router()
const con = require('../db')

router.get('/',(request,response)=>{
    const conn = con.openConnection()
    conn.query(`SELECT * FROM book`,(error,data)=>{
        conn.end()
        if(error){
            response.send(error)
        }else{
            response.send(data)
        }
    })
})
router.post('/',(request,response)=>{
    const{book_id,book_title,publisher_name,author_name} = request.body
    const conn = con.openConnection()
    conn.query(`INSERT INTO book(book_id,book_title,publisher_name,author_name) 
    VALUES(${book_id},'${book_title}','${publisher_name}','${author_name}');`,
    (error,data)=>{
        conn.end()
        if(error){
            response.send(error)
        }else{
            response.send(data)
        }
    })
})
router.put('/:book_id',(request,response)=>{
    const{book_id} =request.params
    const{publisher_name,author_name} = request.body
    const conn = con.openConnection()
    conn.query(`UPDATE book SET publisher_name='${publisher_name}' , author_name='${author_name}' WHERE book_id=${book_id} `,
    
    (error,data)=>{
        conn.end()
        if(error){
            response.send(error)
        }else{
            response.send(data)
        }
    })
})
router.delete('/:book_id',(request,response)=>{
    const{book_id} =request.params
    const conn = con.openConnection()
    conn.query(`DELETE FROM book WHERE book_id=${book_id};`,
    (error,data)=>{
        conn.end()
        if(error){
            response.send(error)
        }else{
            response.send(data)
        }
    })
})
module.exports=router