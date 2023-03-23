<script>
import {mapActions, mapMutations} from "vuex";
import {getAccessToken} from "../../utils/cookieAuthen";

/**
 * Login component
 */
export default {
    middleware({redirect}) {
        if (getAccessToken()) {
            return redirect('/account/login');
        }
    },
    head() {
        return {
            title: `Login | Nuxtjs Responsive Bootstrap 5 Admin Dashboard`
        };
    },
    layout: "auth",
    data() {
        return {
            objInfo: {
                username: '',
                password: '',
                loginType: 0
            },
            flagPassword: false,
            showPassword: false
        };
    },
    // validations: {
    //     email: {
    //         required
    //     },
    //     password: {
    //         required
    //     }
    // },
    computed: {
        notification() {
            return this.$store ? this.$store.state.notification : null;
        },
        notificationAutoCloseDuration() {
            return this.$store && this.$store.state.notification ? 5 : 0;
        }
    },
    methods: {
        // Try to log the user in with the username
        // and password they provided.
        /*   tryToLogIn() {
               this.submitted = true;
               // stop here if form is invalid
               this.$v.$touch();

               if (this.$v.$invalid) {
                   return;
               } else {
                   if (process.env.auth === "firebase") {
                       this.tryingToLogIn = true;
                       // Reset the authError if it existed.
                       this.authError = null;
                       return (
                           this.$store
                               .dispatch("auth/logIn", {
                                   email: this.email,
                                   password: this.password
                               })
                               // eslint-disable-next-line no-unused-vars
                               .then(token => {
                                   this.tryingToLogIn = false;
                                   this.isAuthError = false;
                                   // Redirect to the originally requested page, or to the home page
                                   this.$router.push(
                                       this.$route.query.redirectFrom || {
                                           path: "/"
                                       }
                                   );
                               })
                               .catch(error => {
                                   this.tryingToLogIn = false;
                                   this.authError = error ? error : "";
                                   this.isAuthError = true;
                               })
                       );
                   } else if (process.env.auth === "fakebackend") {
                       const {email, password} = this;
                       if (email && password) {
                           this.$store.dispatch("authfack/login", {
                               email,
                               password
                           });
                       }
                   }
               }
           }*/
        ...mapMutations('authen', {
            ACTION_LOGIN_TYPE: 'ACTION_LOGIN_TYPE',
            ACTION_LOGIN_CSRF_STATE: 'ACTION_LOGIN_CSRF_STATE'
        }),
        ...mapActions('authen', {
            apiSendOTP: 'apiSendOTP',
            apiLogin: 'apiLogin'
        }),
        handleActionLogin() {
            if (getAccessToken()) {
                this.$router.push('/account');
                return;
            }
            console.log(this.objInfo)
            if (this.objInfo.username.trim() === '') {
                this.commonNotifyVue('Vui lòng nhập tài khoản', 'warn');
                return;
            }

            if (this.objInfo.password.trim() === '') {
                this.commonNotifyVue('Vui lòng nhập mật khẩu', 'warn');
                return;
            }

            if (this.flagPassword) {
                this.objInfo.loginType = 0;
            } else {
                this.objInfo.loginType = 5;
            }

            this.ACTION_LOGIN_TYPE('local');

            this.commonLoadingPage(true);
            this.apiLogin(this.objInfo)
                .then(response => {
                    console.log('handleActionLogin response', response);
                    this.$router.push('/');
                })
                .catch(err => {
                    console.log('handleActionLogin err', err);
                    this.commonErrorVue(err);
                })
                .finally(() => {
                    this.commonLoadingPage(false);
                });
        },
        handleActionLoginWidthGoogle() {
            this.ACTION_LOGIN_TYPE('google');
            this.$auth.loginWith('google', {params: {prompt: 'select_account'}});
        },
        handleActionLoginWidthFacebook() {
            this.ACTION_LOGIN_TYPE('facebook');
            this.$auth.loginWith('facebook');
        },
        handleActionLoginWidthTiktok() {
            const csrfState = Math.random().toString(36).substring(2);

            this.ACTION_LOGIN_TYPE('tiktok');
            this.ACTION_LOGIN_CSRF_STATE(csrfState);

            let url = configTiktok.url;

            url += `?client_key=${configTiktok.client_key}`;
            url += '&scope=user.info.basic';
            url += '&response_type=code';
            url += `&redirect_uri=${window.location.origin}/${configTiktok.redirect_uri}`;
            url += '&state=' + csrfState;

            window.open(url, '_parent');
        },
        toggleShow() {
            this.showPassword = !this.showPassword;
        }
    }
};
</script>

