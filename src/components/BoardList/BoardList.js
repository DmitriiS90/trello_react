import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setIdBoard } from '../../store/boardList-reducer';
import styles from './BoardList.module.css';

const BoardList = () => {
    const dispatch = useDispatch()
    const boards = useSelector((state) => { return state.boardList.boards })
    const history = useHistory()

    const openBoard = (id) => {
        dispatch(setIdBoard(id))
        history.push("/myboard")
    }
    return (
        <div className={styles.list}>
            {!boards.length &&
                <p className={styles.center}>У вас нет новых досок</p>
            }

            {boards.length > 0 &&
                <div>
                    {boards.map(b =>
                        <div className={styles.listBoards} key={b.id} onClick={() => { openBoard(b.id) }}>
                            <p>{b.name}</p>
                        </div>)}
                </div>}
        </div>
    )
}

export default BoardList;