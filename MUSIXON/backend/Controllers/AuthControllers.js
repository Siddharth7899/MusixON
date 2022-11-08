const Guest = require("../Models/GuestModel");
const jwt = require("jsonwebtoken");
const expressJWT = require('express-jwt');
const _ = require('lodash'); 
const bcrypt = require('bcrypt');
const saltRound = 10;

// for gmail and so.....
const {OAuth2Client} = require('google-auth-library');
const { response } = require('express');
const client = new OAuth2Client("634193116808-mhg7vbt3hph1bg2sb0sfia6skijf3o71.apps.googleusercontent.com")


// for email sending....
const mailgun = require("mailgun-js");
const { addListener } = require('nodemon');
const DOMAIN = 'sandbox0b39eb244f964e07b948bbd3d9c67d92.mailgun.org';
const mg = mailgun({apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN});

// jwt createToken function....
const maxAge = 7*24*60*60;
const createToken = (id)=>{
    return jwt.sign({id},"this super secret key",{
        expiresIn: maxAge,
    });
};

module.exports.register = async(req,res,next)=>{
    try{
        const{name, email, password} = req.body;
        bcrypt.hash(password,saltRound,function(error,hash){
            Guest.findOne({email}).exec((err,guest)=>{
                if(guest){
                    return res.status(400).json({error:"user already exist"});
                }
                else{
                    const newGuest = new Guest({name:name,email:email,password:hash});
                    newGuest.save((err,guest)=>{
                        if(err){
                            console.log("error in registration: ",err);
                            return res.status(400).json({error:"error ocuured"});
                        }
                        if(guest){
                            const token = createToken(guest._id);

                            res.cookie("jwt",token,{
                                withCredentials:true,
                                httpOnly:false,
                                maxAge:maxAge*1000,
                            });
                            res.status(201).json({guest:guest._id,created:true});
                        }
                    })
                }
            })
        })
    }
    catch(err){
        next(err);
    }
}

module.exports.googlelogin = async(req,res,next)=>{
    try{
        const {tokenId} = req.body;
        console.log(tokenId);
        client.verifyIdToken({idToken : tokenId,audience:"634193116808-mhg7vbt3hph1bg2sb0sfia6skijf3o71.apps.googleusercontent.com"}).then(response =>{
            const {email_verified,name,email} = response.payload;
            console.log("this is payloaad :",response.payload);
            console.log("payload ends");
            if(email_verified){
                Guest.findOne({email}).exec((err,guest)=>{
                    if(err){
                        return res.status(400).json({
                            error: "something went wrong..."
                        })
                    }else{
                        if(guest){
                            const token = createToken(guest._id);
                            res.cookie("jwt",token,{
                                withCredentials:true,
                                httpOnly:false,
                                maxAge:maxAge*1000,
                            });
                            res.status(201).json({guest:guest._id,created:false});
                        }
                        else{
                            let password = email + process.env.SECURING_AUTO_GEN_GOOGLE_PASSWORD;
                            let newGuest = new Guest({name,email,password});
                            console.log(newGuest);
                            newGuest.save((err,guest)=>{
                                if(err){
                                    console.log("yaha tak chal raha hai!!",newGuest);
                                    return res.status(400).json({
                                        error: "something went wrong..."
                                    })
                                }
                                else{
                                    const token = createToken(guest._id);
                                    res.cookie("jwt",token,{
                                        withCredentials:true,
                                        httpOnly:false,
                                        maxAge:maxAge*1000,
                                    });
                                    res.status(201).json({guest:guest._id,created:true});
                                }
                            })
                        }
                    }
                })
            }
        })
    }
    catch(err){
        console.log(err);
        const errors = handleErrors(err);
        res.json({errors,created:false});
    }
}

module.exports.login = async (req,res,next)=>{
    try{
        const {email,password} = req.body;
        console.log(req.body);
        Guest.findOne({email}).exec(async (err,guest)=>{
            if(err){
                return res.status(400).json({
                    error: "email does not exist"
                })
            }
            if(guest){
                bcrypt.compare(password,guest.password,function(err,userr){
                    if(userr===true){
                        const token = createToken(guest._id);

                        res.cookie("jwt",token,{
                            withCredentials:true,
                            httpOnly:false,
                            maxAge:maxAge*1000,
                        });
                        res.status(200).json({guest:guest._id,created:true});
                    }
                    else{
                        return res.status(400).json({
                            error: "password is incorect",
                        })
                    }
                })
            }
        })
    }
    catch(err){
        next(err);
    }
}
