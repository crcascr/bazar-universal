const StarRating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex">
      {stars.map((star) => (
        <Star key={star} filled={Math.min(Math.max(rating - star + 1, 0), 1)} />
      ))}
    </div>
  );
};

const Star = ({ filled }) => {
  return (
    <svg
      className="w-[15px] h-[15px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <defs>
        <linearGradient id={`star-gradient-${filled}`}>
          <stop offset={`${filled * 100}%`} stopColor="gold" />
          <stop
            offset={`${filled * 100}%`}
            stopColor="transparent"
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill={`url(#star-gradient-${filled})`}
        stroke="gold"
      />
    </svg>
  );
};

export default StarRating;
