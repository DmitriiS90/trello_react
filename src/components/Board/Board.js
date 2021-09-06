import styles from './Board.module.css';
import { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addNotes } from '../../store/boardList-reducer';
import Notes from '../Notes/Notes';



const Board = () => {

    const dispatch = useDispatch()
    const boards = useSelector((state) => { return state.boardList.boards })
    const idBoard = useSelector((state) => { return state.boardList.idBoard })

    const currentBoard = boards.find(b => b.id === idBoard)

    const [note, setNote] = useState()

    useEffect(() => {
        if (note) {
            dispatch(addNotes({ id: Date.now(), name: note.notesName, list: [] }))
        }
    }, [note])

    return (
        <div className={styles.board}>
            <h1>{!currentBoard ? "Название доски" : "Название доски: " + currentBoard.name}</h1>

            <div className={styles.boardForm}>
                <Formik
                    initialValues={{
                        notesName: ''
                    }}
                    onSubmit={values => { setNote(values) }}>
                    <Form>
                        <h3>Создать новый список</h3>
                        <div>
                            <Field name='notesName' type="text" placeholder="Название списка" />
                        </div>
                        <button type="submit">Добавить список</button>
                    </Form>
                </Formik>
            </div>

            {currentBoard.notes.length > 0 &&
                currentBoard.notes.map(n => <Notes key={n.id} idNote={n.id} name={n.name} list={n.list} />)
            }

        </div>
    )
}

export default Board;