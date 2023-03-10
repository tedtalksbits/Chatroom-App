export const getJoin = (req, res) => res.render('join', { pageTitle: 'Join' });

export const postJoin = (req, res) => {
    console.log(req.body);
    res.render('join', { pageTitle: 'Join' });
};

export const getLogin = (req, res) => res.render('login', { pageTitle: 'Login', layout: 'auth' });

export const postLogin = (req, res) => {
    console.log(req.body);
    res.render('login', { pageTitle: 'Login', layout: '../views/layouts/auth' });
};

export const getRegister = (req, res) => res.render('register', { pageTitle: 'Register', layout: 'auth' });

export const postRegister = (req, res) => {
    console.log(req.body);
    res.render('register', { pageTitle: 'Register' });
};
