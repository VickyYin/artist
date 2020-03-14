const {Pool} = require('pg');

const pool = new Pool({
    host:  'ec2-184-72-236-57.compute-1.amazonaws.com',
    database: 'd4rkkckemqs7k5',
    user :    'tvktzuigqzpxpb',
    port :    5432,
    password :'5d3d4c4c1ac606b5062ac9f3477ebab7ac2acc6862cee7cbf5696bfc6fa317ad',
    ssl:{
        rejectUnauthorized: false
    }
});
module.exports = pool;