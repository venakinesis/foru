import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import styles from './Home.module.css'
import wingsImage from '../../../styles/wings.jpg'

const Home = () => {
	const navigate = useNavigate()

	return (
		<div className={styles.container}>
			<img
				src={wingsImage}
				alt="Decorative element"
				className={styles.decorativeImage}
			/>

			<div className={styles.contentWrapper}>
				<h1 className={styles.title}>to my beloved🏩</h1>

				<div className={styles.buttonsContainer}>
					<Button
						onClick={() => navigate("/message")}
						className={styles.btn}
					>
						continue
					</Button>

					<Button
						onClick={() => navigate("/gallery")}
						className={styles.btn}
					>
						cards
					</Button>

					<Button
						onClick={() => navigate("/compatibility")}
						className={styles.btn}
					>
						test
					</Button>

					<Button
						onClick={() => navigate("/music")}
						className={styles.btn}
					>
						fav soundtrack
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Home
