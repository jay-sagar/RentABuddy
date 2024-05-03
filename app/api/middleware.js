export function config(req) {
    return new Promise((resolve, reject) => {
      const { origin } = req.headers;
      const allowedOrigins = ['https://your-domain.com', 'https://another-allowed-domain.com'];
  
      if (allowedOrigins.includes(origin)) {
        req.headers['Access-Control-Allow-Origin'] = origin;
        req.headers['Access-Control-Allow-Methods'] = '*';
        req.headers['Access-Control-Allow-Headers'] = '*';
      }
  
      resolve({ req });
    });
  }
  
  export default config;
  
