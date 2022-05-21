const SIGN_UP_HTML = ` 
    <div class="container-login">
        <div class="login__field">
          <div class="login__field-logo">
            <img src="./logo/twitter-blue.png" width="40px" />
          </div>
          <!-- header -->
          <div class="login__field-header">
            <h1 class="login__field-header-text">Join Twitter today</h1>
          </div>
          <form class="login__field-input">
            <input
              type="text"
              name="name"
              class="login__field-input-username"
              placeholder="Full name"
            />
            <input
              type="email"
              name="name"
              class="login__field-input-password"
              placeholder="Phone or Email"
            />
            <input
              type="password"
              name="password"
              class="login__field-input-password"
              placeholder="Password"
            />
            <input
              type="password"
              name="confirm-password"
              class="login__field-input-confirm-password"
              placeholder="confirm Password"
            />

            <!-- checkbox -->
            <div class="login__field-agreement">
              <input
                type="checkbox"
                name="agreement"
                class="login__field-agreement-checkbox"
              />
              <span class="login__field-agreement-info">
                Personalize Twitter based on where you've seen Twitter <br />
                content on the web.
                <a href="#" class="login__field-agreement-info-link">
                  Learn more.
                </a>
              </span>
            </div>
            <!-- button -->
            <div class="login__field-button">
              <button type="submit" class="login__field-button-btn">
                Sign Up
              </button>
            </div>
            <!-- terms and conditions -->
            <div class="login__field-terms">
              <p class="login__field-terms-info">
                By signing up, you agree to the
                <a href="#" class="login__field-terms-info-link"
                  >Terms of service</a
                >
                and
                <a href="#" class="login__field-terms-info-link"
                  >Privacy Policy</a
                >,
                <br />
                including
                <a href="#" class="login__field-terms-info-link">Cookie Use</a>.
                Others will be able to by email or phone <br />
                number when provided.
              </p>
            </div>
          </form>
       
        </div>
      </div>`;

const SIGNUP_OPTION = `
    <div class="replace-item">
      <!-- <div id="preloader"></div> -->
      <div class="container">
        <!-- big-initial-logo -->
        <div class="container-flex">
          <div class="logo">
            <img src="./logo/twitter-white.png" width="300px" />
          </div>

          <div class="login">
            <!-- login-img -->
            <div class="login__icon">
              <img src="./logo/twitter-blue.png" width="40px" />
              <!-- login-header -->
              <div class="login__header">
                <h1 class="login__header-info">Happening now</h1>
                <p class="login__header-suggestion">Join Twitter today.</p>
              </div>
              <!-- buttons -->
              <div class="login__button">
                <div class="login__button-google">
                  <button class="google-button">
                    <span
                      ><img src="./logo/google-logo.png" width="13px"
                    /></span>
                    <span>Continue with Google</span>
                  </button>
                </div>
                <div class="login__button-signup">
                  <a id="login__button-signup" href="">
                    <button>Sign up</button></a
                  >
                </div>
                <div class="login__button-login">
                  <a href=""><button>Log in</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- footer -->
        <div class="footer">
          <div class="footer__items">
            <ul class="footer__items-list">
              <li><a href="#" class="footer__items-list-link">About</a></li>
              <li>
                <a href="#" class="footer__items-list-link">Help Center</a>
              </li>
              <li>
                <a href="#" class="footer__items-list-link">Team of Service</a>
              </li>
              <li>
                <a href="#" class="footer__items-list-link">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="footer__items-list-link">Cookie Policy</a>
              </li>
              <li><a href="#" class="footer__items-list-link">Ads info</a></li>
              <li><a href="#" class="footer__items-list-link">Blog</a></li>
              <li><a href="#" class="footer__items-list-link">Status</a></li>
              <li><a href="#" class="footer__items-list-link">Career</a></li>
              <li>
                <a href="#" class="footer__items-list-link">Brand Resources</a>
              </li>
              <li>
                <a href="#" class="footer__items-list-link">Advertising</a>
              </li>
              <li>
                <a href="#" class="footer__items-list-link">Marketing</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- second footer -->
        <div class="footer-second">
          <div class="footer-second__items">
            <ul class="footer-second__items-second-list">
              <li>
                <a href="#" class="footer-second__items-second-list-link"
                  >Twitter for Business</a
                >
              </li>
              <li>
                <a href="#" class="footer-second__items-second-list-link"
                  >Developers</a
                >
              </li>
              <li>
                <a href="#" class="footer-second__items-second-list-link"
                  >Directory</a
                >
              </li>
              <li>
                <a href="#" class="footer-second__items-second-list-link"
                  >Settings</a
                >
              </li>
              <li>
                <a href="#" class="footer-second__items-second-list-link"
                  >&copy;2022 Twitter, Inc.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- back arrow -->
    <div class="container-login-btn">
      <button class="container-login-button display">
        <i class="fas fa-arrow-left"></i>
      </button>
    </div>
    <script src="bundle.js"></script>
    <script src="../src/Js/loader.js"></script>`;

const LOG_IN_HTML = `
        <div class="container-login-one">
      <div class="login__field">
        <div class="login__field-logo">
          <img src="./logo/twitter-blue.png" width="40px" />
        </div>
        <!-- header -->
        <div class="login__field-header">
          <h1 class="login__field-header-text">Log in to Twitter</h1>
        </div>
        <form class="login__field-input-one">
          <input
            type="text"
            class="login__field-input-one-username"
            placeholder="Username"
          />
          <input
            type="password"
            class="login__field-input-one-password"
            placeholder="Password"
          />
          <!-- button -->
          <div class="login__field-button">
            <button class="login__field-button-btn">Log in</button>
          </div>

          <!-- forgot password message -->
          <div class="login__field-message">
            <a href="#" class="login__field-message-forgot-password">
              Forgot password? .
            </a>
            <a href="#" class="login__field-message-sign-up">
              Sign up for Twitter</a
            >
          </div>
        </form>
      </div>
    </div>
 
  `;
export const HTML = {
  SIGN_UP_HTML: SIGN_UP_HTML,
  SIGNUP_OPTION: SIGNUP_OPTION,
  LOG_IN_HTML: LOG_IN_HTML,
};
