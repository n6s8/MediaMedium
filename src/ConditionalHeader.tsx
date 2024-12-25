import { useLocation } from 'react-router-dom';

function ConditionalHeader() {
    const location = useLocation();
  
    if (location.pathname.startsWith('/personal-news')) {
      return null;
    }
  
    return (
      <div className="header">
        <p><strong>Hello, world!</strong></p>
      </div>
    );
  }

export default ConditionalHeader;
