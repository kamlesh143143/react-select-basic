import React, { useState,useEffect } from 'react';
import './App.css';
import Select from 'react-select';

const App = () => {

    const [zipcodes,setZipcodes] = useState([]);

    useEffect(() => {
        let zips =[];
        for(let i= 1001; i <= 1100;i++)
            zips.push({label:i, value:i});
        setZipcodes(zips);
    },[])
    


    const [zipcode, setZipcode]  = useState(null); 

    let search = '';

    const searchZip = e => {
       if([1,2,3,4,5,6,7,8,9,0].includes(parseInt(e.key))){
        search = search + e.key;
        if(search.length >= 4)
            console.log(search);
        }
    }

    const handleChange = e => {
        console.log(e.value);
        setZipcode(e.value);
    }

    useEffect(() => {
        setZipcode(search)
    },[zipcode]);



    return (
        <div>
            <Select
                className="form-control"
                isDisabled={false}
                defaultValue={zipcodes[0]}
                isClearable={true}
                isSearchable={true}
                value={zipcode}
                name="zip"
                pattern="[0-9]" 
                onChange={handleChange}
                onKeyDown={searchZip}
                options={zipcodes}
            />
        </div>
    );
}

export default App;