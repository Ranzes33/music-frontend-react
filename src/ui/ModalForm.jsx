import { useEffect, useMemo} from 'react';
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';

import { startSaveAlbum } from '../store/music/thunks';
import { setActiveAlbum, setSwitchForm } from '../store/music/musicSlice';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export const ModalForm = ({titulo}) => {
    const dispatch = useDispatch();
    const { active } = useSelector(state => state.music);
    const { title, lanzado, precio, genero, onInputChange, formState } = useForm(active);

    const formatLanzado = useMemo(() => {
        return lanzado.substring(0, 10)
    }, [lanzado])

    useEffect(() => {
        dispatch(setActiveAlbum({album: formState}));
    }, [formState])

    const onSaveAlbum = () => {
        dispatch(startSaveAlbum());
    }

    const onClicShutDown = () => {
        dispatch(setSwitchForm(false))
    }

    return (
        <Modal show onHide={onClicShutDown} centered style={{color: 'darkslateblue'}}>
            <Modal.Header closeButton style={{ background: 'purple' }}>
                <Modal.Title>{titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Canción:</Form.Label>
                        <Form.Control
                            type="text"
                            name='title'
                            value={title}
                            onChange={onInputChange}
                            placeholder="example"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Genero:</Form.Label>
                        <Form.Control
                            type="text"
                            name='genero'
                            value={genero}
                            onChange={onInputChange}
                            placeholder="Balada"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Fecha de Lanzamiento:</Form.Label>
                        <Form.Control
                            type="date"
                            name='lanzado'
                            value={formatLanzado}
                            onChange={onInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Precio:</Form.Label>
                        <Form.Control
                            type="text"
                            name='precio'
                            value={precio}
                            onChange={onInputChange}
                            placeholder="0.00"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer style={{ background: 'purple' }}>
                <Button variant="secondary" onClick={onClicShutDown}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={onSaveAlbum}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
