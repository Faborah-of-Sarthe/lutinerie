import React from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps";
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import Final from '../Final'
import './map.sass';


class Map extends React.Component {

    state = {
        mapComplete: false,
    }

    componentDidUpdate() {
        ReactTooltip.rebuild()
    }

    componentDidMount(){
        const { points } = this.props;

        let mapComplete = points.some(e => e.repaired == '0');

        this.setState({
            mapComplete: !mapComplete
        })
    }

    render() {
        const {points} = this.props;
        const geoUrl = require('./map.json');
        return (
            <div className="map-area">
                { this.state.mapComplete && <Final />}
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
                          { (slug == 'stpetersbourg' && repaired != "1") ? (
                            <Marker key={slug} coordinates={[74,50]}>
                                <circle data-tip={label} r={10} fill={(repaired != "1") ? '#ba322c': '#1d4431'} />
                            </Marker>
                          ) : (
                            <Marker key={slug} coordinates={[longitude,latitude]}>
                                <circle data-tip={label} r={10} fill={(repaired != "1") ? '#ba322c': '#1d4431'} />
                            </Marker>
                          ) }
                        </Link>
                    ))}
                </ZoomableGroup>

              </ComposableMap>
              <h1 class="footer">Récapitulatif de la mission : rétablir les points stratégiques pour que le Père Noël puisse assurer sa livraison.</h1>
              <ReactTooltip />
            </div>
        )
    };
};

export default Map;
