const cors = require('../cors');
const express = require('express');
const queryRouter = express.Router();

const query_systeminfo = require('../../monitor_operations/monitor_functions').systeminfo;


///////////////// route handler /////////////
/**
 */

queryRouter.route("/")
.options(cors.cors, (req, res, next) => {
    res.sendStatus(200);
})
.post(cors.cors, (req, res, next)=>{
    query_systeminfo((err, result)=>{
        if(err){
            res.statusCode = 500;
            res.json({
                success: false,
                reasons: [err.message],
                value: null
            });
        }else{
            res.statusCode = 200;
            res.json({
                success: true,
                reasons:[],
                value: result
            });
        }
    });
});
module.exports = queryRouter;