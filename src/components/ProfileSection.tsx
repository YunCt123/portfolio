import { Phone, Mail, Facebook, Github } from "lucide-react";

const ProfileSection = () => {
  return (
    <div className="space-y-6">
      <p className="text-base text-gray-700 leading-relaxed">
        Passionate front-end developer with a focus on creating responsive,
        user-friendly, and visually appealing web applications. Skilled in
        modern web technologies and committed to delivering high-quality code.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Phone size={24} className="text-blue-500" />
          <a href="tel:0898498720" className="text-blue-600 hover:underline">
            0898498720
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Mail size={24} className="text-blue-500" />
          <a
            href="mailto:yunct1234@gmail.com"
            className="text-blue-600 hover:underline"
          >
            yunct1234@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Facebook size={24} className="text-blue-500" />
          <a
            href="https://www.facebook.com/ducanh.trinh.9619/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Trinh Duc Anh
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Github size={24} className="text-blue-500" />
          <a
            href="https://github.com/YunCt123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            YunCt123
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
