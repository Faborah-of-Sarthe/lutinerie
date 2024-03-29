import { connect } from 'react-redux';

import Dashboard from 'src/components/Dashboard';

const mapStateToProps = (state) => ({
  points: state.app.points,
});

const mapDispatchToProps = {};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

export default DashboardContainer;
