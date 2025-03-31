import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Message from "./pages/Message/Message"
import Gallery from "./pages/Gallery/Gallery"
import Compatibility from "./pages/Compatibility/Compatibility"
import MusicPlaylist from "./pages/Music/MusicPlaylist"

const Layout = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/message" element={<Message />} />
			<Route path="/gallery" element={<Gallery />} />
			<Route path="/compatibility" element={<Compatibility />} />
			<Route path="/music" element={<MusicPlaylist />} />
		</Routes>
	)
}

export default Layout
