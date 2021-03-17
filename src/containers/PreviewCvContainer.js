import { connect } from "react-redux";

import { PreviewCV } from "../pages/PreviewCV";
import { printCV } from "../redux/actions/actions";

const mapStateToProps = (state, ownProps) => {
  return { cv: state.cvs.find((c) => c.id === ownProps.match.params.id) };
};

export default connect(mapStateToProps, { printCV })(PreviewCV);
