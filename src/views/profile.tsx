import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Banner } from '~/components/layout/banner';
import { ScreenSizeModal } from '~/components/layout/screen-size-modal';
import { isBannerVisible } from '~/store/getters/ui';
import { Navbar } from '~/components/layout/navbar';
import {
  getCurrentPageNumber,
  getCurrentPageList,
  getNextPageNumber,
  getPreviousPageNumber,
  getTotalPages,
} from '~/store/getters/savelist';
import { fetchSavedCodes } from '~/tasks/savecodelist';
import { setCurrentPage } from '~/store/action/savelist';
export const ProfileView: React.FC = () => {
  const [query, setQuery] = React.useState('');
  const dispatch = useDispatch();
  const savelist = useSelector(getCurrentPageList());
  const currentPageNumber = useSelector(getCurrentPageNumber());
  const totalPages = useSelector(getTotalPages());
  const previousPage = useSelector(getPreviousPageNumber());
  const nextPage = useSelector(getNextPageNumber());

  fetchSavedCodes(dispatch, currentPageNumber, query);

  function changePageNumber(page) {
    dispatch(setCurrentPage(page));
  }

  return (
    <>
      <div className="ide-container ide-container--dark">
        {/* {showBanner && <Banner content={bannerContent.content} link={bannerContent.link} />} */}
        <ScreenSizeModal />
        <Navbar />
        <div className="main-container row no-gutters">
          <div>
            <div>
              <h3>Saved Codes</h3>
              <input
                value={query}
                placeholder="Search code by filename"
                type="text"
                onChange={(e) => setQuery(e.target.value)}
              />
              {previousPage && (
                <span onClick={() => changePageNumber(previousPage)}> &lt; Prev</span>
              )}
              <p>
                Showing {currentPageNumber} of {totalPages}
              </p>
              {nextPage && <span onClick={() => changePageNumber(nextPage)}>Next &gt;</span>}
            </div>
          </div>

          <div>
            <table>
              <thead>
                <tr>
                  <th>Name of File</th>
                  <th>Language used</th>
                  <th>Date Created</th>
                  <th>Date Updated</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {savelist &&
                  savelist.map((code) => (
                    <tr key={code.id}>
                      <td>{code.title}</td>
                      <td>{code.lang}</td>
                      <td>{code.created_at}</td>
                      <td>{code.updated_at}</td>
                      <td>
                        <a href={`http://ide.codingminutes/?id=${code.id}`}>View Code</a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
