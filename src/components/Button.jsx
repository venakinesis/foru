import React from "react"
import '../../styles/global.css'  // Двойной подъем наверх из components

const Button = ({ onClick, children }) => {
	return (
		<button className="btn" onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
