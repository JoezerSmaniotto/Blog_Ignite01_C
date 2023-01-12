import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/42808798?v=4" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Joezer Smaniotto</strong>
                            <time title="12 de Janeiro de 2023 08:12" dateTime="2023-01-12 08:12">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏 </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir  <span>20</span>
                    </button>
                </footer>
            </div>
        
        </div>
    )   
}