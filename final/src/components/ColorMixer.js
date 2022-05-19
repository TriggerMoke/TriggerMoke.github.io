import { useState } from "react";
import { ReactDOM } from "react";

function ColorMixer(){
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    var result = 0;

    return(
        <form>
            <label>Set Hex one:   
                <input
                    type="text"
                    value={one}
                    onChange={(e) => setOne(e.target.value)}
                />
            </label>
            <label>    Set Hex two:  
                <input
                    type="text"
                    value={two}
                    onChange={(e) => setTwo(e.target.value)}
                />
            </label>
            
            <p>Output: {one + two}</p>
        </form>
    );
}

export default ColorMixer;