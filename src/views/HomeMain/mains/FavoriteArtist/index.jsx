
// mocks
import { listArtists } from "src/mocks/FavoriteArtist";
// component
import FavoriteArtistItems from "../../components/FavoriteArtistItems";
// style
import styles from "./FavoriteArtist.module.scss";

const FavoriteArtist = () => (
  <div className={styles["favorite-artist-container"]}>
    <h3 className={styles["favorite-artist-title"]}>Nghệ Sĩ Yêu Thích</h3>
    <FavoriteArtistItems listArtists={listArtists} />
  </div>
);

export default FavoriteArtist;