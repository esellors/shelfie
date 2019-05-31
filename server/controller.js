module.exports = {
   fetchInventory: (req, res, next) => {
      dbInstance = req.app.get('db');

      dbInstance.get_inventory()
         .then((response) => {
            res.status(200).json(response);
         })
         .catch(err => {
            res.status(500).send('Something went wrong');
            console.log({errorMessage: err});
         });
   }
}