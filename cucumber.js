let common =[
    'features/**/*.feature',
    '--require-module ts-node/register',
    '--require features/step_definitions/**/*.ts',
    // '--format json:reports/json/cucumber_report.json',
    '--format cucumber-console-formatter',
    '--require-module ts-node/register',
    '--publish-quiet',
    '--require features --format-options \'{"snippetInterface": "synchronous"}\' --format json:reports/json/cucumber_report.json'
].join(' ');

module.exports={
    default: common
};

