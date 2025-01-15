import React, { useState } from "react";
import { FirmFactCardProps } from "./film-card-types";
import styles from "./FirmFactCard.module.scss";

export function FirmFactCard({ variant, children }: FirmFactCardProps) {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	const cardClass =
		variant === "default" ? styles.cardDefault : variant === "disabled" ? styles.cardDisabled : styles.cardBorder;

	return (
		<div className={`${styles.card} ${cardClass}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{React.cloneElement(children as React.ReactElement, {
				isHovered,
			})}
		</div>
	);
}
