import React, { useState } from "react";

const Tabledata = () => {
    const data = [
        {id: 1, name: "pavani", age: 20, dept: "csm", place:"Hyd"},
        {id: 2, name:"sai varsha", age: 24, dept: "cse", place: "Tpt"},
        {id: 3, name:"shravani", age: 25, dept:"ece", place: "bnglr"},
        {id: 4, name:"sravya", age:27, dept:"IT", place: "chennai"},
        {id: 5, name:"harika", age: 29, dept:"civil", place: "pune"},
        {id: 6, name:"lathika", age: 39, dept: "mech", place: "ndk"},
        {id: 7, name:"devika", age: 40, dept:"csc", place: "gurgon"},
        {id: 8, name:"Thushya", age: 17, dept:"Aid", place: "Hyd"},
        {id: 9, name:"rishika", age: 20, dept:"csd", place: "buvaneswar"},
        {id: 10, name:"karthik", age: 26, dept:"eee", place:"Hyd"}
    ];
    const [searchdata, setsearchdata] = useState("");

    const handleChange = (event) => {
        setsearchdata(event.target.value);
    };

    const filtereddata = data.filter((item) => 
        item.name.toLowerCase().includes(searchdata.toLowerCase())
    );
    return (
        <>
        <div>
            <input type="text" id="search" 
            name="search"
            placeholder="Search By Name" 
            value={searchdata} 
            onChange={handleChange}  style= {{ marginLeft:"0px", textAlign:"left"}}/>
            <table border="2px">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                        <th>Place</th>
                    </tr>
                </thead>
                <tbody>
                    {filtereddata.map((data1) => (
                        <tr>
                            <td>{data1.id}</td>
                            <td>{data1.name}</td>
                            <td>{data1.age}</td>
                            <td>{data1.dept}</td>
                            <td>{data1.place}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Tabledata;
