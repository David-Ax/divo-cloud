import {FC}   from 'react';
import styles from './Sidebar.module.css';

interface IProps {
}


const Sidebar: FC<IProps> = (props) => {
    return (
        <div className={styles.sidebar}>
        </div>
    );
};


export default Sidebar;