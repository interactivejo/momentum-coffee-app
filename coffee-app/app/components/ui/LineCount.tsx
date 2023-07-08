import React from "react";

const LineCount = (props: any) => {
  return (
    <p>
      {props.status === 'Preparing' ? 'You are' : 'There are currently'}
     
      {" "}
      
      <span className="font-semibold text-[#F15D2A]">
        {props.status === 'Preparing' ? 'next' : props.lineOrder}
      </span>

      {" "}
      
        {props.status === 'Preparing' ? 'in line' : ' people ahead of you'}
     
    </p>
  );
};

export default LineCount;
