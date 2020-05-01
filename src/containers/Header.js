import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Header from 'src/components/global/Header';

// Action Creators
import {
  selectedDevWebPage,
  selectedComPage,
  selectedCMPage,
  selectedContactPage,
  selectedFolioPage,
} from 'src/actions/headerAction';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  activCssFolioPage: state.header.activCssFolioPage,
  activCssDevWebPage: state.header.activCssDevWebPage,
  activCssCommunicationPage: state.header.activCssCommunicationPage,
  activCssCMPage: state.header.activCssCMPage,
  activCssContactPage: state.header.activCssContactPage,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  selectedFolioPageAction: () => {
    dispatch(selectedFolioPage());
  },
  selectedDevWebPageAction: () => {
    dispatch(selectedDevWebPage());
  },
  selectedComPageAction: () => {
    dispatch(selectedComPage());
  },
  selectedCMPageAction: () => {
    dispatch(selectedCMPage());
  },
  selectedContactPageAction: () => {
    dispatch(selectedContactPage());
  },

});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
