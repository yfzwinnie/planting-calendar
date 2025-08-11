interface PlantDetails {
  name: string;
  sowIndoor: string[];
  sowOutdoor: string[];
  transplant: string[];
  harvest: string[];
}

interface Props {
  plant: PlantDetails;
  months: string[];
}

const PlantRow = ({ plant, months }: Props) => {
  const colorCell = (plant: PlantDetails, month: string) => {
    if (plant.sowIndoor.includes(month)) {
      return "bg-red-100 dark:bg-red-800";
    } else if (plant.sowOutdoor.includes(month)) {
      return "bg-green-100 dark:bg-green-800";
    } else if (plant.transplant.includes(month)) {
      return "bg-gray-100 dark:bg-gray-800";
    } else if (plant.harvest.includes(month)) {
      return "bg-yellow-100 dark:bg-yellow-800";
    } else {
      return "bg-white dark:bg-gray-900";
    }
  };

  return (
    <>
      <th
        className="border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200"
        scope="row"
      >
        {plant.name}
      </th>
      {months.map((month) => (
        <td key={month} className={colorCell(plant, month)}></td>
      ))}
    </>
  );
};

export default PlantRow;
