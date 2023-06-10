import Link from 'next/link';

import { categoryPathBySlug } from 'lib/categories';
import { authorPathByName } from 'lib/users';
import { formatDate } from 'lib/datetime';
import ClassName from 'models/classname';

import { FaMapPin } from 'react-icons/fa';
import styles from './Metadata.module.scss';

const DEFAULT_METADATA_OPTIONS = {
    compactCategories: true,
};

const Metadata = ({ className, author, date, categories, isFull = false, options = DEFAULT_METADATA_OPTIONS, isSticky = false }) => {
    const metadataClassName = new ClassName(styles.metadata);

    metadataClassName.addIf(className, className);

    const { compactCategories } = options;

    return (
        <ul className={metadataClassName.toString()}>
            
            {author && isFull && (
                <li className={styles.metadataAuthor}>
                    <span className={styles.metadataTitle}>Author: </span><span>{author.name}</span>
                </li>
            )}
            {date && isFull && (
                <li>
                    <span className={styles.metadataTitle}>Published: </span>
                    <time pubdate="pubdate" dateTime={date}>
                        {formatDate(date)}
                    </time>
                </li>
            )}
            {Array.isArray(categories) && categories[0] && (
                <li className={styles.metadataCategories}>
                    <span className={styles.metadataTitle}>Filed Under: </span>
                    <span title={categories.map(({ name }) => name).join(', ')}>
                        <Link href={categoryPathBySlug(categories[0].slug)} className={styles.categoryLink}>{categories[0].name}</Link>
                        {categories.length > 1 && ' and more'}
                    </span>
                </li>
            )}
        </ul>
    );
};

export default Metadata;
