import React, {useEffect, useState} from 'react';
import './App.css';
import ReactJSX from './components/ReactJSX';
import TextInput from './elements/TextInput';
import TextView from './elements/TextView';

function App() {

  const [notFound, setNotFound] = useState('none')

  const [search, setSearch] = useState([])

  const [data, fetchData] = useState([])

  const submitHandler = (event) => {
    const filterData = data.filter(data => {
      if (event.target.value !== "") 
      {
        console.log(event.target.value);
        return data.nim.toString().toLowerCase() == event.target.value || data.nama_panggilan.toLowerCase().includes(event.target.value.toLowerCase()) || data.nama_lengkap.toLowerCase().includes(event.target.value.toLowerCase())
      }        
      else 
      {
        return "Not Found"
      }
      
    }  
    )

    if (filterData.length > 0) {
      // Hide Not Found Text
      setNotFound('none')

      const result = [];
      filterData.forEach(data => (
        result.push(
        <ReactJSX dataAegis={data} />
        )
      ))

      setSearch(result)
    } else {
      // Show Not Found Text
      setNotFound('block')

      //  emptying search result data
      setSearch([])
    }
  }

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(json => {
        fetchData(json.datalist)
      })
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="Components">

            <TextInput border="red" placeholder="Nama" onChange={submitHandler}/>

          </div>
          { console.log(notFound) }
            <TextView display={notFound}>Data Not Found</TextView>
          <h4>{search}</h4>
       
      </header>
    </div>
  );
}

export default App;