
const { index, show } = require('../controllers/people');

module.exports = router => {
    
    router.get('/people', index);

    router.get('/people/:id', show);
    
    router.get('people/search/:uniqueID', search);
    router.get('/people/search/:name', search);
    router.get('/people/search/:age', search);
    router.get('/people/search/:gender', search);

    
    
    return router;
};