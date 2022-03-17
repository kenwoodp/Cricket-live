// Kenny created file 16/3

// Login will render on section tag with id="page"
// Login page will have a class="login" for CSS
// On submit, calls the login(event) function declared below

function renderLogin() {
    document.querySelector('#page').innerHTML = `
        <section class="login">
            <div class="error"></div>
            <form action="" onSubmit="login(event)">
                <h2>Login: </h2>
                <fieldset>
                    <label for="">Email: </label><br>
                    <input type="text" name="email">
                </fieldset>
                <fieldset>
                    <label for="">Password: </label><br>
                    <input type="password" name="password">
                </fieldset>
                <button>Login</button>
            </form>
        </section>
        <footer class="sign-up-footer">
            <div class="footer-info">
                <h4>cricket-Live is a production of APKZ Digital Media - Code4Cash.</h4>
                <h4>© 2022 World Cricket.</h4>
                <h4>All rights reserved.</h4>
                <h4>Cricket-Live ⏚</h4>
            </div>
            <div class="footer-icons">
                <span>Contact</span>
                <span>Facebook</span>
                <span>Instagram</span>
                <span>Youtube</span>
            </div>
        </footer>
    `
}

// Will send an axios post request along with login data to sessions_controller.js
// Route is 'api/sessions'

function login(event) {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    axios
        .post('/api/sessions', data)
        .then(res => res.data)
        .then(user => renderWelcome(user.username, user.email))
        .catch(error => {
            let errorDOM = document.querySelector('.login .error')
            errorDOM.textContent = error.response.data.message
        })
}