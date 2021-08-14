export const getCurrentPageNumber = () => (state) => state.savelist.page;
export const getCurrentPageList = () => (state) => state.savelist.codes;
export const getNextPageNumber = () => (state) => state.savelist.next;
export const getPreviousPageNumber = () => (state) => state.savelist.previous;
export const getTotalPages = () => (state) => state.savelist.total_pages;
export const getCodesCount = () => (state) => state.savelist.count;
