import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  bureau: state.bureau
});

const mapDispatchToProps = {};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
