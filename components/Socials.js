import Link from "next/link";

// icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiWhatsappLine,
  RiLinkedinLine,
  RiGithubLine
} from "react-icons/ri";

const Socials = () => {
  return(
    <div className="flex items-center gap-x-5 text-lg"> {/* Added mb-4 for margin-bottom */}
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine/>
      </Link>

      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link>

      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine/>
      </Link>

      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiGithubLine/>
      </Link>

      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine/>
      </Link>
    </div>
  );
};

export default Socials;
