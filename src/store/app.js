let quiz_data = require('../data/appData.json');
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialState = {
    darkMode: isDarkMode,
    data: quiz_data,
    selectedTabIndex: 0,
    scoreBoard: {
        points: 0,
        selectedOptions: {}
    }
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case OPTION_CHANGED:

            let newSelectedOptions = Object.assign({}, state.scoreBoard.selectedOptions);
            newSelectedOptions[action.payload.category] = {
                option: action.payload.option,
                points: action.payload.points
            };

            let newSelectedTabIndex = (state.selectedTabIndex + 1) <= (quiz_data.length - 1) ? (state.selectedTabIndex + 1) : (quiz_data.length - 1);

            let newTotal = Object.keys(newSelectedOptions).reduce((accumulator, value) => {
                return accumulator += newSelectedOptions[value].points;
            }, 0);

            return {
                ...state,
                selectedTabIndex: newSelectedTabIndex,
                scoreBoard: { ...state.scoreBoard, points: newTotal, selectedOptions: newSelectedOptions }
            }
        case DARKMODE_CHANGED:
            return { ...state, darkMode: action.payload };
        case SELECTEDCATEGORYTAB_CHANGED:
            return { ...state, selectedTabIndex: action.payload };
        default:
            return state;
    }
}

// selectors
export const getTotalPoints = (state) => state.app.scoreBoard.points;
export const getData = (state) => state.app.data;
export const getDarkModePreference = (state) => state.app.darkMode;
export const getSelectedOptions = (state) => state.app.scoreBoard.selectedOptions;
export const getSelectedTabIndex = (state) => state.app.selectedTabIndex;

// action types
export const OPTION_CHANGED = "app/optionChanged";
export const DARKMODE_CHANGED = "app/darkModeChanged";
export const SELECTEDCATEGORYTAB_CHANGED = "app/selectedCategoryTabChanged";

// action creators
export const selectOption = (option) => ({
    type: OPTION_CHANGED,
    payload: option
});

export const changeDarkMode = (isDarkMode) => ({
    type: DARKMODE_CHANGED,
    payload: isDarkMode
});

export const changeSelectedCategoryTab = (newSelectedTabIndex) => ({
    type: SELECTEDCATEGORYTAB_CHANGED,
    payload: newSelectedTabIndex
});
