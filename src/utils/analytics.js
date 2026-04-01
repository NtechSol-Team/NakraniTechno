import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initializeGA = (measurementID) => {
  ReactGA.initialize(measurementID);
};

// Track page views
export const trackPageView = (pathname, title) => {
  ReactGA.send({
    hitType: 'pageview',
    page: pathname,
    title: title || document.title,
  });
};

// Track custom events
export const trackEvent = (category, action, label = '', value = 0) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
    value: value,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, category = 'engagement') => {
  trackEvent(category, 'button_click', buttonName);
};

// Track form submissions
export const trackFormSubmit = (formName) => {
  trackEvent('form', 'submit', formName);
};

// Track user interactions (scroll depth, time on page, etc.)
export const trackScrollDepth = (depth) => {
  trackEvent('engagement', 'scroll_depth', `${depth}%`);
};

// Track errors
export const trackError = (errorName, errorMessage) => {
  trackEvent('error', 'exception', `${errorName}: ${errorMessage}`);
};

// Set user properties
export const setUserProperty = (userId) => {
  ReactGA.set({ 'user_id': userId });
};

export default {
  initializeGA,
  trackPageView,
  trackEvent,
  trackButtonClick,
  trackFormSubmit,
  trackScrollDepth,
  trackError,
  setUserProperty,
};
