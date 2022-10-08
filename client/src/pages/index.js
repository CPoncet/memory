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
    <div className="home">
      <img src="logo-no-background.svg" alt="logo" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Nom</label>
          <input
            type="text"
            id="username"
            defaultValue={localStorage.username}
            {...register('username', {
              required: {
                message: 'Ce champ est requis',
                value: true,
              },
              pattern: {
                message:
                  'Veuillez insérer uniquement des lettres et des chiffres',
                value: /^[a-zA-Z0-9]+$/i,
              },
            })}
          />
        </div>
        {errors.username && <span role="alert">{errors.username.message}</span>}
        <div className="btn-submit">
          <button>Jouer</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
