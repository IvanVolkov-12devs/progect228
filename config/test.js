

app.get('users', (req, res) => {
    User.findAll().then(users => res.json(users))
})