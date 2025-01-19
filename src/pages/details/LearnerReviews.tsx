import { ImStarEmpty } from "react-icons/im";

interface Review {
    reviewer_name: string;
    rating: number;
    review_text: string;
    image: string;
    review_date: string;
}

interface LearnerReviewsProps {
    reviews: Review[];
}

const LearnerReviews: React.FC<LearnerReviewsProps> = ({ reviews }) => {
    return (
        <div className="w-2/3 mx-14">
            <h1 className="font-bold text-3xl my-5">Learner Reviews</h1>
            {reviews.map((review, index) => (
                <div key={index} className="flex border p-4 mb-4 rounded-lg shadow-md">
                    <div className="w-24">
                        <img
                            src={review.image}
                            alt={review.reviewer_name}
                            className="rounded-full object-cover"
                        />
                    </div>
                    <div className="flex-1 ml-4">
                        <h2 className="font-bold text-lg">{review.reviewer_name}</h2>
                        <div className="flex items-center mt-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <ImStarEmpty
                                    key={i}
                                    className={`${
                                        i < review.rating ? "text-yellow-500" : "text-gray-300"
                                    }`}
                                />
                            ))}
                        </div>
                        <p className="text-gray-700 mt-2">{review.review_text}</p>
                        <p className="text-gray-500 text-sm mt-1">
                            Reviewed on {new Date(review.review_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            ))}
            <button className="btn border-2 border-black bg-white my-3">View more Reviews</button>
        </div>
    );
};

export default LearnerReviews;
