import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { PreviewCV } from "../pages/PreviewCV";
import { printCV } from "../redux/actions/actions";

const cv = (state) => {
  const params = useParams();
  return { cv: state.cvs.find((c) => c.id === params.id) };
};

export default connect(cv, { printCV })(PreviewCV);
