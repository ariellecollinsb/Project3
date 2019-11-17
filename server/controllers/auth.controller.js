//auth.controller.js

  exports.google = (req, res) => {
    req.session.save();
    const io = req.app.get('io')
    const user = { 
      name: req.user.displayName,
      photo: req.user.photos[0].value.replace(/sz=50/gi, 'sz=250')
    }
    io.in(req.session.socketId).emit('google', user)
  }
  
  exports.github = (req, res) => {
    const io = req.app.get('io')
    const user = { 
      name: req.user.username,
      photo: req.user.photos[0].value
    }
    io.in(req.session.socketId).emit('github', user)
  } 