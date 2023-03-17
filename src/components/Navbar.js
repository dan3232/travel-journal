import earth from '../earth-americas-solid.svg'

function Navbar() {
    return (
        <div className='nav'>
            <img src={earth} className='nav--img'></img>
            <h3 className='nav--title'>my travel journal.</h3>
        </div>
    )
}

export default Navbar