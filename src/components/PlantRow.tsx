interface PlantDetails {
  name: string;
  sowIndoor: string[];
  sowOutdoor: string[];
  transplant: string[];
  harvest: string[];
}

interface Month {
  [index: number]: string;
}

interface Props {
  plant: PlantDetails;
  months: Month[];
}

const PlantRow = ({ plant, months }: Props) => {
  return (
    <>
      <th
        className="border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200"
        scope="row"
      >
        {plant.name}
      </th>
      {Object.keys(months).map((month) => {
        <td key={month}></td>;
      })}
    </>
  );
};

export default PlantRow;
