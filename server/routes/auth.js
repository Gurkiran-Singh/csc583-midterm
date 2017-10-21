const express = require('express'),
      router = express.Router(),
      passport = require('passport')

/* Google */
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }))

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/')
  })

/* GitHub */
router.get('/github',
  passport.authenticate('github'))

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/')
  })

/* Email/password */
router.post('/local',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/')
  })

module.exports = router
