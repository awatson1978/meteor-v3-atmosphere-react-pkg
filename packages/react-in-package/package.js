Package.describe({
    name: 'awatson1978:react-in-package',
    version: '0.4.0',
    summary: 'Claims NIVO Pipeline',
    git: 'https://gitlab.mitre.org/awatson/claims-nivo-pipeline',
    documentation: 'README.md'
});
  
Package.onUse(function(api) {
    api.versionsFrom('3.0');
    
    api.use('meteor');
    api.use('webapp');
    api.use('ecmascript');
    api.use('react-meteor-data');
    api.use('session');
    api.use('mongo');    
    api.use('http');    
     
    api.mainModule('index.jsx', 'client');
});



