module.exports = {
  apps : [
      {
        name: "RMUtils Frontend",
        script: "npm run build",
        watch: ["src", "index.html"],
        watch_delay: 1000,
        instance_var: 'INSTANCE_ID',
      }
  ]
}