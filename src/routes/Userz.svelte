<script lang="ts">

    import {DefaultApi} from "../openapi/index";
    // import axios from "axios";

    const api =  new DefaultApi()
    // api.listusersPost({
    //     restA1Pagination:  {
    //         a0: {
    //             itemsPerPage: 20,
    //             page: 0,
    //         }
    //     }
    // }).then((result) => {
    //     console.log(result.items)
    // })

    api.loginuserPost({
        restA1LoginUserModel:  {
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

        api.listusersPost(
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

    // axios.request<ServerData>({
    //     url: 'https://localhost:8080/api',
    //     transformResponse: (r: ServerResponse) => r.data
    // }).then((response) => {
    //     // `response` is of type `AxiosResponse<ServerData>`
    //     const { data } = response
    //     // `data` is of type ServerData, correctly inferred
    // })

</script>

<div>

</div>
