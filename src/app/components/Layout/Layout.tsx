import {FC, ReactNode} from 'react';
import styles          from './Layout.module.css';
import Sidebar         from '../Sidebar/Sidebar';

interface IProps {
    children: ReactNode;
}


const Layout: FC<IProps> = (props) => {
    return (
        <div className={styles.layout}>
            <Sidebar/>
            <main>
                {props.children}
            </main>
        </div>
    );
};


export default Layout;