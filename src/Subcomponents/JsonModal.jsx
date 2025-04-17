import React, { useEffect } from 'react';

const JsonModal = ({ isActive, jsonData, onClose }) => {
  // Add escape key handler
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isActive) {
        onClose();
      }
    };

    // Add event listener when the modal is active
    if (isActive) {
      document.addEventListener('keyup', handleEscapeKey);
    }

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('keyup', handleEscapeKey);
    };
  }, [isActive, onClose]); // Dependencies array to re-run effect when these values change

  return (
    <div className={`modal ${isActive ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Saved JSON Data</p>
          <button className="delete" aria-label="close" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          <pre style={{ whiteSpace: 'pre-wrap' }}>{jsonData}</pre>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={onClose}>
            Done
          </button>
        </footer>
      </div>
    </div>
  );
};

export default JsonModal;
