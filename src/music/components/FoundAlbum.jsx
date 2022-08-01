import { useMemo } from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { startDeletingNote } from "../../store/music/thunks";
import { clearActiveAlbum, setSwitchForm } from "../../store/music/musicSlice";

import card from '../../assets/img/card_bit.png';
import { ModalForm } from "../../ui/ModalForm";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export const FoundAlbum = ({ id, title, genero, precio, lanzado }) => {
    const { switchForm } = useSelector(state => state.music);
    const dispatch = useDispatch();

    const formatLanzado = useMemo(() => {
        return lanzado.substring(0, 10)
    }, [lanzado])

    const navigate = useNavigate();
    
    const onNavigateBack = () => {
        dispatch(clearActiveAlbum());
        navigate(-1);
    }
    const onModalForm = () => {
        dispatch(setSwitchForm(true));
    }
    const onDelete = () =>{
        dispatch(startDeletingNote());
        navigate('/menu');
    }

    return (
        <>
            {
                (switchForm) 
                ?<ModalForm titulo={"Editar Album"}/> 
                : <></>
            }
            <div className="row mt-5">
                <div className="col-4">
                    <img
                        src={card}
                        alt={title}
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
                </div>
                <div className="col-8 mt-5">
                    <h1 className="mt-3">{title}</h1>

                    <ListGroup className="mt-4">
                        <ListGroup.Item className="list-group">
                            <b>Genero: </b> {genero}
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group">
                            <b>Lanzado: </b> {formatLanzado}
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group">
                            <b>Precio: </b> {precio}
                        </ListGroup.Item>
                    </ListGroup>
                    <div className="row">
                        <div className="col-2 mt-4">
                            <Button
                                variant="secondary"
                                onClick={onNavigateBack}
                            >
                                Regresar
                            </Button>
                        </div>
                        <div className="col-2 mt-4">
                            <Button
                                variant="primary"
                                onClick={onModalForm}
                            >
                                Editar
                            </Button>
                        </div>
                        <div className="col-2 mt-4">
                            <Button
                                variant="danger"
                                onClick={onDelete}
                            >
                                Eliminar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
