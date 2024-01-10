import React from "react";
import userAvatar from "../../assets/svgs/userAvatar.svg";

type commentsProps = {
  comments: {
    user: string;
    comment: string;
  };
  onReply: () => void;
};

const Comments: React.FC<commentsProps> = (props) => {
  return (
    <div
      key={props.comments.user}
      className=" max-w-full h-auto lg:h-auto flex items-center justify-center gap-2 lg:gap-0 p-2 lg:p-4 rounded-md bg-[#C4C4C44D]"
    >
      <div className=" w-20 lg:w-40 h-full flex flex-col items-center justify-center">
        <img
          src={userAvatar}
          alt="avatar"
          className=" w-8 h-8 lg:w-16 lg:h-16 object-contain"
        />
        <span className="w-full font-montserrat font-normal text-[#1F2732] text-center text-sm lg:text-base">
          {props.comments.user}
        </span>
      </div>
      <div className=" w-full h-full flex flex-col items-start justify-start lg:items-start lg:justify-center">
        <p className=" w-full font-montserrat font-normal text-[#1F2732] text-sm lg:text-base">
          {props.comments.comment}
        </p>
        <div className=" w-full flex items-start justify-start gap-4 lg:gap-4 mt-2 font-montserrat font-normal text-sm lg:text-base">
          <p
            onClick={props.onReply}
            className=" flex items-start justify-start gap-4 lg:gap-4 text-sm lg:text-base text-[#1F2732] hover:text-primary_color cursor-pointer"
          >
            Reply
          </p>
          <p className=" text-sm lg:text-base text-primary_color">1 min ago</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
