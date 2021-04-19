const mailer = require('../../models/mailer')

exports.get_index = (req, res) => {
    res.render('index')
}

exports.post_index = (req, res) => {
    mailer.sendEmail()
    .then(data => res.json(data))
    .catch(error => res.json(error))
}