

module.exports = {
  env: {
    googleApisKey: process.env.NEXT_GOOGLE_API_KEY,
    mapboxApisKey: process.env.NEXT_APP_MAPBOX_TOKEN
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/maps.googleapis.com/maps/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  images: {
    domains: ['res.cloudinary.com'],
  },

}