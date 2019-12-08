import React from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps";
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

class Map extends React.Component {
    componentDidUpdate() {
        ReactTooltip.rebuild()
    }

    render() {
        const {points} = this.props;
        return (

            <div>
            <ComposableMap
            projection={'geoMercator'}
            width={980}
            height={500}
            style={{
                width: "100%",
                height: "auto"
            }}
            >
            <ZoomableGroup center={[0, 0]} disablePanning>
                <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map(geography => (
                        <Geography
                        key={geography.rsmKey}
                        geography={geography}
                        style={{
                            default: {
                                fill: "#DDD",
                                outline: "none",
                                stroke: "#FFF"
                            },
                            hover: {
                                fill: "#DDD",
                                outline: "none",
                                stroke: "#FFF"
                            },
                            pressed: {
                                fill: "#DDD",
                                outline: "none",
                                stroke: "#FFF"
                            }
                        }}
                        />
                        ))
                    }
                </Geographies>
                {points.map(({ slug, label, repaired, latitude, longitude }) => (
                    <Link to={`/point/${slug}`} key={`${label}_link`}>
                        <Marker   key={label} coordinates={[longitude,latitude]}> 
                            <circle data-tip={label} r={10} fill={(repaired != "1") ? '#F00': '#0F0'} />

                        </Marker>
                    </Link>
                ))}
            </ZoomableGroup>
            </ComposableMap>
            <ReactTooltip />
            </div>
        )
    };
};

export default Map;
