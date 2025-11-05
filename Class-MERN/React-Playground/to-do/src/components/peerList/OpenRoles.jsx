import JobCard from "./JobCard";



function OpenRoles(props) {
  return (
    <div className="bg-white h-[600px] w-[300px]">
      <div className="flex justify-between align-center">
        <h1>OpenRoles</h1>
        <p>{"->"}</p>
      </div>
      <div>
        {props.roles.map((element,index) => (
          <JobCard key={index} jobTitle={element}  />
        ))}
      </div>
    </div>
  );
}

export default OpenRoles;
