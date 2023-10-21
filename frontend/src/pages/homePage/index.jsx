import { DashboardComponents } from "../../components";

function Dashboard() {
  return (
    <DashboardComponents
      OwnerName={"Deffi"}
      urlApi={"https://us-central1-revou-fullstack-2.cloudfunctions.net/week_17_defficharlina"}
    />
  );
}

export default Dashboard;
