interface SkillCardProps {
  skills: string[];
}

export default function SkillsCard({
  skills,
}: SkillCardProps) {
  return (
    <div className="w-80 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-white shadow-2xl">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-violet-600 px-4 py-2 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}