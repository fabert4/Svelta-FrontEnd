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
                    <div class="col-lg-2 order-2 order-lg-1">



                    </div>
                    <div class="col-lg-9 order-1 order-lg-2">

                        <div class="overflow-hidden mb-1">
                            <h2 class="font-weight-normal text-7 mb-0">Company <strong class="font-weight-extra-bold">
                                Overview</strong></h2>

                        </div>

                        <div class="overflow-hidden mb-4 pb-3">
                            <p class="mb-0">See companies below</p>

                        </div>
                        <div class="container float-end">

                            <button type="button" class="btn btn-primary btn-modern float-end"><a sveltekit:prefetch
                                                                                                  href="/companies/newcompany">➕
                                New Company</a></button>
                        </div>
                        <table class="table">
                            <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Address
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
                                    Company 1
                                </td>
                                <td>
                                    Herenweg 35
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
                                    Company 2
                                </td>
                                <td>
                                    Wibautstraat 38
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
                                    Company 3
                                </td>
                                <td>
                                    Van Woustraat 35
                                </td>
                                <td><button type="button" class="btn btn-primary btn-modern "
                                            style="margin-left: 10px">View
                                </button></td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="form-group row">




                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br><br><br><br><br><br><br>
</div>

<style>
    body {
        padding-bottom: 70px;
        height: 100%;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a:hover, a:focus {
        color: #2A6496;
        text-decoration: underline;
    }
</style>
