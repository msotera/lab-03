const axios = require('axios');

//find a person api
const BASEPATH = "localhost:4000";

exports.find = async () => {
    const path = `${BASEPATH}/people`;

    const { data } = await axios.get(path);

    return data;
};

//unique id
exports.findById = async(id) => {

    const path = `${BASEPATH}/people/${id}`;
    
    const { data: [data] } = await axios.get(path);

    
    return data;
};

//name
exports.search = async name => {
    
    const path = `${BASEPATH}/people/search${name}`;

    const { data } = await axios.get(path);
    return data;
};

//age
exports.search = async age => {
    
    const path = `${BASEPATH}/people/search${age}`;

    const { data } = await axios.get(path);
    return data;
};

//gender
exports.search = async gender => {
    
    const path = `${BASEPATH}/people/search${gender}`;

    const { data } = await axios.get(path);
    return data;
};