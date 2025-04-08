const EducationSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          Responsive Web Design
        </h3>
        <p className="text-sm text-gray-500 mt-1 mb-3">
          freeCodeCamp | Earned 2024
        </p>
        <ul className="space-y-2">
          <li className="text-gray-600">
            • Completed coursework covering HTML, CSS, and responsive design principles
          </li>
          <li className="text-gray-600">
            • Built multiple projects to demonstrate proficiency in creating responsive and accessible web layouts
          </li>
        </ul>
        <a
          href="https://www.freecodecamp.org/certification/fcc84cb5c89-d489-4a42-ad33-87795aeb0d91/responsive-web-design"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-600 hover:text-blue-800"
        >
          View Certification
        </a>
      </div>
    </section>
  );
};

export default EducationSection;
