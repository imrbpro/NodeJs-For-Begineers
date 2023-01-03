ActivityLogger = (userid, logtype, userip, activity, activitytime) =>{
    return (req,res, next) => {
        const Log = "UserId : "+req.userid+" -- Log Type : "+req.logtype+" -- UserIp : "+req.userip+" Activity : "+req.activity+"Activity Time : "+req.activitytime;
        console.log(Log);
        console.log("Logger working....");
        next();
    } 
}

module.exports = ActivityLogger;