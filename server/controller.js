module.exports = {
   fetchInventory: (req, res, next) => {
      const dbInstance = req.app.get('db');

      dbInstance.get_inventory()
         .then((response) => {
            res.status(200).json(response);
         })
         .catch(err => {
            res.status(500).send('Something went wrong');
            console.log({errorMessage: err});
         });
   },
   addToInventory: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const {name, price, image} = req.body;

      dbInstance.create_product(name, price, image)
         .then((response) => {
            res.status(200).json(response);
         })
         .catch(err => {
            res.status(500).send('Something went wrong');
            console.log({errorMessage: err});
         });
   },
   deleteFromInventory: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const {name} = req.params;

      dbInstance.delete_from_inventory(name)
         .then((response) => {
            res.status(200).json(response);
         })
         .catch(err => {
            res.status(500).send('Something went wrong');
            console.log({errorMessage: err});
         });
   }
}