import logo from './logo.svg';
import './App.css';
import "./style.css";
import { useRef } from "react";
import jsPDF from "jspdf";
import ReportTemplate from "./ReportTemplate";
function App() {
  const reportTemplateRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px"
    });

    // Adding the fonts
    doc.setFont("Inter-Regular", "normal");

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
      }
    });
  };

  return (
    <div>
      <button className="button" onClick={handleGeneratePdf}>
        Generate PDF
      </button>
      <div ref={reportTemplateRef}>
        <ReportTemplate />
        
      </div>
      <input type="text"/>
    </div>
  );
}

  // return (
  //   <div className="App">
    
  //   </div>
  // );


export default App;
