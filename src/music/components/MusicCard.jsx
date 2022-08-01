import { useMemo } from "react"
import { Link } from 'react-router-dom';
import card from '../../assets/img/card_bit.png';
import '../../styles.css'
export const MusicCard = ({id, title, genero, precio, lanzado}) => {

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    }, [title])

    const formatLanzado = useMemo(() => {
        return lanzado.substring(0,10)
    }, [title])   

    return (
        <div className="animate__animated animate__fadeIn">
            <Link to={`../album/${id}`} className="my-card">
                <img src={card} className="img img-responsive" alt={title} />
                <div className="profile-name">{newTitle}</div>
                <div className="profile-position">{genero}</div>
                <div className="profile-overview">
                    <div className="profile-overview">
                        <div className="row">
                            <div className="col-ms-4">
                                <h3>{precio}</h3>
                                <p>Lanzado: <br />{formatLanzado}</p>
                            </div>
                        </div>
                    </div>
                </div>     
                </Link>   
        </div>
    )
}
