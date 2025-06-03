interface ReviewCardProps {
  name: string;
  date: string;
  rating: number;
  text: string;
}

export default function ReviewCard({ name, date, rating, text }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
        <div className="flex text-yellow-400">
          {"★".repeat(rating)}
        </div>
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  )
}
