interface ProfileProps {
  img?: string;
  name: string;
  about: string;
  tag?: string;
  className?: string;
}

export default function Profile({
  img,
  name,
  about,
  tag = "member",
  className = "",
}: ProfileProps) {
  const defaultImage = "https://placehold.co/400x400?text=Profile";

  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg ${className}`}>
      <div className="relative">
        <img
          src={img || defaultImage}
          alt={`${name}'s profile`}
          className="w-full h-64 object-cover"
        />
        <p className="absolute bottom-2 right-2 bg-white px-3 py-1 rounded-full text-sm font-medium">
          {tag}
        </p>
      </div>
      <div className="px-6 py-4">
        <h4 className="font-bold text-xl mb-2">{name}</h4>
        <p className="text-base">{about}</p>
      </div>
    </div>
  );
}
