import closeIcon from "../../assets/Close.svg";
import { Button } from "../button/Button";
import { buttonsData, handleClose } from "../button/button-data";
import { FirmFactCard } from "../firm-fact-card/FirmFactCard";
import styles from "./FirmFacts.module.scss";

const title = "Firm Facts";

export function FirmFacts() {
	return (
		<section className={styles.wrapper}>
			<div className={styles.headerCloseDiv}>
				<button onClick={handleClose} className={styles.headerCloseButton}>
					<img src={closeIcon} alt="" className={styles.headerCloseIcon} />
				</button>
			</div>
			<div className={styles.headerTitleDiv}>
				<h1 className={styles.headerTitle}>{title}</h1>
			  <hr className={styles.headerLine} />
			</div>
			<main className={styles.gridContainer}>
				{buttonsData.map((button, i) => {
					const disable = button.disabled;

					return (
						<FirmFactCard key={i} variant={disable ? "disabled" : button.cardVariant}>
							<Button
								text={button.text}
								variant={button.variant}
								disabled={disable}
								rowVariant={i < 4 ? "first" : "second"}
							/>
						</FirmFactCard>
					);
				})}
			</main>
		</section>
	);
}
