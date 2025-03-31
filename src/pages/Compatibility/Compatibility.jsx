import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styles from './Compatibility.module.css'

const Compatibility = () => {
	const navigate = useNavigate()
	const [percentage, setPercentage] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setPercentage(prev => (prev >= 98 ? 98 : prev + 2))
		}, 50)

		return () => clearInterval(timer)
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>our compatibility</h1>

				<div className={styles.meter}>
					<div
						className={styles.progress}
						style={{ width: `${percentage}%` }}
					></div>
					<span className={styles.percentage}>{percentage}%</span>
				</div>

				<div className={styles.details}>
					<div className={styles.compatItem}>
						<span>luv</span>
						<span>99.99%</span>
					</div>
					<div className={styles.compatItem}>
						<span>understanding</span>
						<span>95%</span>
					</div>
					<div className={styles.compatItem}>
						<span>happiness</span>
						<span>100%</span>
					</div>
				</div>

				<button
					onClick={() => navigate(-1)}
					className={styles.backButton}
				>
					← back
				</button>
			</div>
		</div>
	)
}

export default Compatibility
