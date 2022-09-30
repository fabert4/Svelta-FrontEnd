<script lang="ts">
    import { postListusers } from '../default/default';
    const users = postListusers(undefined, undefined);
    //wat invullen voor pagination, en hoe geef ik deze mee in de POST url
    //current url komt niet tevoorschijn, juiste url met goeie poort wordt niet gebruikt als custom instance
    //
</script>

<main class="App">
    <header class="App-header">
        {#if users.isLoading}
            <span>Loading...</span>
        {:else if users.isError}
            <span>Error: {users.error}</span>
        {:else}
            <ul>
                {#each users.data as users}
                    <li>{users.name}</li>
                {/each}
            </ul>
        {/if}
    </header>
</main>