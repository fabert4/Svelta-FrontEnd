<script lang="ts">
    import '../theme-elements.css';
    import '../default.css';
    import '../theme.css';
    import '../theme-blog.css';
    import '../theme-shop.css';
    import '../bootstrap.min.css';

    import {DefaultApi} from "../../openapi/index.ts";
    import {redirect} from "@sveltejs/kit";

    const api = new DefaultApi()


    // TODO: Fix Redirect & Field Validation
    export function load() {
        throw redirect(307, "/")
    }

    async function onSubmit(e) {
        const formData = new FormData(e.target);

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        console.log(data)
        api.loginuserPost({
            restA1LoginUserModel: {
                a0: {
                    email: {
                        value: formData.get("email")
                    },
                    password: {
                        value: formData.get("password")
                    },
                }
            }
        }).then((loginResult) => {
            console.log(loginResult)
            load()
            // if (url.searchParams.has('redirectTo')) {
            //     throw redirect(303, url.searchParams.get('redirectTo'));
            // }
        })

    }



</script>

<div class="content">
    <div class="col-lg-10 order-2 order-lg-3" style="margin-left: 140px">
        <div class="row justify-content-md-center">
            <div class="col-md-9">
                <div class="featured-box featured-box-primary text-start mt-0">
                    <div class="box-content">
                        <h4 class="color-primary font-weight-semibold text-4 text-uppercase mb-3">CargoLedger Customer
                            Login</h4>
                        <form action="/" id="frmSignIn" method="post" class="needs-validation"
                              on:submit|preventDefault={onSubmit} >
                            <div class="row">
                                <div class="form-group col">
                                    <label class="form-label">Username or E-mail Address</label>
                                    <input type="text" name="email" value="" class="form-control form-control-lg"
                                           required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col">
                                    <a class="float-end" href="#">(Lost Password?)</a>
                                    <label class="form-label">Password</label>
                                    <input type="password" name="password" value="" class="form-control form-control-lg"
                                           required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-lg-6">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" name="rememberme" class="custom-control-input"
                                               id="rememberme">
                                        <label class="custom-control-label text-2" for="rememberme">Remember Me</label>
                                    </div>
                                </div>
                                <div class="form-group col-lg-6">
                                    <input type="submit" value="Login" class="btn btn-primary btn-modern float-end"
                                           data-loading-text="Loading...">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<style>

</style>
