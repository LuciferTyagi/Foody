import react from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

const Practice = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch(`https://nominatim.openstreetmap.org/search?q=${value}&format=json`)
            .then((response) => response.json())
            .then(json => {
                // console.log(json);
                const results = json.filter((city) => {
                    return value &&
                        city.display_name &&
                        city.display_name.toLowerCase().includes(value)
                })
                // console.log(results);
                setResults(results);
            })

    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    return (
        <div className="hero-section min-h-screen py-0 px-48 flex justify-between items-center bg-slate-200 ">
            <div className="search  relative mt-[10rem] min-w-150 h-12 rounded overflow-hidden my-9 mx-0 w-2/5">
                <input type="text" className="search-box w-full h-full bg-white border-none py-4 px-6 outline-none text-sm" placeholder=" Enter your location.."
                    value={input}
                    onChange={(e) => handleChange(e.target.value)} />
                <button className="search-btn text-sm  transition duration-500 hover:bg-teal-800 absolute border-none right-0 w-16 h-full bg-white text-center cursor-pointer text-teal-300">
                    <FontAwesomeIcon icon={faLocationCrosshairs} />
                </button>
            </div>
        </div>

    )
}


export default Practice;