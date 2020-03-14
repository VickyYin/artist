const db = require('../util/database');
const getFilterSql = "SELECT * FROM artist WHERE LOWER(name) LIKE '%' || $1 || '%'";
const searchSql = 'SELECT * FROM artist WHERE id = $1';
const sql = 'INSERT INTO artist(name,about,url) VALUES($1,$2,$3)';

exports.getAllArtists = () =>{
    return db.query('SELECT * FROM artist');
}

exports.searchArtists = (filter) => {
    return db.query(getFilterSql,[filter.toLowerCase()]);
}

exports.deleteArtists = id =>{
    return db.query('DELETE FROM artist WHERE id = $1', [id]);
}

exports.addArtists = a =>{
    return db.query(sql,[a.name,a.about,a.url]);
}

exports.getById = id =>{
    return db.query(searchSql,[id]);
}
//module.exports = {
    //add: addArtists,
    //delete: deleteArtists,
    //search: searchArtists,
    //getall: getAllArtists
//}