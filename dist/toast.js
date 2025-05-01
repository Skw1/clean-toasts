
class ClearToasts {
  constructor(defaultOptions = {}) {
    // Set default parameters
    this.defaultOptions = {
      duration: 3000, // Display time (ms)
      position: 'top-right', // Container position
      ...defaultOptions
    };
    this._ensureContainer();
  }

  
  _ensureContainer() {
    if (!document.getElementById('clear-toast-container')) {
      const container = document.createElement('div');
      container.id = 'clear-toast-container';
      container.className = 'clear-toast-container';
      document.body.appendChild(container);
    }
  }

  
  _createToast(message, type, duration) {
    const toast = document.createElement('div');
    toast.className = `clear-toast toast-${type}`;

    
    toast.innerHTML = `
      <span class="toast-message">${message}</span>
      <button class="toast-close">&times;</button>
    `;

   
    document.getElementById('clear-toast-container').appendChild(toast);

    
    toast.querySelector('.toast-close').onclick = () => toast.remove();

    
    setTimeout(() => toast.remove(), duration);
  }

  
  success(message, duration = this.defaultOptions.duration) {
    this._createToast(message, 'success', duration);
  }

  error(message, duration = this.defaultOptions.duration) {
    this._createToast(message, 'error', duration);
  }

  warning(message, duration = this.defaultOptions.duration) {
    this._createToast(message, 'warning', duration);
  }

  info(message, duration = this.defaultOptions.duration) {
    this._createToast(message, 'info', duration);
  }
}


export const Notify = new ClearToasts();
