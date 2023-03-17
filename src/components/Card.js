import pin from '../location-dot-solid.svg'

function Card(props) {

    return (
        <div className='card'>
            <img src={props.img} className='card--main_img'/>
            <div className='card--info'>
                <div className='card--info_location'>
                    <img src={pin} className='card--info_location_pin_img'/>
                    <p className='card--info_location_country'>{props.country}</p>
                    <a href={props.link} className='card--info_location_coords' target="_blank">View on Google Maps</a>
                </div>
                <h1 className='card--info_place'>{props.place}</h1>
                <p className='card--info_date'>{props.date}</p>
                <p className='card--info_text'>{props.text}</p>

            </div>
        </div>
    )
}

export default Card