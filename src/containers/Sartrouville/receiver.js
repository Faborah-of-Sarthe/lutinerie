import { connect } from 'react-redux';


import Receiver from 'src/components/Sartrouville/receiver';
import { getPoint } from '../../store/reducer';

const mapStateToProps = (state, ownProps) => ({
  point: getPoint(state.app, ownProps.slug),
});

const mapDispatchToProps = (dispatch) => ({

});

const ReceiverContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Receiver);

export default ReceiverContainer;
