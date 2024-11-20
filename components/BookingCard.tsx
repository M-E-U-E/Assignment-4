import React, { useState } from "react";

const BookingCard = () => {
  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(0);
  const [showTravelerOptions, setShowTravelerOptions] = useState(false);

  const increment = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => setter(value + 1);
  const decrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    if (value > 0) setter(value - 1);
  };

  return (
    <div className="fixed right-8 top-24 max-w-md bg-white">
      <div className="border shadow-lg rounded-lg p-6">
        <div className="text-2xl font-bold">
          $134 <span className="text-sm font-normal">per night</span>
        </div>
        <div className="mt-4">
          <span className="text-gray-600">
            Non-refundable <i className="cursor-pointer text-blue-500">i</i>
          </span>
        </div>
        <div className="mt-2 text-green-600 flex items-center">
          <span className="mr-2">✔</span> Your dates are available
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="start-date" className="block text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              id="start-date"
              className="border rounded-md w-full p-2"
              placeholder="Start date"
            />
          </div>
          <div>
            <label htmlFor="end-date" className="block text-gray-700">
              End Date
            </label>
            <input
              type="date"
              id="end-date"
              className="border rounded-md w-full p-2"
              placeholder="End date"
            />
          </div>
        </div>
        <div className="mt-6">
          <div
            id="traveler-box"
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setShowTravelerOptions(!showTravelerOptions)}
          >
            <span>Travelers:</span>
            <span id="total-travelers">{adultCount + childCount} travelers</span>
          </div>
          {showTravelerOptions && (
            <div id="traveler-options" className="mt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span>Adults</span>
                <div className="flex items-center space-x-2">
                  <button
                    id="adult-decrement"
                    className="px-2 py-1 border rounded disabled:opacity-50"
                    disabled={adultCount === 1}
                    onClick={() => decrement(setAdultCount, adultCount)}
                  >
                    -
                  </button>
                  <span id="adult-count">{adultCount}</span>
                  <button
                    id="adult-increment"
                    className="px-2 py-1 border rounded"
                    onClick={() => increment(setAdultCount, adultCount)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Children</span>
                <div className="flex items-center space-x-2">
                  <button
                    id="child-decrement"
                    className="px-2 py-1 border rounded disabled:opacity-50"
                    disabled={childCount === 0}
                    onClick={() => decrement(setChildCount, childCount)}
                  >
                    -
                  </button>
                  <span id="child-count">{childCount}</span>
                  <button
                    id="child-increment"
                    className="px-2 py-1 border rounded"
                    onClick={() => increment(setChildCount, childCount)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                id="done-btn"
                className="block w-full mt-4 bg-blue-500 text-white py-2 rounded"
                onClick={() => setShowTravelerOptions(false)}
              >
                Done
              </button>
            </div>
          )}
        </div>
        <div className="mt-6 text-center text-gray-700 text-sm">
          You will not be charged yet
        </div>
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Book now
        </button>
      </div>
    </div>
  );
};

export default BookingCard;