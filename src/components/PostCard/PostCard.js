import Link from 'next/link';

import { postPathBySlug } from 'lib/posts';

import Metadata from 'components/Metadata';
import FeaturedImage from 'components/FeaturedImage/FeaturedImage';

import styles from './PostCard.module.scss';

const PostCard = ({ post, isFirst, options = {} }) => {
    const { title, slug, date, author, categories, featuredImage } = post;
    const { excludeMetadata = [] } = options;

    const metadata = {};

    if (!excludeMetadata.includes('author')) {
        metadata.author = author;
    }

    if (!excludeMetadata.includes('date')) {
        metadata.date = date;
    }

    if (!excludeMetadata.includes('categories')) {
        metadata.categories = categories;
    }

    let postCardStyle = styles.postCard;

    return (
        <div className={postCardStyle}>
            <div className={styles.postCardInner}>
                <div className={styles.postCardImageWrap}>
                {featuredImage && (
                    <FeaturedImage
                        {...featuredImage}
                        className={styles.postCardImage}
                        src={featuredImage.sourceUrl}
                        dangerouslySetInnerHTML={featuredImage.caption}
                    />
                )}
                </div>
                <div className={styles.postCardContentWrap}>
                    <Link href={postPathBySlug(slug)}>
                        <h2
                            className={styles.postCardTitle}
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}
                        />
                    </Link>
                    <Metadata className={styles.postCardMetadata} {...metadata} />
                </div>
            </div>
        </div>
    );
};

export default PostCard;
