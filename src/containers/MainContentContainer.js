import { connect } from "react-redux";

// import { CreateCvModal } from "../components/modals/CreateCvModal";
import { MainContent } from "../pages/MainContent";
import { createCV } from "../redux/actions/actions";

const listCvs = (state) => ({
  listCvs: state,
});

export default connect(listCvs, { createCV })(MainContent);
