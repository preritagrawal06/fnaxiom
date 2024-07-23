import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center h-[70vh]">
        <div className="w-full md:w-[30%] flex flex-col items-center text-slate-200">
          <p className="text-xl font-semibold">Welcome to</p>
          <p className="text-3xl font-bold">FNAXIOM</p>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="p-2 rounded-full bg-orange-600 mt-4">
            <p className="text-sm text-white font-bold">GET STARTED</p>
          </div>
        </div>
      </div>
      <div className="card-section w-full flex flex-col md:flex-row px-10 py-4 items-center justify-center gap-4 mb-4">
        <Card header="Coding" subheader="Challenge"/>
        <Card header="Project" subheader="Submission"/>
        <Card header="Project" subheader="Quiz"/>
        <Card header="Live" subheader="Assessment"/>
        <Card header="Portfolio" subheader="Assessment"/>
      </div>
    </>
  );
}

export default App;
