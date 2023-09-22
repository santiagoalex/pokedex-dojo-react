// eslint-disable-next-line react/prop-types
const Image = ({ image, pokemon }) => {
  return (
    <figure>
      <img className="pokemon_image" src={image} alt={`imagen ${pokemon}`} />
    </figure>
  );
};

export default Image;
