import styles from './PostList.module.scss';

const PostList = ({ children }) => {
    return <div className={styles.postListWrapper}>{children}</div>;
};

export default PostList;
