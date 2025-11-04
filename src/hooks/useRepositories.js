import { useState, useEffect, useCallback } from 'react';
import { fetchRepositories } from '../utils/api';

const useRepositories = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // Using fixed date as per requirements (2024-07-15 as current date)
  const getTenDaysAgo = () => {
    // For the assessment, we'll use the fixed date from requirements
    // In a real app, you might want to calculate dynamically:
    // const date = new Date('2024-07-15');
    // date.setDate(date.getDate() - 10);
    // return date.toISOString().split('T')[0];
    
    return '2024-07-05'; // 10 days before 2024-07-15
  };

  const loadRepositories = useCallback(async (pageNum = 1, append = false) => {
    if (loading) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const date = getTenDaysAgo();
      const data = await fetchRepositories(date, pageNum);
      
      if (data && data.items) {
        if (append) {
          setRepos(prevRepos => [...prevRepos, ...data.items]);
        } else {
          setRepos(data.items);
        }
        
        // GitHub API returns max 1000 results (about 34 pages with 30 items per page)
        const maxPages = Math.min(34, Math.ceil(data.total_count / 30));
        setHasMore(pageNum < maxPages && data.items.length > 0);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  const loadMore = useCallback(() => {
    if (hasMore && !loading) {
      const nextPage = page + 1;
      setPage(nextPage);
      loadRepositories(nextPage, true);
    }
  }, [page, hasMore, loading, loadRepositories]);

  // Load initial data
  useEffect(() => {
    loadRepositories(1, false);
  }, [loadRepositories]);

  return {
    repos,
    loading,
    error,
    hasMore,
    loadMore
  };
};

export default useRepositories;