import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.username = data.username;
    navigate('/game');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Nom :</label>
          <input
            type="text"
            id="username"
            defaultValue={localStorage.username}
            {...register('username', {
              required: true,
            })}
          />
        </div>
        {errors.username && <span role="alert">Ce champ est requis</span>}
        <div>
          <button>Jouer</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
