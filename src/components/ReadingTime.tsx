import React, { useEffect, useState } from "react";

type readingTimeProps = {
  content: string;
};

const ReadingTime: React.FC<readingTimeProps> = ({ content }) => {
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    // Define calculateReadingTime within the useEffect
    const calculateReadingTime = () => {
      // Average reading speed (words per minute)
      const wordsPerMinute = 200;

      // Count the number of words in the content
      const wordCount = content.split(/\s+/).length;

      // Calculate the estimated reading time in minutes
      const timeInMinutes = wordCount / wordsPerMinute;

      // Round up to the nearest minute
      const roundedReadingTime = Math.ceil(timeInMinutes);

      setReadingTime(roundedReadingTime);
    };

    // Calculate the reading time when the component mounts or when content changes
    calculateReadingTime();
  }, [content]);

  return (
    <div>
      <p className=" font-playFairDisplay font-normal text-sm text-primary_color">
        {readingTime} minute{readingTime !== 1 && "s"} read
      </p>
    </div>
  );
};

export default ReadingTime;
