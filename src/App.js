import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  console.log({ data });

  useEffect(() => {
    if(dataType === "") return
    fetch(`https://swapi.dev/api/${dataType}/`)
    .then(response => response.json())
    .then(res => {
      console.log(res)
      setData(res)
    })
  }, [dataType])

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
