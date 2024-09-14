// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none w-full h-full relative">
      <Image
        src="/avatar.png"
        width={737}
        height={678}
        alt="Avatar Image"
        className="object-cover"
      />
    </div>
  );
};

export default Avatar;
