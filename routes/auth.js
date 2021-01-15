const {Router} = require('express');
const router = Router();


router.get('/', (req, res) => {
  res.json({
      ok: true,
      msg: "Recibido"
  });  
});

//Crear usuario, login, eliminar

module.exports = router;