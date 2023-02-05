import React from "react";
import PhotoEntry from "./PhotoEntry";


class Album extends React.Component{
    render(){
        return(
            <div className="flex-container">
            <PhotoEntry src="BadshahiMosque.jpeg" location="Lahore, Pakistan" caption="Badshahi Mosque"/>
            <PhotoEntry src="ShahFaisalMasjid.jpeg" location="Islamabad, Pakistan" caption="Shah Faisal Masjid"/>
            <PhotoEntry src="Mazar-e-Quaid.jpeg" location="Karachi, Pakistan" caption="Badshahi Mosque"/>
            <PhotoEntry src="RohtasFOrt.jpeg" location="Dina, Jhelum, Pakistan" caption="Badshahi Mosque"/>
            <PhotoEntry src="HannahLake.jpg" location="Quetta, Balochistan" caption="Badshahi Mosque"/>
            <PhotoEntry src="BalaHisarFort.jpeg" location="Peshawar, Khyber Pakhtunkhwa" caption="Badshahi Mosque"/>
            </div>
        )
    }
}

export default Album;