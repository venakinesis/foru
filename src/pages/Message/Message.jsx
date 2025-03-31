import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styles from './Message.module.css'
import heartIcon from '../../assets/heart.svg'
import Confetti from 'react-confetti'

const Message = () => {
	const navigate = useNavigate()
	const [hearts, setHearts] = useState([])
	const [dimensions, setDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	})
	const [showConfetti, setShowConfetti] = useState(true)

	useEffect(() => {
		const handleResize = () => {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			setHearts(prev => [...prev.slice(-20), {
				id: Date.now(),
				x: Math.random() * dimensions.width,
				y: -50,
			}])
		}, 1500)

		return () => clearInterval(interval)
	}, [dimensions])

	const addHeart = (e) => {
		setHearts(prev => [...prev.slice(-20), {
			id: Date.now(),
			x: e.clientX,
			y: e.clientY,
		}])
	}

	const staticHearts = Array(5).fill(0).map((_, i) => (
		<img
			key={`static-${i}`}
			src={heartIcon}
			alt="Heart decoration"
			className={styles.decorativeHeart}
			style={{
				left: `${10 + (i * 15)}%`,
				top: `${10 + (i * 10)}%`,
				animationDelay: `${i * 0.3}s`,
				filter: 'drop-shadow(0 0 5px #a10101)'
			}}
		/>
	))

	return (
		<div
			className={styles.container}
			onClick={addHeart}
			style={{ cursor: 'pointer' }}
		>
			{/* конфетти */}
			{showConfetti && (
				<Confetti
					width={dimensions.width}
					height={dimensions.height}
					recycle={false}
					numberOfPieces={300}
					colors={['#a10101', '#ff6b6b', '#ffffff']}
					onConfettiComplete={() => setShowConfetti(false)}
				/>
			)}

			{/* статикас */}
			{staticHearts}

			{/* динамика*/}
			{hearts.map(heart => (
				<img
					key={heart.id}
					src={heartIcon}
					className={styles.fallingHeart}
					style={{
						left: heart.x,
						top: heart.y,
						filter: 'drop-shadow(0 0 3px #a10101)'
					}}
					alt="Falling heart"
				/>
			))}

			{/* оснвоа */}
			<div className={styles.content}>
				<h1
					className={styles.title}
					onMouseEnter={() => setShowConfetti(true)}
					onMouseLeave={() => setTimeout(() => setShowConfetti(false), 2000)}
				>
					HBDAY
				</h1>

				<p className={styles.message}>
					i luv seein u grow. one of the few who got close fr.<br />
					wanna watch u chase ur dreams - u ll got this.<br />
					cutie, glad we met ...<br /><br />
					but u still a lli baby tho ^^
				</p>

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

export default Message
