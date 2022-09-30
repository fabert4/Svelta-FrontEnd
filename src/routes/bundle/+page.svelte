<script>
    import '../theme-elements.css';
    import '../default.css';
    import '../theme.css';
    import '../theme-blog.css';
    import '../theme-shop.css';
    import '../bootstrap.min.css';

    import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
    import Users from '$lib/users.svelte'
    // import { postListusers } from 'src/default/default';

    const queryClient = new QueryClient()

</script>

<div class="content">
    <div class="body">

<p>test</p>

        <div role="main" class="main">
            <div id="examples" class="container py-2">

                <div class="row">
                    <div class="col-lg-3 order-2 order-lg-1">

                        <aside class="sidebar mt-2 mb-5">
                            <h5 class="font-weight-semi-bold">Menu</h5>
                            <ul class="nav nav-list flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" href="/orders">Orders</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/addresses">Addresses
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/companies">Consigners</a>
                                </li>
                                <!--                                <li class="nav-item">-->
                                <!--                                    <a class="nav-link" href="elements-forms.html#formsStyleWithIcons">Carrier-->
                                <!--                                        Profile</a>-->
                                <!--                                </li>-->

                            </ul>
                        </aside>

                    </div>
                    <div class="col-lg-9 order-1 order-lg-2">

                        <div class="overflow-hidden mb-1">
                            <h2 class="font-weight-normal text-7 mb-0">Bundle <strong class="font-weight-extra-bold">
                                Orders</strong></h2>

                        </div>

                        <div class="overflow-hidden mb-4 pb-3">
                            <p class="mb-0">See orders below</p>
                        </div>

                        <div class="row">
                            <div class="form-group row">
                                <label class="form-label">Order 1 <span
                                        class="text-color-danger">*</span></label>
                                <div class="custom-select-1">
                                    <select class="form-select form-control h-auto py-2" name="Company" required>
                                        <option value="" selected></option>
                                        <option value="nl">Order #1</option>
                                        <option value="be">Order #2</option>
                                        <option value="fra">Order #3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group row">
                                <label class="form-label">Order 2 <span
                                        class="text-color-danger">*</span></label>
                                <div class="custom-select-1">
                                    <select class="form-select form-control h-auto py-2" name="Company" required>
                                        <option value="" selected></option>
                                        <option value="nl">Order #1</option>
                                        <option value="be">Order #2</option>
                                        <option value="fra">Order #3</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="form-group col-lg-12">
                            <input type="submit" value="Bundle" class="btn btn-primary btn-modern float-end"
                                   data-loading-text="Loading...">
                        </div>
                    </div>
                </div>
            </div>
            <div id="querytest">
                <QueryClientProvider client={queryClient}>
                    <Users />
                </QueryClientProvider>
            </div>

            <br><br><br><br><br><br>
        </div>
    </div>
</div>
        <style>

        </style>
