import { Calendar } from "lucide-react";
import React from "react";

const Ticket = ({ tickt, handelInProgress }) => {
  return (
    <div>
      <div
        onClick={() => handelInProgress(tickt.title)}
        className="card bg-white text-black card-sm shadow-xl"
      >
        <div className="card-body">
          <div className=" flex justify-between">
            <h2 className="card-title ">{tickt.title}</h2>
            <h2
              className={`${
                tickt.status == "Pending" ? "bg-green-200 " : "bg-amber-200"
              } p-2 rounded-3xl flex items-center gap-1 `}
            >
              <p
                className={` ${
                  tickt.status == "Pending" ? "bg-green-400" : "bg-amber-400"
                } w-4 h-4 rounded-full  `}
              ></p>
              {tickt.status}
            </h2>
          </div>
          <p className=" text-gray-500 text-sm">{tickt.description}</p>
          <div className=" flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <p># {tickt.id}</p>
              <p> {tickt.priority}</p>
            </div>
            <div className="flex items-center gap-2">
              <p>{tickt.customer}</p>
              <p className=" flex gap-1 items-center">
                <Calendar /> {tickt.createdAt}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
