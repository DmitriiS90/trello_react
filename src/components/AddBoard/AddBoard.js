import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBoard } from '../../store/boardList-reducer';
import styles from './AddBoard.module.css';

const AddBoard = () => {
    const dispatch = useDispatch()
    const boards = useSelector((state) => { return state.boardList.boards })
    const [form, setForm] = useState(false)

    console.log(boards)
    const addNewBoard = (values) => {
        dispatch(addBoard({ id: Date.now(), name: values.name, notes: [] }))
    }

    return (
        <div className={styles.main} onClick={()=>{setForm(true)}}>
            <h1>Новая доска</h1>
            {form &&
                <Formik
                    initialValues={{
                        name: ''
                    }}
                    //validationSchema={Validation}
                    onSubmit={values => { addNewBoard(values) }}>
                    <Form>

                        <div>
                            <div className={styles.input}>
                                <Field name='name' type="text" placeholder="Название доски" />
                            </div>
                        </div>

                        <div className={styles.buttons}>
                            <button type="submit">Сохранить</button>
                        </div>
                    </Form>
                </Formik>}
        </div>
    )
}

export default AddBoard;
