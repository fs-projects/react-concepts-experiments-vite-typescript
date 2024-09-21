import React, {useState} from "react";

export const DropDownProblem = () => {
    const [pDataDetail, setPDataDetail] = useState([{
        name: "India",
        id: "IND",
        cities: ["New Delhi", "Hyderabad", "Bangalore", "Gurugram"]
    }]);
    const [pData, setPData] = useState([{
        name: "India",
        id: "IND",
        cities: ["New Delhi", "Hyderabad", "Bangalore", "Gurugram"]
    },
    {
        name: "United States of America",
        id: "US",
        cities: ["Wyoming", "New York", "Texas", "California"]
    },
    {
        name: "Sri Lanka",
        id: "SLA",
        cities: ["SL1", "SL2", "SL3", "SL4"]
    },
    {
        name: "Nepal",
        id: "NP",
        cities: ["NP1", "NP2", "NP3", "NP4"]
    }]);
    const handleCountry = (e) => {
        const idSelected = e.target.value;
        const idSelectedData = pData.filter(pData => pData.id === idSelected);
        const pDataDetailUpdated = [{
            cities: idSelectedData[0].cities,
            id: idSelectedData[0].id,
            name: idSelectedData[0].name
        }]
        setPDataDetail(pDataDetailUpdated);
    }
    return (
        <>
        <label name="countries" for="countries">Choose a value to see it's sub value in other drop down:</label>
            <div>
            <select id="countries" onChange={(e) => handleCountry(e)}>
                {pData.map(pdData => {
                    return (
                        <option key={pdData.id} value={pdData.id}>{pdData.name}</option>
                    )
                })}
            </select>
            </div>
        <label name="cities" for="cities">Value contained in selected drop down:</label>
            <div>
                <select id="cities">
                {pDataDetail[0]?.cities?.map(city => {
                    return (
                        <option key={pDataDetail.id} value={pDataDetail.name}>{city}</option>
                    )
                })}
                </select>
            </div>
        </>
    )
}

export default DropDownProblem;