const config = require("../../config/config")[process.env.NODE_ENV || 'development']
module.exports = {
    GET: (req, res) => {
        req.userService.logout()
    },
    
}

