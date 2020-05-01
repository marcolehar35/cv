import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import ChargeCom from 'src/components/ChargeCom';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  titleExp: state.chargeCom.titleExp,
  experiences: state.chargeCom.experiences,
  titleSkills: state.chargeCom.titleSkills,
  skills: state.chargeCom.skills,
  titleFormation: state.chargeCom.titleFormation,
  learning: state.chargeCom.learning,
  titlePortfolio: state.chargeCom.titlePorfolio,
  projets: state.chargeCom.projets,
  titleTopPage: state.chargeCom.titleTopPage,
  link: state.chargeCom.link,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = () => ({
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const ChargeComContainer = connect(mapStateToProps, mapDispatchToProps)(ChargeCom);

export default ChargeComContainer;
