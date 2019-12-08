import { connect } from 'react-redux';

import { setBureau } from 'src/store/reducer';

import Welcome from 'src/components/Welcome';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  setBureau: (b) => {
    dispatch(setBureau(b));
  },
});

const WelcomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);

export default WelcomeContainer;
