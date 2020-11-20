module.exports = router => {
    
    //full version
    //const pageRoutes = require('./routes/people');
    //pageRoutes(router);
    
    //condensed version
    require('./routes/people')(router);
    
    
    return router;
};