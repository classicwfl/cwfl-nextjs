import styles from './PhotoFrame.module.scss';

const PhotoFrame = () => {
    return (
        <div className={styles.photoFrameTop}>
            <div className={styles.photoFrameText}><span>SITE ART STYLE = DUMPSTER FIRE</span></div>
            <div className={styles.photoFrameTextSecondary}><a href="#">VIEW THE ORIGINAL ARTWORK</a></div>
            <div className={styles.photoFrameBottom}></div>
        </div>
    );
};

export default PhotoFrame;
