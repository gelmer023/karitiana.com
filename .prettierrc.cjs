module.export={
    semi: true,
    single: false,
    tabWidth: 2,
    useTabs: true,
    plugins: [
        require(prettier-plugin-astro)
    ],
    overrides:[
        {
            files:"**/*astro",
            options:{
                parser:"astro",
            },
        },
    ],
};