import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import PortFolioPage from 'src/components/PortFolioPage';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  titlePortfolio: state.portFolio.titlePorfolio,
  projets: state.portFolio.projets,
  titleComPortfolio: state.portFolio.titleComPorfolio,
  projetsCom: state.portFolio.projetsCom,
  titleTopPage: state.portFolio.titleTopPage,
  link: state.portFolio.titleTopPage,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = () => ({
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const PortFolioPageContainer = connect(mapStateToProps, mapDispatchToProps)(PortFolioPage);

export default PortFolioPageContainer;
