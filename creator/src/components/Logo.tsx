import funcky from '../assets/logo-funcky.svg'
import monochrome from '../assets/logo-monochrome.svg'
import coloured from '../assets/logo-coloured.svg'

type LogoProp = 'funcky' | 'monochrome' | 'coloured'

const Logo = ({ variant }: { variant: LogoProp }) => {
    return (
        <img src={variant === 'funcky' ? funcky : variant === 'monochrome' ? monochrome : coloured} alt='logo' className='w-32' />
    )
}


export default Logo
