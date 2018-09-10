import pointsData from './points';

const api = {
  map: {
    points: {
      get: () => Promise.resolve(pointsData)
    }
  }
};

export default api;
