exports.get = (req,res,next)=>{
    return res.render('login');
}

exports.login = (req,res,next) =>{
    const username = req.body.username;
    const password = req.body.password;

    if(username.toLowerCase() === 'a01043781' && password === 'password'){
        return res.redirect(301,'/artists');
    }else{
        return res.render('login',{msg:'username or password incorrect'});
    }
}