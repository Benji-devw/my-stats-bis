import styles from "@styles/match_card.module.css";
import styles_button from "@styles/button.module.css";
import Button from "@/components/Button";

const MatchCard = ({
  date,
  team1_name,
  team2_name,
  team1_score,
  team2_score,
}) => {
  // console.log(totalStats);
  return (
    <div className={styles.card}>
      <h3 className={styles.card_title}>
        {team1_name} vs {team2_name}
      </h3>
      <h3 className={styles.card_title}>
        <b>
          {team1_score} - {team2_score}
        </b>
      </h3>
      <h2>
        <span>-&gt;</span>
      </h2>
      <code>
        Date: <b>{date}</b>
      </code>

      {/* <p>
        <Button className={styles_button.button}>Voir le match sur NGTV</Button>
      </p> */}
    </div>
  );
};

export default MatchCard;
