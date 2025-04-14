import {FC}   from 'react';
import styles from './ImageItem.module.css';

interface IProps {
}


const ImageItem: FC<IProps> = (props) => {
    return (
        <div className={styles.page}>
            <h1>ImageItem</h1>
        </div>
    );
};


export default ImageItem;