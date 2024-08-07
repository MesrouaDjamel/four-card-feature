import Card from './Card';

const ListCard = () => {
  return (
    <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2
                       xl:grid-rows-2 xl:grid-cols-3"
    >
      <div className="xl:row-start-2 xl:translate-y-[-140px] xl:place-self-center ">
        <Card
          title="Supervisor"
          desc="Monitors activity to identify project roadblocks"
          linerColor="bg-Cyan"
          icon="/icon-supervisor.svg"
        />
      </div>

      <div className="xl:col-start-2 ">
        <Card
          title="Team Builder"
          desc="Scan our talent network to create the optimal team for your project"
          linerColor="bg-Red"
          icon="/icon-team-builder.svg"
        />
      </div>

      <div className="xl:col-start-2 xl:row-start-2 ">
        <Card
          title="Evaluation"
          desc="Regularly evaluate our talent to ensure quality"
          linerColor="bg-Orange"
          icon="/icon-karma.svg"
        />
      </div>

      <div className="xl:row-start-2 xl:translate-y-[-140px] xl:col-start-3 xl:self-start">
        <Card
          title="Calculator"
          desc="Uses data from past projects to provide better delivery estimates"
          linerColor="bg-Blue"
          icon="/icon-calculator.svg"
        />
      </div>
    </div>
  );
}

export default ListCard