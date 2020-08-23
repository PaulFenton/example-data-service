# Example Data Service App based on Express & Node.js

This is an example data service app based on Express & Node.js. This repo is a companion repository for a tutorial on my blog:
[Basic Node.js Data-Service on Azure](https://fentonsoftware.com/basic-node-js-data-service-on-azure/)

# To run the service

## production
```
ng run start
```
## development
```
ng run dev
```

NOTE: If using Linux or Mac for development, run manually or undate the 'start' script in package.json to the following command:
```
NODE_ENV=production node index.js
```