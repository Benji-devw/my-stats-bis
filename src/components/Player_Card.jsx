/* eslint-disable react/no-unescaped-entities */
import styles from "@styles/player_card.module.css";
import Image from "next/image";
// import Link from "next/link";

const PayerCard = (
  {
    name,
    media,
    golden,
    golden_old,
    totalStats,
  }) => {
  // console.log(totalStats);
  return (
    <div className={`${styles.card} fadeIn`}>
      <h2 className={styles.card_title}>
        <div className={""}>
          <Image
            src={media}
            alt={name}
            className={styles.card_media}
            width={100}
            height={100}
            priority
          />
          {golden === 1 && (
            <Image
              src={"/ballon-d-or-2.png"}
              alt={name}
              className={styles.card_media_or}
              width={40}
              height={40}
              priority
            />
          )}
        </div>
        {name}
      </h2>
      <p>
        <b>TOTAL : </b>
      </p>
      
      <p>
        Matchs joués: <b>{totalStats.matchCount}</b>
      </p>
      <p>
        Buts: <b>{totalStats.totalGoals}</b>
      </p>
      <p>
        Tirs: <b>{totalStats.totalShoots}</b>
      </p>
      <p>
        Passes D: <b>{totalStats.totalAssists}</b>{" "}
      </p>
      <p>
        A été <b>{golden_old}</b> fois ballon d'or{" "}
      </p>
      <p>
        Moyenne: <b>{(totalStats.totalGoals * 100 / totalStats.totalShoots).toFixed(1)}</b>
      </p>
      <h3><span>-&gt;</span></h3>
    </div>
  );
};

export default PayerCard;
