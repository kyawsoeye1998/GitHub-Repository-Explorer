import React from 'react';

const Header = () => {
  // Calculate dates for display
  const getDatesForDisplay = () => {
    const currentDate = '2024-07-15'; // As per requirements
    const tenDaysAgo = '2024-07-05'; // 10 days before current date
    
    return { currentDate, tenDaysAgo };
  };

  const { currentDate, tenDaysAgo } = getDatesForDisplay();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">🐙</div>
          <div>
            <div className="logo-text">GitHub Repo Explorer</div>
            <div className="subtitle">
              Most starred repositories created between {tenDaysAgo} and {currentDate}
            </div>
          </div>
        </div>
        <div className="api-info">
          <small>Using GitHub Search API</small>
        </div>
      </div>
    </header>
  );
};

export default Header;