interface ProfileCardProps {
  name: string;
  role: string;
  university: string;
 	location: string;
}

export default function ProfileCard({
  name,
  role,
  university,
  location,
}: ProfileCardProps) {
  return (
    <div className="w-80 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-white shadow-2xl">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <div className="space-y-4">
        <p><span className="font-semibold">Name:</span> {name}</p>
        <p><span className="font-semibold">Role:</span> {role}</p>
        <p><span className="font-semibold">University:</span> {university}</p>
        <p><span className="font-semibold">Location:</span> {location}</p>
      </div>
    </div>
  );
}