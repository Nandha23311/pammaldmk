var Family = require('./controllers/FamilyController.js');
var Vattam = require('./controllers/vattamController.js');
var Manavar = require('./controllers/manavarController.js');
var Ilaingar = require('./controllers/ilangarController.js');
var Urupinar = require('./controllers/urupinarController.js');

module.exports = function(router)
{
router.post('/sensex/family/save',Family.saveFamily);
router.post('/sensex/family/find',Family.findFamily);


router.post('/mydmk/vattam/save',Vattam.savePost);
router.post('/mydmk/vattam/find',Vattam.findPost);
router.post('/mydmk/vattam/delete',Vattam.deletePost);
router.post('/mydmk/vattam/update',Vattam.updateUser);

router.post('/mydmk/manavar/save',Manavar.savePost);
router.post('/mydmk/manavar/find',Manavar.findPost);
router.post('/mydmk/manavar/delete',Manavar.deletePost);
router.post('/mydmk/manavar/update',Manavar.updateUser);

router.post('/mydmk/ilaingar/save',Ilaingar.savePost);
router.post('/mydmk/ilaingar/find',Ilaingar.findPost);
router.post('/mydmk/ilaingar/delete',Ilaingar.deletePost);
router.post('/mydmk/ilaingar/update',Ilaingar.updateUser);

router.post('/mydmk/urupinar/save',Urupinar.savePost);
router.post('/mydmk/urupinar/find',Urupinar.findPost);
router.post('/mydmk/urupinar/delete',Urupinar.deletePost);
router.post('/mydmk/urupinar/update',Urupinar.updateUser);
};