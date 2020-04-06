// Types
export const SELECTED_DEV_WEB_PAGE = 'SELECTED_DEV_WEB_PAGE';
export const SELECTED_COM_PAGE = 'SELECTED_COM_PAGE';
export const SELECTED_CM_PAGE = 'SELECTED_CM_PAGE';
export const SELECTED_CONTACT_PAGE = 'SELECTED_CONTACT_PAGE';

// Creators
export const selectedDevWebPage = () => ({
  type: SELECTED_DEV_WEB_PAGE,
});

export const selectedComPage = () => ({
  type: SELECTED_COM_PAGE,
});

export const selectedCMPage = () => ({
  type: SELECTED_CM_PAGE,
});

export const selectedContactPage = () => ({
  type: SELECTED_CONTACT_PAGE,
});
