import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 43.69780506445264,
    lng: -79.40209853058599,
  },
  zoom: 11,
}

//make pin text more readable
const style = {
    color:'red',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'underline'
}
//use this to add pin marker to locations
const AnyReactComponent = ({ text }) => <div style={style}>{text}</div>

const GoogleMap = () => (
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      //dummy api
      //bootstrapURLKeys={{ key: 'AIzaSyD2qsgKZzbCiuLuqVcC6HVE-1L1BpMJUAU' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={43.69780506445264}
        lng={-79.40209853058599}
        text={'Audbren Location'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap