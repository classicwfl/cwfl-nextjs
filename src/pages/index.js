import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';
import HomeHero from 'components/HomeHero';
import PostList from 'components/PostList/PostList';

import styles from 'styles/pages/Home.module.scss';

export default function Home({ posts, pagination }) {
    const { metadata = {} } = useSite();
    const { title, description } = metadata;

    return (
        <Layout>
            <WebsiteJsonLd siteTitle={title} />
            <HomeHero />

            <div>
                <PostList>
                    {posts.map((post, index) => {
                        return <PostCard post={post} showImage={index == 0 || index % 5 == 0 ? '1' : ''} />;
                    })}
                </PostList>
                <Container>
                    {pagination && (
                        <Pagination
                            addCanonical={false}
                            currentPage={pagination?.currentPage}
                            pagesCount={pagination?.pagesCount}
                            basePath={pagination?.basePath}
                        />
                    )}
                </Container>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const { posts, pagination } = await getPaginatedPosts({
        queryIncludes: 'archive',
    });
    return {
        props: {
            posts,
            pagination: {
                ...pagination,
                basePath: '/posts',
            },
        },
    };
}
