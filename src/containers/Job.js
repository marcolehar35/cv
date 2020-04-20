import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Job from 'src/components/Job';

// Action Creators
import {
  getJobFromSlug,
} from 'src/selectors/urls';

// == Data / state
const mapStateToProps = (state, ownProps) => ({
  // ownProps contient les props posées sur le container
  // En passant par Route, le props va contenir toutes les infos liées à la route
  // history, match, location...
  // Nous voulons recup seulement les infos de match (slug)
  const { slug } = ownProps.match.params;
  return {
    // j'utilise un selector pour trouver la recette correspondante au slug
    recipe: getJobFromSlug(state.jobs.listJobs, slug),
  };
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  selectedDevWebPageAction: () => {
    dispatch(selectedDevWebPage());
  },
  selectedComPageAction: () => {
    dispatch(selectedComPage());
  },
  selectedCMPageAction: () => {
    dispatch(selectedCMPage());
  },
  selectedContactPagAction: () => {
    dispatch(selectedContactPage());
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const JobContainer = connect(mapStateToProps, mapDispatchToProps)(Job);

export default JobContainer;
