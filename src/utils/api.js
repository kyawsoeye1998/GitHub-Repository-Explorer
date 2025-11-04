// GitHub API utility functions

const GITHUB_API_BASE = 'https://api.github.com';

export const fetchRepositories = async (date, page = 1) => {
  // Using the exact URL structure from requirements
  const url = `${GITHUB_API_BASE}/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      // Handle rate limiting - GitHub API has strict limits
      if (response.status === 403) {
        const resetTime = response.headers.get('X-RateLimit-Reset');
        const remaining = response.headers.get('X-RateLimit-Remaining');
        
        if (remaining === '0') {
          const waitTime = resetTime ? Math.ceil((resetTime * 1000 - Date.now()) / 1000) : 60;
          throw new Error(`GitHub API rate limit exceeded. Please try again in ${waitTime} seconds.`);
        }
      }
      
      // Handle other API errors
      if (response.status === 422) {
        throw new Error('Invalid query parameters. Please check the date format.');
      }
      
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};

// Helper function to get the API URL for debugging
export const getApiUrl = (date, page = 1) => {
  return `${GITHUB_API_BASE}/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`;
};