import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './MusicPlaylist.module.css'
import photo8 from "../../../styles/memory8.jpg"
import song from '../../../styles/song.mp3'

export default function MusicPlaylist() {
	const [isPlaying, setIsPlaying] = useState(false)
	const audioRef = useRef(null)
	const navigate = useNavigate()

	useEffect(() => {
		audioRef.current = new Audio(song)
		audioRef.current.preload = 'auto'

		return () => {
			if (audioRef.current) {
				audioRef.current.pause()
				audioRef.current = null
			}
		}
	}, [])

	const togglePlay = async () => {
		if (!audioRef.current) return

		try {
			if (isPlaying) {
				audioRef.current.pause()
			} else {
				await audioRef.current.play()
			}
			setIsPlaying(!isPlaying)
		} catch (error) {
			console.error('Playback failed:', error)
			alert('Could not play the song. Please try again.')
		}
	}

	return (
		<div className={styles.playlistContainer}>
			<h1 className={styles.playlistTitle}>listen^^</h1>

			<div className={styles.track}>
				<img
					src={photo8}
					alt="Deftones - Please Please Please Let Me Get What I Want"
					className={styles.albumCover}
				/>

				<div className={styles.songInfo}>
					<h2 className={styles.songTitle}>Please Please Please Let Me Get What I Want</h2>
					<p className={styles.artist}>Deftones</p>
				</div>

				<button
					className={styles.playButton}
					onClick={togglePlay}
					aria-label={isPlaying ? 'Pause' : 'Play'}
				>
					{isPlaying ? '❚❚' : '▶'}
				</button>
			</div>

			<button
				className={styles.backButton}
				onClick={() => navigate('/')}
			>
				← back
			</button>
		</div>
	)
}
