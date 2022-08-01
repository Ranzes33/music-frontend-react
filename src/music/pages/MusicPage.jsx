import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveAlbum, setSwitchForm } from '../../store/music/musicSlice';
import { MusicList } from '../components/MusicList';
import { Footer } from '../../ui/Footer';
import { ModalForm } from '../../ui/ModalForm';
import Button from 'react-bootstrap/Button';

export const MusicPage = () => {
  const dispatch = useDispatch();
  const { switchForm } = useSelector(state => state.music);

  const onModalForm = () => {
    const newAlbum = { title: '', lanzado: '', precio: 0, genero: '' }
    dispatch(setActiveAlbum({ album: newAlbum }));
    dispatch(setSwitchForm(true));
  }

  return (
    <>
      {
        (switchForm)
          ? <ModalForm titulo={"Nuevo Album"} />
          : <></>
      }
      <h1 className='animate__animated animate__flash mt-5'>Music Page</h1>
      <hr />
      <MusicList />
      <div className='row mb-5'>
        <div className="col-3">
          <Link
            to="/"
            className="btn animate__animated animate__bounce mt-5 mb-2"
            style={{ color: 'white', background: 'purple', margin: 300 }}
            size='lg'>
            Volver
          </Link>
        </div>
        <div className="col-3">
          <Button
            variant="primary"
            onClick={onModalForm}
            className="animate__animated animate__bounce mt-5 mb-5"
            style={{ color: 'white', background: 'green', margin: 400 }}
            size='xl'
          >
            Nuevo
          </Button>
        </div>
      </div>
      <Footer />
    </>
  )
}
