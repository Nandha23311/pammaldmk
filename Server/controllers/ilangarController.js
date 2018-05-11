var Vattam=require("../models/ilaingaranigal");
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
exports.deletePost=function(req,res){
    console.log("Hitted ::"+req.url);
        var reqBody=req.body;
        var _id=reqBody._id;
        console.log(_id)
        Vattam.findByIdAndRemove(_id, function(err,data) {
               if (data)
                       {
                           res.status(HttpStatus.OK).json({
                           status: 'success',
                           code: HttpStatus.OK
                           });
                           return;
                       }
                       else
                       {
                           console.log("Err"+err);
                           res.status( HttpStatus.INTERNAL_SERVER_ERROR).json({
                           status: 'failure',
                           code:  HttpStatus.INTERNAL_SERVER_ERROR,
                           error: 'Unexpected error accessing data'
                           });
                           return;
                       }

             });

    }

exports.updateUser=function(req,res){
    console.log("Hitted ::"+req.url);
    var reqBody=req.body;
    console.log("ReqBody",reqBody);
    var updateObj={};
    if(reqBody.pic == "0" ){
        var _id=reqBody._id;
        var name=reqBody.name;
        var posting=reqBody.posting;
        var address=reqBody.address;
        var mobno=reqBody.mobno;
        updateObj.name=name;
        updateObj.posting=posting;
        updateObj.address=address;
        updateObj.mobno=mobno;

    }else{
        var _id=reqBody._id;
        var name=reqBody.name;
        var posting=reqBody.posting;
        var address=reqBody.address;
        var mobno=reqBody.mobno;
        var profilepic=reqBody.pic;
        var propic=profilepic.split("url=")
        var url=propic[2].split(", ")
        updateObj.name=name;
        updateObj.posting=posting;
        updateObj.address=address;
        updateObj.mobno=mobno;
        updateObj.profilepic=url[0];
    }
    console.log("UpdatedObj",updateObj)
    Vattam.findByIdAndUpdate(_id,updateObj,function(err,data){
        if(err){
            console.log(err);
            res.status( HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: 'failure',
                code:  HttpStatus.INTERNAL_SERVER_ERROR,
                data: "",
                error: 'Unexpected error accessing data'
            });
            return;
        }
        if (data !=null)
        {
            console.log(data)
            res.status(HttpStatus.OK).json({
                status: 'success',
                code: HttpStatus.OK,
                data:data
            });
            return;
        }
        else{
            res.status(HttpStatus.NOT_FOUND).json({
                status: 'failure',
                code: HttpStatus.NOT_FOUND,
                data:"User Not Found"
            });
            return;
        }
    })
}