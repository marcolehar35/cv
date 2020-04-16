// Types
export const CHANGE_TOOLTIP_HOBBY = 'CHANGE_TOOLTIP_HOBBY';

export const CHANGE_COUNT = 'CHANGE_COUNT';

// Creators
export const changeTooltipHobby = (hobbyOrdered) => ({
  type: CHANGE_TOOLTIP_HOBBY,
  hobbyOrdered,
});

export const changeCount = (setcount) => ({
  type: CHANGE_COUNT,
  setcount,
});
