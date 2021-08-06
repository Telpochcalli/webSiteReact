import React,{Component} from 'react';
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';




class Location extends Component{
    constructor(props){
        super(props);
        this.state = {
            position:[19.359764,-99.258504],
            height:300,
            message:"We are located at: Instituto Tecnologico de Estudios Superiores de Monterrey (ITESM) Campus Santa Fe.",
            street: "Av Carlos Lazo 100, Santa Fe, La Loma, Álvaro Obregón, 01389 Ciudad de México, CDMX"
        }
    }
    render(){
        return(
        <MapContainer center={this.state.position} zoom={13} scrollWheelZoom={false} style={{height:this.state.height}}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={this.state.position}>
                <Popup>
                    {this.state.message} <br /><br /> {this.state.street}
                </Popup>
            </Marker>
        </MapContainer>
    )}
}
export default Location;