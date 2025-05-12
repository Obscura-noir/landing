export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-600 transition-all">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
} 