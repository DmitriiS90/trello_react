import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from "formik"
import { addListItem } from '../../store/boardList-reducer';
import { useEffect, useState } from 'react';
import styles from './Notes.module.css'

const Notes = ({ idNote, name, list }) => {
    const dispatch = useDispatch()

    const [item, setItem] = useState('')

    useEffect(() => {
        if (item) {
            dispatch(addListItem({ idNote, item }))
        }
    }, [item])

    return (
        <div className={styles.notes}>
            <h3>Название списка: {name}</h3>

            {list.length > 0 &&
                <div>
                    {list.map((l) =>
                        <li
                            onDragStart={(e) => { }}
                            onDragLeave={(e) => { }}
                            onDragEnd={(e) => { }}
                            onDragOver={(e) => { }}
                            onDrop={(e) => { }}
                            draggable={true}
                            key={l}
                            className={styles.listItem}
                        >
                            {l}
                        </li>
                    )}
                </div>}


            <Formik
                initialValues={{
                    listItem: ''
                }}
                //validationSchema={Validation}
                onSubmit={values => { setItem(values.listItem) }}>
                <Form className={styles.noteForm}>
                    <div>
                        <Field name='listItem' type="text" placeholder="Добавить элемент" />
                    </div>
                    <button type="submit">Добавить</button>
                </Form>

            </Formik>


        </div>
    )
}

export default Notes
