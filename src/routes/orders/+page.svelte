<script>
    import '../theme-elements.css';
    import '../default.css';
    import '../theme.css';
    import '../theme-blog.css';
    import '../theme-shop.css';
    import '../bootstrap.min.css';

    import {onMount} from 'svelte';
    import {DefaultApi} from "../../openapi/index.ts";

    const api = new DefaultApi()

    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    api.loginuserPost({
        restA1LoginUserModel: {
            a0: {
                email: {
                    value: "admin@cargoledger.nl"
                },
                password: {
                    value: "P@ssw0rd!"
                },
            }
        }
    }).then((loginResult) => {
        console.log(loginResult)
        api.listallshipmentsPost(
            {
                restA1Pagination: {
                    a0: {
                        page: 0,
                        itemsPerPage: 20
                    }
                }
            },
            {
                headers: {
                    "Authorization": loginResult
                }
            }).then((result) => {
            console.log(result)
        })
    })


</script>
<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<div class="content">

    <div id="output">
        <!--{output}-->
        <!--<ul>-->
        <!--    {#each $tesd as item}-->
        <!--        <li>{item.name} x {item.qty}</li>-->
        <!--    {/each}-->
        <!--</ul>-->
        <!--<p>-->
        <!--    {JSON.stringify($testtt.data, null, 2)}-->
        <!--</p>-->

        <!--        <p>{data.get("identifier")}<p>-->
        <!--        <p>{data.bar}</p>-->
        <p id="greeting"></p>
    </div>
    <div class="body">
        <div role="main" class="main">
            <div id="examples" class="container py-2">

                <div class="row">
                    <div class="col-lg-2 order-2 order-lg-1">
                    </div>
                    <div class="col-lg-9 order-1 order-lg-2">

                        <div class="overflow-hidden mb-1">
                            <h2 class="font-weight-normal text-7 mb-0">Order <strong class="font-weight-extra-bold">
                                Overview</strong></h2>

                        </div>

                        <div class="overflow-hidden mb-4 pb-3">
                            <p class="mb-0">See orders below</p>
                        </div>
                        <div class="container float-end">
                            <!--                            <button type="button" class="btn btn-primary btn-modern float-sm-end" style="margin-left: 10px">Save</button>-->
                            <button type="button" class="btn btn-primary btn-modern float-end"><a sveltekit:prefetch
                                                                                                  href="/orders/neworder">➕
                                New Order</a></button>
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
                                    Delivery Consignee
                                </th>
                                <th>
                                    e-CMR
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
                                    Company 1
                                </td>
                                <td>
                                    Company 2
                                </td>
                                <td>
                                    <button>View e-CMR</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary btn-modern "
                                            style="margin-left: 10px">View
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    Snickers
                                </td>
                                <td>
                                    Company 1
                                </td>
                                <td>
                                    Company 2
                                </td>
                                <td>
                                    <button>View e-CMR</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary btn-modern "
                                            style="margin-left: 10px">View
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    3
                                </td>
                                <td>
                                    Coffee
                                </td>
                                <td>
                                    Company 1
                                </td>
                                <td>
                                    Company 2
                                </td>
                                <td>
                                    <button>View e-CMR</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary btn-modern "
                                            style="margin-left: 10px">View
                                    </button>
                                </td>
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
    <br><br><br><br><br><br>
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
