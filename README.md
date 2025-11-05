# RoommateUtils
A tool to help a group of roommates organize things like cost of living expenses

## To Get Started:
This website is using ExpressJS to route everything, using Vite to compile a static site. To work on just frontend without attempting to mess with backend stuff run <code>npm run dev</code>, and you can access the page at the port provided

To actually include the backend, run <code>node index.js</code>, which will run the backend and provide the static files in build. If you make frontend changes while editing this way, you could run <code>npm run build</code> to build it once, or run <code>pm2 start ecosystem.config.js</code> to start a PM2 instance that'll watch for changes (remember to install PM2 if you want to use it!! (npm i -g pm2))