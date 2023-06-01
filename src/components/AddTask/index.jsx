import React from 'react';
import styles from './index.module.css';

const AddTask = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Tarefa Criada!! :)")
    }

    return (
        <div className={styles.container}>
            <div className={styles.boderForm}>
                <h1>Lista de Tarefa</h1>
                <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Digite a tarefa' className={styles.input_style}/>
                        <input type="submit" value="Adicionar tarefa" className={styles.style__submit} />
                </form>
            </div>
        </div>
    );
}

export default AddTask;