module.exports = {

    isLoggedIn: (req, res, next) => {

        // checks if the user is logged in when trying to access a specific page
        if (!req.session.currentUser) {
            return res.redirect("/auth/login");
        }

        next();

    },
    isLoggedOut: (req, res, next) => {

        // if an already logged in user tries to access the login page it
        // redirects the user to the home page
        if (req.session.currentUser) {
            return res.redirect("/");
        }
        next();

    },
    isUser: (req, res, next) => {

        // checks if the user is a User
        if (req.session.currentUser.role != "user") {
            return res.redirect("/403");
        }

        next();


    },
    isCollaborator: (req, res, next) => {

        // checks if the user is a collaborator
        if (req.session.currentUser.role != "collaborator") {
            return res.redirect("/403");
        }

        next();

    }

}