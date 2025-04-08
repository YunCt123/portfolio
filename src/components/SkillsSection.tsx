const SkillsSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Soft Skills</h3>
        <ul className="mt-2 space-y-2">
          <li className="text-gray-600">
            • Excellent communication and public speaking skills
          </li>
          <li className="text-gray-600">
            • Strong teamwork and collaboration abilities
          </li>
          <li className="text-gray-600">
            • Adaptability and problem-solving mindset
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Hard Skills</h3>
        <ul className="mt-2 space-y-2">
          <li className="text-gray-600">
            • Proficient in HTML, CSS, JavaScript, and TypeScript
          </li>
          <li className="text-gray-600">
            • Experienced with React.js and modern front-end frameworks
          </li>
          <li className="text-gray-600">
            • Knowledge of responsive design and cross-browser compatibility
          </li>
          <li className="text-gray-600">
            • Familiar with version control systems like Git
          </li>
          <li className="text-gray-600">
            • Basic understanding of Agile methodologies and workflows
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;
