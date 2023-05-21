//import Container from 'components/Container';
import { findMenuByLocation, MENU_LOCATION_NAVIGATION_DEFAULT } from 'lib/menus';
import styles from './HomeHero.module.scss';

import useSite from 'hooks/use-site';
import NavListItem from 'components/NavListItem/NavListItem';
import PhotoFrame from 'components/PhotoFrame/PhotoFrame';

const HomeHero = () => {
    const { metadata = {}, menus } = useSite();
    const navigationLocation = process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || MENU_LOCATION_NAVIGATION_DEFAULT;
    const navigation = findMenuByLocation(menus, navigationLocation);

    return (
        <header className={styles.heroWrapper}>
            <PhotoFrame />
            <video 
                //autoPlay 
                muted 
                loop
                poster="/dumpsterfireposter1.jpg"
            >
                <source src="/dumpsterfirevid.mp4" type="video/mp4" />
                    Well shit fam, you dun can't see the fantastic art I created.
            </video>
            <div className={styles.heroWrapper__overlay}>
                <h1>wfl</h1>
                <nav>
                    <ul>
                        {/* <li><a href="#">Nav entry 1</a></li>
                        <li><a href="#">Nav entry 2</a></li>
                        <li><a href="#">Nav entry 3</a></li>
                        <li><a href="#">Nav entry 4</a></li>
                        <li><a href="#">Nav entry 5</a></li> */}
                        {navigation?.map((listItem) => {
                            return <NavListItem key={listItem.id} className={styles.navSubMenu} item={listItem} />;
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HomeHero;
