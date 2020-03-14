let artistModel = require('../models/artistsData');

exports.getAllArtists = async (req,res,next) => {
    let data;
    if(req.query.filter){
        const filter = req.query.filter;
        data = await artistModel.searchArtists(filter);
        return res.render('artists',{artists:data.rows,filter:filter});
    }else{
        data = await artistModel.getAllArtists();
        return res.render('artists',{artists:data.rows});
    }
};

exports.addArtists = async (req,res,next) => {
    let artist = {
        name:req.body.name,
        about:req.body.about,
        url:req.body.url
    };
    console.log(artist);
    
    await artistModel.addArtists(artist);
    return res.redirect(301,'/artists');
};

exports.deleteArtists = async(req,res,next) => {
    await artistModel.deleteArtists(req.params.id);
    return res.redirect(301,'/artists');
}
exports.searchArtists = async (req,res,next) => {
    let artistId = req.param.id;
    let data = await artistModel.searchArtists(artistId);
    return res.render('artist',{artists:data.rows[0]});
}

exports.logout = (req,res,next) => {
    return res.redirect(301,'/artists');
}
//exports.postAddArtist = (req,res,next) => {
    //let a_name = req.body.name;
    //let a_about = req.body.about;
    //let router = express.Router;
    //let pObject = {
        //name: p_name,
        //about: p_about,
        //imageURL:p_imageURL
    //}
    //artistModel.add(pObject);
    //res.redirect(301,'/peoples');
//}