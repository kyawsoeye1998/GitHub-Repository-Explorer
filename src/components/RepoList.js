import React, { useEffect, useRef } from 'react';
import RepoCard from './RepoCard';
import LoadingSpinner from './LoadingSpinner';
import useRepositories from '../hooks/useRepositories';

const RepoList = () => {
  const { repos, loading, error, hasMore, loadMore } = useRepositories();
  const observerRef = useRef();
  const lastRepoRef = useRef();

  // Set up intersection observer for infinite scroll
  useEffect(() => {
    if (loading) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });

    if (lastRepoRef.current) {
      observerRef.current.observe(lastRepoRef.current);
    }
  }, [loading, hasMore, loadMore]);

  if (error) {
    return (
      <div className="error-message">
        <p>Error loading repositories: {error}</p>
      </div>
    );
  }

  return (
    <div className="repo-list">
      {repos.length === 0 && !loading ? (
        <div className="empty-state">
          <div className="empty-state-icon">📭</div>
          <p>No repositories found</p>
        </div>
      ) : (
        <>
          {repos.map((repo, index) => {
            if (index === repos.length - 1) {
              return (
                <div key={repo.id} ref={lastRepoRef}>
                  <RepoCard repo={repo} />
                </div>
              );
            }
            return <RepoCard key={repo.id} repo={repo} />;
          })}
          
          {loading && <LoadingSpinner />}
          
          {!hasMore && repos.length > 0 && (
            <div className="empty-state">
              <p>All repositories loaded</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RepoList;