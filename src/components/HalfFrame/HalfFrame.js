import styles from './HalfFrame.module.scss';

const HalfFrame = ({children}) => {
    return (
        <div className={styles.halfFrameWrapper}>
            <div className={styles.halfFrameTop}></div>
            {children}
            <div className={styles.halfFrameBottom}></div>
        </div>
    );
};

export default HalfFrame;
