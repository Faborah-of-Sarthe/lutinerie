import React from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps";
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

import './map.sass';


class Map extends React.Component {
    componentDidUpdate() {
        ReactTooltip.rebuild()
    }

    render() {
        const {points} = this.props;
        const geoUrl = require('./map.json');
        return (
            <div className="map-area">
              <ComposableMap
                projection={'geoMercator'}
                width={980}
                height={450}
                style={{
                    width: "100%",
                    height: "auto"
                }}
              >
                <ZoomableGroup center={[0, 20]} disablePanning>
                    <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geography => (
                            <Geography
                            key={geography.rsmKey}
                            geography={geography}
                            style={{
                                default: {
                                    fill: "#f3f4f6",
                                    outline: "none",
                                    stroke: "#f3f4f6"
                                },
                                hover: {
                                    fill: "#f3f4f6",
                                    outline: "none",
                                    stroke: "#f3f4f6"
                                },
                                pressed: {
                                    fill: "#f3f4f6",
                                    outline: "none",
                                    stroke: "#f3f4f6"
                                }
                            }}
                            />
                            ))
                        }
                    </Geographies>
                    {points.map(({ slug, label, repaired, latitude, longitude }) => (
                        <Link to={`/point/${slug}`} key={`${slug}_link`}>
                            <Marker key={slug} coordinates={[longitude,latitude]}>
                                <circle data-tip={label} r={10} fill={(repaired != "1") ? '#ba322c': '#1d4431'} />
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
