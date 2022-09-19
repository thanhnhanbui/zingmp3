// libs
import Image from "next/image";
// style
import styles from "./PlaylistCarouselRankingItems.module.scss";

const PlaylistCarouselRankingItems = ({ song }) => (
  <div key={song.id}>
    <div className={styles["playlist-carousel-ranking-item"]}>
      <div className={styles["playlist-carousel-ranking-item-photo"]}>
        <Image src={song.src} layout="fill" objectFit="cover" />
      </div>
      <div className={styles["playlist-carousel-ranking-content"]}>
        <div>
          <h3 className={styles["playlist-carousel-ranking-item-title"]}>
            {song.title}
          </h3>
          <div className={styles["playlist-carousel-ranking-item-artists"]}>
            {song.artists}
          </div>
        </div>
        <div
          className={styles["playlist-carousel-ranking-item-content-footer"]}
        >
          <div>{song.rank}</div>
          <div> {song.dateRelease}</div>
        </div>
      </div>
    </div>
  </div>
);

export default PlaylistCarouselRankingItems;
