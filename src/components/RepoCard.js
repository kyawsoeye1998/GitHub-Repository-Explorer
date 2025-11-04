import React from 'react';

const RepoCard = ({ repo }) => {
  // Format the date to match GitHub's format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="repo-card">
      <div className="repo-header">
        <div className="repo-title-section">
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="repo-name"
          >
            {repo.full_name || repo.name}
          </a>
          <span className="repo-visibility">
            {repo.private ? 'Private' : 'Public'}
          </span>
        </div>
        <div className="repo-stats">
          <div className="repo-stars">
            <span className="star-icon">★</span>
            {repo.stargazers_count.toLocaleString()}
          </div>
        </div>
      </div>
      
      {repo.description && (
        <p className="repo-description">{repo.description}</p>
      )}
      
      <div className="repo-footer">
        <div className="owner-info">
          <img 
            src={repo.owner.avatar_url} 
            alt={`${repo.owner.login} avatar`} 
            className="owner-avatar"
          />
          <a 
            href={repo.owner.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="owner-name"
          >
            {repo.owner.login}
          </a>
        </div>
        
        <div className="repo-meta">
          {repo.language && (
            <span className="repo-language">
              <span 
                className="language-color" 
                style={{backgroundColor: getLanguageColor(repo.language)}}
              ></span>
              {repo.language}
            </span>
          )}
          <span className="repo-date">
            Created on {formatDate(repo.created_at)}
          </span>
        </div>
      </div>
    </div>
  );
};

// Helper function to get language colors (simplified)
const getLanguageColor = (language) => {
  const colors = {
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    Java: '#b07219',
    TypeScript: '#2b7489',
    Go: '#00ADD8',
    Rust: '#dea584',
    PHP: '#4F5D95',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    Ruby: '#701516',
    Swift: '#ffac45',
    Kotlin: '#F18E33',
  };
  return colors[language] || '#ccc';
};

export default RepoCard;