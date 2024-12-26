import GroupCard from "./GroupCard";

const Group = () => {
  return (
    <div className="my-8">
      <h1 className="text-center text-xl md:text-3xl font-semibold md:font-bold">
        Do you feel bored learning alone?
      </h1>
      <p className="text-2xl text-center my-4">Explore Our Offers for group.</p>
      <div className="flex flex-col md:flex-row gap-4 md:justify-center items-center   space-y-2 mx-2 md:mx-0">
        <GroupCard
          group={2}
          offer={10}
          img="https://i.ibb.co/vVRyt3b/Rectangle-15.png"
        ></GroupCard>
        <GroupCard
          group={3}
          offer={20}
          img="https://i.ibb.co/f1Mg2DS/Rectangle-13.png"
        ></GroupCard>
        <GroupCard
          group={4}
          offer={30}
          img="https://i.ibb.co/jGHNKW8/Rectangle-9.png"
        ></GroupCard>
      </div>
    </div>
  );
};

export default Group;
