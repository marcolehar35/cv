import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import DevWeb from 'src/components/DevWeb';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  titleExp: state.devWeb.titleExp,
  experiences: state.devWeb.experiences,
  titleSkills: state.devWeb.titleSkills,
  skills: state.devWeb.skills,
  titleFormation: state.devWeb.titleFormation,
  learning: state.devWeb.learning,
  titlePortfolio: state.devWeb.titlePorfolio,
  projets: state.devWeb.projets,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = () => ({
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const DevWebContainer = connect(mapStateToProps, mapDispatchToProps)(DevWeb);

export default DevWebContainer;
