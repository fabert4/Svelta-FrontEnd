<script>
    import '../theme-elements.css';
    import '../default.css';
    import '../theme.css';
    import '../theme-blog.css';
    import '../theme-shop.css';
    import '../bootstrap.min.css';
</script>
<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<div class="content">
    <div class="body">
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
                            <h2 class="font-weight-normal text-7 mb-0">Order  <strong class="font-weight-extra-bold">
                                Overview</strong></h2>

                        </div>

                        <div class="overflow-hidden mb-4 pb-3">
                            <p class="mb-0">See orders below</p>
                        </div>
                        <table class="table">
                            <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Type
                                </th>
                                <th>
                                    Pick-Up Consigner
                                </th>
                                <th>
                                    Delivery Consigner
                                </th>
                                <th>
                                    CMR
                                </th>
                                <th>
                                    View More
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    Flowers
                                </td>
                                <td>
                                    <select class="form-select form-control h-auto py-2" name="country" required>

                                        <option value="nl">Company 1</option>
                                        <option value="nl">Company 2</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-select form-control h-auto py-2" name="country" required>

                                        <option value="nl">Company 1</option>
                                        <option value="nl">Company 2</option>
                                    </select>
                                </td>
                                <td>
                                    <button>Download CMR</button>
                                </td>
                                <td><button type="button" class="btn btn-primary btn-modern "
                                            style="margin-left: 10px">View
                                </button></td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    Snickers
                                </td>
                                <td>
                                    <select class="form-select form-control h-auto py-2" name="country" required>

                                        <option value="nl">Company 1</option>
                                        <option value="nl">Company 2</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-select form-control h-auto py-2" name="country" required>

                                        <option value="nl">Company 1</option>
                                        <option value="nl">Company 2</option>
                                    </select>
                                </td>
                                <td>
                                    <button>Download CMR</button>
                                </td>
                                <td><button type="button" class="btn btn-primary btn-modern "
                                            style="margin-left: 10px">View
                                </button></td>
                            </tr>
                            <tr>
                                <td>
                                    3
                                </td>
                                <td>
                                    Coffee
                                </td>
                                <td>
                                    <select class="form-select form-control h-auto py-2" name="country" required>

                                        <option value="nl">Company 1</option>
                                        <option value="nl">Company 2</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-select form-control h-auto py-2" name="country" required>

                                        <option value="nl">Company 1</option>
                                        <option value="nl">Company 2</option>
                                    </select>
                                </td>
                                <td>
                                    <button>Download CMR</button>
                                </td>
                                <td><button type="button" class="btn btn-primary btn-modern "
                                            style="margin-left: 10px">View
                                </button></td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="form-group row">


                            <div class="container float-end">
                                <button type="button" class="btn btn-primary btn-modern float-sm-end" style="margin-left: 10px">Save</button>
                                <button type="button" class="btn btn-primary btn-modern float-end"><a sveltekit:prefetch href="/orders/neworder">➕ New Order</a></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br><br><br><br><br><br>
</div>

<style>
    body { padding-bottom: 70px;
        height: 100%;}

    a {
        color: white;
        text-decoration: none;
    }

    a:hover, a:focus {
        color: #2A6496;
        text-decoration: underline;
    }
</style>
