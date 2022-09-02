module.exports = {
    presets: ["babel-preset-gatsby"],
    plugins: [
        [
            "i18next-extract",
            {
                keySeparator: null,
                nsSeparator: null,
                locales: ["en", "fr"],
                keyAsDefaultValue: ["en"],
                useI18nextDefaultValue: ["en"],
                discardOldKeys: true,
                outputPath: "locales/{{locale}}/{{ns}}.json",
                customTransComponents: [["gatsby-plugin-react-i18next", "Trans"]]
            }
        ]
    ]
};
