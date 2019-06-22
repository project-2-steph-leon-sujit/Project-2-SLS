let config = {
    local: {
        mysql:{ 
            url: process.env.DB_URL
        },
        //TODO: if we have api keys this is where we put them. 
        apiKeys:{

        },
        prod:{
                mysql:{},
                apiKeys:{}
        }
    }
};

module.exports = config[process.env.APP_ENV || 'local'];

//We're basically creating our config object, one for each environment. we have two environments. We're passing in variable config with process.env.APP_ENV.