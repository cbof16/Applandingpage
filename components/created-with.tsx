import type { NextPage } from "next";
import styles from "./created-with.module.css";

export type CreatedWithType = {
  className?: string;
};

const CreatedWith: NextPage<CreatedWithType> = ({ className = "" }) => {
  return (
    <div className={[styles.createdWith, className].join(" ")}>
      <h1 className={styles.readyToGet}>ready to get started?</h1>
      <div className={styles.risusHabitantLeoEgestasMauWrapper}>
        <p className={styles.risusHabitantLeo}>
          Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
        </p>
      </div>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/group-35905.svg" />
        <button className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <div className={styles.downloadAppWrapper}>
            <div className={styles.downloadApp}>download app</div>
          </div>
          <img className={styles.starIcon} alt="" src="/star.svg" />
        </button>
      </div>
      <div className={styles.frameGroup}>
        <img className={styles.frameInner} alt="" src="/group-35905.svg" />
        <div className={styles.frameContainer}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-35932-1@2x.png"
          />
          <img
            className={styles.iphone13Pro}
            alt=""
            src="/iphone-13-pro@2x.png"
          />
          <img
            className={styles.appLogoIcon}
            loading="lazy"
            alt=""
            src="/star-7.svg"
          />
        </div>
      </div>
      <img
        className={styles.createdWithChild}
        loading="lazy"
        alt=""
        src="/star-6-1.svg"
      />
    </div>
  );
};

export default CreatedWith;
