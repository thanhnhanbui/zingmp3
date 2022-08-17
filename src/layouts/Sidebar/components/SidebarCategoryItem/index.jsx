import { PlayCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
// style
import styles from "./SidebarCategoryItem.module.scss";
// next image
import Image from "next/image";
// classname
import classNames from "classnames";

const SidebarCategoryItem = ({
  item,
  selectedSideBarItem,
  setSelectedSideBarItem,
}) => {
  const handleClickSideBarItem = (itemTitle) => {
    setSelectedSideBarItem(itemTitle);
  };

  return (
    <Link href="#">
      <div
        className={classNames(styles["sidebar-item-container"], {
          [styles["sidebar-item-active"]]: item.title === selectedSideBarItem,
        })}
        onClick={() => handleClickSideBarItem(item.title)}
      >
        <div className={styles["sidebar-item-content"]}>
          <PlayCircleOutlined className={styles["sidebar-item-right-margin"]} />{" "}
          {item.title}
          {item.title === "Radio" && (
            <Image
              src={item.iconSrc}
              alt="live tag"
              width={34}
              height={16}
              className={styles["sidebar-item-left-margin"]}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default SidebarCategoryItem;
