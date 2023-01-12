import { useState } from 'react';
import {format, formatDistanceToNow} from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';


export function Post({autor, content, publishedAt}){
    const [comments, setComments] = useState([
        'Post Muito bacana!'
    ]);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true, // Assim ele coloca o "Há" na frente da hora.
    });
   
    function handleCreateNewComment(e){
        e.preventDefault();
        setComments([...comments, newCommentText])
        setNewCommentText('')
       
    }
    
    function handleNewCommentChange(event){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

     function deleteComment(commentToDelete){
        const commentsWithouDeleteOne = comments.filter(comment=>{
            return comment !== commentToDelete;
        })
        setComments(commentsWithouDeleteOne)
    }

    function handleNewCommentInvalid(event){
        event.target.setCustomValidity("Este campo é obrigatório!")
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
         <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        hasBorder={true}
                        src={autor.avatarUrl} 
                    />
                    <div className={styles.authorInfo}>
                        <strong>{autor.name}</strong>
                        <span>{autor.role}</span>
                    </div>
                </div>
                
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>

            </header>
            <div className={styles.content}>
               {
                content.map((line)=>{
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }else if(line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })
               }
            </div>

            <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name="comment"
                    value={newCommentText}
                    placeholder='Deixe seu comentário'
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid} /*Essa propriedade é chamada, sempre que tento fazer um onSubmit mais o texto é invlaido */
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty} >Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
               {
                comments.map((comment)=>{
                    return(
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })
               }
            </div>
         </article>
    )
}