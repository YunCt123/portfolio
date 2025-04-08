import Image from "next/image";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProfileSection from "@/components/ProfileSection";
import IMG from "../../public/anh-27-meme-dang-yeu-didongmy.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src={IMG}
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Trịnh Đức Anh
              </h1>
              <p className="text-lg text-gray-600 mt-1">
                Front-End Developer
              </p>
              <div className="mt-4">
                <ProfileSection />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ExperienceSection />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <SkillsSection />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <EducationSection />
          </div>
        </div>
      </div>
    </div>
  );
}
