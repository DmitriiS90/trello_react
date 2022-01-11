import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from "formik"
import { addListItem, dragListItem } from '../../store/boardList-reducer';
import { useEffect, useState } from 'react';
import styles from './Notes.module.css'

const Notes = ({ idNote, name, list }) => {
    const dispatch = useDispatch()

    const [item, setItem] = useState('')
    const [currentList, setCurrentList] = useState([])

    useEffect(() => {
        if (item) {
            dispatch(addListItem({ idNote, item }))
        }
    }, [item])

    useEffect(() => {
        if (currentList.length > 0) {
            dispatch(dragListItem( idNote, currentList ))
        }
    }, [currentList])

    function dragStartHandler(e, l) {
        setCurrentList(l)
    }

    function dragEndHandler(e) {
        e.target.style.background = 'white'
    }

    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.background = 'rgb(239, 247, 126)'

    }

    function dropHandler(e, l) {
        e.preventDefault()
        setCurrentList(list.map(li => {          
            if (li.id === l.id) {
                return { ...li, order: currentList.order }
            }
            if (li.id === currentList.id) {
                return { ...li, order: l.order }
            }
            return li
        }))
        e.target.style.background = 'white'
    }
    function sortListItem(a, b) {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }


    return (
        <div className={styles.notes}>
            <h3>Название списка: {name}</h3>

            {list.length > 0 &&
                <div>
                    {list.sort(sortListItem).map(l =>
                        <li
                            onDragStart={(e) => { dragStartHandler(e, l) }}
                            onDragLeave={(e) => { dragEndHandler(e) }}
                            onDragEnd={(e) => { dragEndHandler(e) }}
                            onDragOver={(e) => { dragOverHandler(e) }}
                            onDrop={(e) => { dropHandler(e, l) }}
                            draggable={true}
                            key={l.id}
                            className={styles.listItem}
                        >
                            {l.item}
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
