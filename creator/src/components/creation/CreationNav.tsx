import React, { useEffect } from 'react'

const CreationNav = () => {
    const [navisible, setNavisible] = React.useState(false)
    const [scrollY, setScrollY] = React.useState(0)
    const handleScroll = () => {
        setScrollY(window.scrollY)
        if (scrollY > 200) {
            setNavisible(true)
        } else {
            setNavisible(false)
        }
    }
    useEffect(() => {
        setScrollY(window.scrollY)
        console.log("object")
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [scrollY])
    return (
        <nav className={`py-4 px-4 sm:px-16 ${navisible ? 'translate-y-0' : '-translate-y-full absolute'} bg-white/40 backdrop-blur-xl sticky top-0 flex items-center justify-between z-50 transition-transform`}>
            <h2 className='font-semibold text-2xl dm-serif text-blue'>SpaceXplore</h2>
        </nav>
    )
}

export default CreationNav
