import { useHistory } from 'react-router-dom';
import styles from './SmileButton.module.css';

const SmileButton = () => {
    const history = useHistory()
    return(
        <div onClick={()=>{history.push('/')}} className={styles.smile}></div>
    )
}

export default SmileButton;