import { connect } from 'react-redux';


import Detector from 'src/components/Sartrouville/detector';
import { getPoint } from '../../store/reducer';

const mapStateToProps = (state, ownProps) => ({
  point: getPoint(state, ownProps.slug),
});

const mapDispatchToProps = (dispatch) => ({

});

const DetectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detector);

export default DetectorContainer;
