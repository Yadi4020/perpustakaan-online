const router = require('express').Router();
const controller = require('../controllers/controller-perpus');


// GET localhost:8080/book => Ambil data semua book
router.get('/book', controller.getDataBook);

// GET localhost:8080/book => Ambil data semua book berdasarkan code
router.get('/book/:code', controller.getDataBookByCode);

// POST localhost:8080/book/add => Tambah data book ke database
router.post('/book/add', controller.addDataBook);

// POST localhost:8080/book => Edit data book
router.post('/book/edit', controller.editDataBook);

// POST localhost:8080/book/delete => Delete data book
router.post('/book/delete/', controller.deleteDataBook);

//------------------------------------------------------------------------------------------------

// GET localhost:8080/member => Ambil data semua member
router.get('/member', controller.getDataMember);

// GET localhost:8080/member => Ambil data semua member berdasarkan code 
router.get('/member/:code', controller.getDataMemberByCode);

// POST localhost:8080/member/add => Tambah data member ke database
router.post('/member/add', controller.addDataMember);

// POST localhost:8080/member => Edit data member
router.post('/member/edit', controller.editDataMember);

// POST localhost:8080/member/delete => Delete data member
router.post('/member/delete/', controller.deleteDataMember);

module.exports = router;