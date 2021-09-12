import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentPageNumber,
  getCurrentPageList,
  getNextPageNumber,
  getPreviousPageNumber,
  getTotalPages,
} from '~/store/getters/savelist';
import { fetchSavedCodes } from '~/tasks/savecodelist';
import { setCurrentPage } from '~/store/action/savelist';
import { getLanguageMap } from '~/store/getters/editor';

const Savelist = (props) => {
  const [query, setQuery] = React.useState('');
  const dispatch = useDispatch();
  const savelist = useSelector(getCurrentPageList());
  const currentPageNumber = useSelector(getCurrentPageNumber());
  const totalPages = useSelector(getTotalPages());
  const previousPage = useSelector(getPreviousPageNumber());
  const nextPage = useSelector(getNextPageNumber());
  const languageMap = useSelector(getLanguageMap());

  fetchSavedCodes(dispatch, currentPageNumber, query);

  function changePageNumber(page) {
    dispatch(setCurrentPage(page));
  }

  return (
    <>
      <div className="saved-list-section flex-1">
        <div>
          <div>
            <div className="io-header">Saved Codes</div>
            <div className="row no-gutters justify-content-between align-items-center my-lg-5 my-4">
              <div className="input-container flex-1">
                <input
                  value={query}
                  placeholder="Search code by filename"
                  type="text"
                  onChange={(e) => setQuery(e.target.value)}
                  className="transparent-input w-100"
                />
                <div className="input-container__icon">
                  <img src="https://minio.codingminutes.com/assets/search.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="table-container">
          <table className="w-100">
            <colgroup>
              <col className="main-key" />
              <col className="sub-key" />
              <col className="sub-key" />
            </colgroup>
            <thead>
              <tr>
                <th className="pb-3">Name</th>
                <th className="pb-3">Language</th>
                <th className="pb-3">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {savelist &&
                savelist.map((code) => (
                  <tr key={code.id}>
                    <td className="py-2">{code.title}</td>
                    <td className="py-2">{languageMap[code.lang]?.name}</td>
                    <td className="py-2">{code.updated_at}</td>
                    <a href={`http://ide.codingminutes/?id=${code.id}`} className="row-link"></a>
                  </tr>
                ))}
              <tr>
                <td className="py-2">Kuchh toh badi si bakchodi</td>
                <td className="py-2">Jai mata di ki jai krte hue</td>
                <td className="py-2">yo yo yo yo yo honey singh ooh</td>
                <a href={`kamaal`} className="row-link"></a>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="t-align-r saved-list-section__navigation row no-gutters">
          <button
            className="savelist-pagination-buttons"
            disabled={!previousPage}
            onClick={() => changePageNumber(previousPage)}
          >
            &lt; Prev
          </button>
          <div className="mx-lg-3 mx-2 page-count">
            Showing {currentPageNumber} of {totalPages}
          </div>
          <button
            className="savelist-pagination-buttons"
            disabled={!nextPage}
            onClick={() => changePageNumber(nextPage)}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default Savelist;
