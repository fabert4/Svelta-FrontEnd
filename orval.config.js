module.exports = {
    petstore: {
        output: {
            mode: 'tags-split',
            target: './src/default/default.ts',
            schemas: './src/model',
            client: 'svelte-query',
            mock: true,
            override: {
                mutator: {
                    path: './src/custom-instance.ts',
                    name: 'customInstance',
                },
            },
        },
        input: {
            target: './src/openapi.json',
        },
    },
};