import React from "react"
import styles from './Gallery.module.css'
import { useNavigate } from "react-router-dom"

import photo1 from '../../../styles/memory1.jpg'
import photo2 from '../../../styles/memory2.jpg'
import photo3 from '../../../styles/memory5.jpg'
import photo4 from '../../../styles/memory4.jpg'

const Gallery = () => {
	const navigate = useNavigate()

	return (
		<div className={styles.galleryContainer}>
			<h1 className={styles.title}>together</h1>

			<div className={styles.collage}>
				<div className={styles.row}>
					<img src={photo1} alt="Memory 1" className={styles.image} />
					<img src={photo2} alt="Memory 2" className={styles.image} />
				</div>
				<div className={styles.row}>
					<img src={photo3} alt="Memory 3" className={styles.image} />
					<img src={photo4} alt="Memory 4" className={styles.image} />
				</div>
			</div>

			<button
				onClick={() => navigate(-1)}
				className={styles.backButton}
			>
				← back
			</button>
		</div>
	)
}

export default Gallery
