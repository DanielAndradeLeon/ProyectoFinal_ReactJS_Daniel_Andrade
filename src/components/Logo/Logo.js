import styles from './Logo.module.css';
import logotipo from '../../logo.svg'

const Logo = () => {
    return (
        <img className={styles.Logo} src={logotipo} alt="logo" />
    )
}

export default Logo