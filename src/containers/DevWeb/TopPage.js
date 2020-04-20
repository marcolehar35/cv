import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import TopPage from 'src/components/DevWeb/TopPage';

// Action Creators
import {
  changeTooltipHobby,
  changeCount,
} from 'src/actions/topPageAction';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  hobby: state.topPage.hobby,
  count: state.topPage.count,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  changeTooltipHobbyAction: (hobbyOrdered) => {
    dispatch(changeTooltipHobby(hobbyOrdered));
  },
  changeCountAction: (setCount) => {
    dispatch(changeCount(setCount));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const TopPageContainer = connect(mapStateToProps, mapDispatchToProps)(TopPage);

export default TopPageContainer;
