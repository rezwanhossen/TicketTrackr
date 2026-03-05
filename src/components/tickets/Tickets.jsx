import React, { use } from "react";
import Ticket from "../ticket/Ticket";

const Tickets = ({
  tickts,
  handelInProgress,
  inProgress,
  handelResolve,
  reslove,
}) => {
  const alltickts = use(tickts);

  return (
    <div className=" my-5 flex flex-col md:flex-row gap-3">
      <div className=" flex-3 p-2">
        <h1 className="text-3xl font-bold">Customer Tickets</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
          {alltickts.map((tickt) => (
            <Ticket
              key={tickt.id}
              tickt={tickt}
              handelInProgress={handelInProgress}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 p-2 bg-base-50 space-y-7">
        <div className=" space-y-2">
          <h1 className="text-3xl font-bold">Task Status</h1>
          {inProgress.length > 0 ? (
            inProgress.map((inProgres, index) => (
              <div
                key={index}
                className=" card bg-white text-black card-sm shadow-xl p-5 space-y-2"
              >
                <h1 className=" card-title">{inProgres} </h1>
                <button
                  onClick={() => handelResolve(inProgres)}
                  className=" btn btn-success"
                >
                  Complete
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              Select a ticket to add to Task Status
            </p>
          )}
        </div>
        <div className=" space-y-2">
          <h1 className="text-3xl font-bold">Resolved Task</h1>

          {reslove.length > 0 ? (
            reslove.map((resl, index) => (
              <div
                key={index}
                className=" card bg-white text-black card-sm shadow-xl p-5 "
              >
                <h1 className=" card-title">{resl} </h1>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No resolved tasks yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
