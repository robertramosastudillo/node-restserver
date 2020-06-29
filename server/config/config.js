// ================
// Puerto
// ===============
process.env.PORT = process.env.PORT || 3000;


// ================
// Entorno
// ===============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// ================
// Base de datos
// ===============
let urlBD;

if(process.env.NODE_ENV === 'dev'){
    urlBD = "mongodb://localhost:27017/cafe";
}else{
    urlBD = "mongodb+srv://robertramosastudillo:SRl8OnL5XN0R1Qal@cluster0-ggagu.mongodb.net/cafe";
}

process.env.URLDB = urlBD;