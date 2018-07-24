module.exports = function(app){
    app.post('/api/usages', function(req, res){
    	// TODO: Implement a database so that this data can be thread safe.
    	
        // Store the supplied usage data
        app.usages[app.usages.length] = req.body;
        // console.log('Stored usage count: ' + usageId);

        res.status(201).json({'id': app.usages.length});
    });
}
