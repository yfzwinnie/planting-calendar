import { useState } from "react";
import PlantRow from "./PlantRow";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  const [plants, addPlant] = useState([
    {
      name: "Tomato",
      sowIndoor: ["February", "March"],
      sowOutdoor: ["April"],
      transplant: ["May"],
      harvest: ["July", "August"],
    },
    {
      name: "Broccoli",
      sowIndoor: [],
      sowOutdoor: ["August", "September"],
      transplant: [],
      harvest: ["December", "January"],
    },
  ]);

  return (
    <table className="w-full border-collapse border border-gray-400 bg-white text-sm dark:border-gray-500 dark:bg-gray-800">
      <thead className="bg-gray-50 dark:bg-gray-700">
        <tr>
          <th></th> {/* Empty cell for alignment with side headers */}
          {months.map((item, index) => (
            <th
              className="border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200"
              scope="col"
              key={index}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {plants.map((plant) => (
          <tr key={plant.name}>
            <PlantRow plant={plant} months={months} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
