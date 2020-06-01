//Action generator for setTextFilter
export const setTextFilter = (text = ' ') => ({
    type:'SET_TEXT_FILTER',
    text
})

//Action generator for sort by Amouna and Date
export const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT',
})
export const sortByDate = () => ({
    type:'SORT_BY_DATE',
})

//Action Generators for set start date and end date.
export const setStartDate = (startDate) => ({
    type:'SET_START_DATE',
    startDate
})

export const setEndDate = (endDate) => ({
    type:'SET_END_DATE',
    endDate
})