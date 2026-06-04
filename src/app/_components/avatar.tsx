type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  const isDirectImage = picture.match(/\.(jpeg|jpg|gif|png|webp|svg)$/) || picture.includes("images.unsplash.com") || picture.includes("ui-avatars.com");
  const avatarSrc = isDirectImage ? picture : `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=128`;

  return (
    <div className="flex items-center">
      <img src={avatarSrc} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
