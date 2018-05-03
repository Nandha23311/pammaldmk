var Vattam=require("../models/urupinargal");
var HttpStatus = require('http-status');


exports.savePost=function(req,res){
    console.log("Hitted ::"+req.url);
    var reqBody=req.body;
    var profilepic=reqBody.pic;
	var propic=profilepic.split("url=")		
	var url=propic[2].split(", ")
	delete reqBody.pic;
	reqBody.pic=url[0];
    var VattamObj=new Vattam(reqBody);
    VattamObj.save(function(errData,savedData){
        if (savedData != null)
        {
        res.status(HttpStatus.OK).json({
            status: 'success',
            code: HttpStatus.OK,
            data:savedData
        });
        return;
        }
        else
        {
            res.status( HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: 'failure',
                code:  HttpStatus.INTERNAL_SERVER_ERROR,
                data: "Unexpected error accessing data"
            });
            return;
        }
    })
}

exports.findPost=function(req,res){
    console.log("Hitted ::"+req.url);
    Vattam.find({},function(errData,findData){
        if(errData){
            res.status( HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: 'failure',
                code:  HttpStatus.INTERNAL_SERVER_ERROR,
                data: "Unexpected error accessing data"
            });
            return;
        }
        if (findData.length != 0){
            res.status(HttpStatus.OK).json({
                status: 'success',
                code: HttpStatus.OK,
                data:findData,
                count:findData.length
            });
            return;
        }else{
             res.status(HttpStatus.NOT_FOUND).json({
                status: 'failure',
                code: HttpStatus.NOT_FOUND,
                data:"Records Not Found"
            });
        }
    })
}