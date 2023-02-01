const express=require('express');
const router=express.Router();
const userControl=require('../../../controller/userController');
const passport=require('passport')

// router.get('/sign-in',userControl.signIn)
// router.get('/secret-page',userControl.secretPage)
router.post('/create',userControl.create);
router.post('/create-session',userControl.createSession);
router.get('/verify-user',passport.authenticate('jwt', { session: false }),userControl.verifyUser);
router.get('/sign-out',passport.authenticate('jwt', { session: false }),userControl.logout)
router.get('/auth/google',
passport.authenticate('google', { scope: ['profile','email'] }));
router.get('/auth/google/google-home',passport.authenticate('google',{
    failureRedirect:'https://secrets-weld.vercel.app/sign-up'}),userControl.googleHome);
router.use('/secret',require('./secret'));
//handling feedback submit-:
router.post('/save-feedback',userControl.saveFeedback);

module.exports=router;