<template>
    <div>
        <div class="home-btn d-none d-sm-block">
            <nuxt-link to="/" class="text-dark">
                <i class="mdi mdi-home-variant h2"></i>
            </nuxt-link>
        </div>
        <div class="account-pages my-5 pt-sm-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <nuxt-link to="/" class="mb-5 d-block auth-logo">
                                <img
                                    src="~/assets/images/logo-dark.png"
                                    alt
                                    height="22"
                                    class="logo logo-dark"
                                />
                                <img
                                    src="~/assets/images/logo-light.png"
                                    alt
                                    height="22"
                                    class="logo logo-light"
                                />
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card">
                            <div class="card-body p-4">
                                <div class="text-center mt-2">
                                    <h5 class="text-primary">Welcome Back !</h5>
                                    <p class="text-muted">Sign in to continue to Minible.</p>
                                </div>
                                <div class="p-2 mt-4">
                                    <b-alert
                                        v-model="isAuthError"
                                        variant="danger"
                                        class="mt-3"
                                        dismissible
                                    >{{ authError }}
                                    </b-alert
                                    >

                                    <div
                                        v-if="notification.message"
                                        :class="'alert ' + notification.type"
                                    >
                                        {{ notification.message }}
                                    </div>

                                    <b-form @submit.prevent="handleActionLogin">
                                        <b-form-group
                                            id="input-group-1"
                                            label="Username"
                                            label-for="input-1"
                                            class="mb-3"
                                        >
                                            <b-form-input
                                                id="input-1"
                                                v-model="objInfo.username"
                                                type="text"
                                                placeholder="Enter username"
                                                :class="{ 'is-invalid': submitted }"
                                            ></b-form-input>
<!--                                            <div-->
<!--                                                v-if="submitted && $v.email.$error"-->
<!--                                                class="invalid-feedback"-->
<!--                                            >-->
<!--                        <span v-if="!$v.email.required"-->
<!--                        >Email is required.</span-->
<!--                        >-->
<!--                                                <span v-if="!$v.email.email"-->
<!--                                                >Please enter valid email.</span-->
<!--                                                >-->
<!--                                            </div>-->
                                        </b-form-group>

                                        <b-form-group id="input-group-2" class="mb-3">
                                            <div class="float-end">
                                                <nuxt-link
                                                    to="/account/forgot-password"
                                                    class="text-muted"
                                                >Forgot password?
                                                </nuxt-link
                                                >
                                            </div>
                                            <label for="input-2">Password</label>
                                            <b-form-input
                                                id="input-2"
                                                v-model="objInfo.password"
                                                type="password"
                                                placeholder="Enter password"
                                                :class="{
                          'is-invalid': submitted && $v.password.$error
                        }"
                                            ></b-form-input>
                                            <div
                                                v-if="submitted && !$v.password.required"
                                                class="invalid-feedback"
                                            >
                                                Password is required.
                                            </div>
                                        </b-form-group>
                                        <div class="form-check">
                                            <input
                                                type="checkbox"
                                                class="form-check-input"
                                                id="auth-remember-check"
                                            />
                                            <label class="form-check-label" for="auth-remember-check"
                                            >Remember me</label
                                            >
                                        </div>
                                        <div class="mt-3 text-end">
                                            <b-button type="submit" variant="primary" class="w-sm"
                                            >Log In
                                            </b-button
                                            >
                                        </div>
                                        <div class="mt-4 text-center">
                                            <div class="signin-other-title">
                                                <h5 class="font-size-14 mb-3 title">Sign in with</h5>
                                            </div>

                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <a
                                                        href="javascript:void()"
                                                        class="social-list-item bg-primary text-white border-primary"
                                                    >
                                                        <i class="mdi mdi-facebook"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a
                                                        href="javascript:void()"
                                                        class="social-list-item bg-info text-white border-info"
                                                    >
                                                        <i class="mdi mdi-twitter"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a
                                                        href="javascript:void()"
                                                        class="social-list-item bg-danger text-white border-danger"
                                                    >
                                                        <i class="mdi mdi-google"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="mt-4 text-center">
                                            <p class="mb-0">
                                                Don't have an account ?
                                                <nuxt-link
                                                    to="/account/register"
                                                    class="fw-medium text-primary"
                                                >Signup now
                                                </nuxt-link
                                                >
                                            </p>
                                        </div>
                                    </b-form>
                                </div>
                                <!-- end card-body -->
                            </div>
                            <!-- end card -->
                        </div>
                        <div class="mt-5 text-center">
                            <p>
                                © {{ new Date().getFullYear() }} Minible. Crafted with
                                <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                            </p>
                        </div>
                        <!-- end row -->
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" module></style>
