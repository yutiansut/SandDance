function SandDanceEmbed(data, insight) {
    SandDanceExplorer.use(Fabric, vega, deck, deck, luma);
    var explorerProps = {
        logoClickUrl: 'https://microsoft.github.io/SandDance/',
        mounted: function (explorer) {
            explorer.load(data, function (columns) {
                return insight || {};
            });
        }
    };
    ReactDOM.render(React.createElement(SandDanceExplorer.Explorer, explorerProps), document.getElementById('app'));
}
