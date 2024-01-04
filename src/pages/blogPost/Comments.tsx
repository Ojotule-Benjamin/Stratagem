import React from "react";
import userAvatar from "../../assets/svgs/userAvatar.svg";

type commentsProps = {
  comments: {
    user: string;
    comment: string;
  };
};

const Comments: React.FC<commentsProps> = (props) => {
  return (
    <div
      key={props.comments.user}
      className="w-full flex items-center justify-center gap-4 lg:gap-7 h-36 px-3 py-0 lg:px-4 lg:py-6 rounded-md bg-[#C4C4C44D]"
    >
      <div className=" flex flex-col items-center justify-center">
        <img src={userAvatar} alt="avatar" />
        <span className="text-sm lg:text-base">{props.comments.user}</span>
      </div>
      <div className=" flex flex-col items-start justify-start">
        <p className=" text-sm lg:text-base">{props.comments.comment}</p>
        <div className=" flex items-start justify-start gap-4 lg:gap-4 mt-2 text-sm lg:text-base">
          <p>Reply</p>
          <p className=" text-primary_color">1 min ago</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
