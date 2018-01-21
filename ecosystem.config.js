module.exports = {
  apps: [{
    name: 'tutorial',
    script: 'index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-217-8-231.us-east-2.compute.amazonaws.com',
      key: 'C:\\Users\\Mike\\.ssh\\tutorials.pem',
      //key: '~/.ssh/tutorials.pem',
      ref: 'origin/master',
      repo: 'git@github.com:mnash408/tutorial.git',
      path: '/home/ubuntu/tutorial',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}