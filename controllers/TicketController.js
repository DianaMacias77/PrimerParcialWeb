let TicketModel = require('../models/ticket')

exports.tick= (req, res) => {
    let ref = req.body.ticket;

    TicketModel.find(ref).then((rifa) => {
        
        if(rifa == null) {
            res.status(404).send('not found');
            return;
        }
        
        res.render('rifas/show', {rifa: rifa});
    });
}