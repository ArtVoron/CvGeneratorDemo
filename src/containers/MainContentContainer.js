import { connect } from "react-redux";

import { MainContent } from "../pages/MainContent";
import {
  createCV,
  editCV,
  deleteCV,
  printCV,
  previewCV,
} from "../redux/actions/actions";

const cvs = (state) => ({
  cvs: state.cvs,
});

export default connect(cvs, { createCV, editCV, deleteCV, printCV, previewCV })(
  MainContent
);
