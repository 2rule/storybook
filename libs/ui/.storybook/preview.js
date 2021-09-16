import '!style-loader!css-loader!sass-loader!./../../../.storybook/global/styles/global.scss';


const tokenContext = require.context(
    '!!raw-loader!../src/lib/tokens',
    true,
    /.\.(css|less|scss|svg)$/
  );
  
  const tokenFiles = tokenContext.keys().map(function (filename) {
    return { filename: filename, content: tokenContext(filename).default };
  });
  
  export const parameters = {
    designToken: {
      files: tokenFiles,
    //   styleInjection:
    //     '@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");'
    },
    options: {
        storySort: {
          order: ['Color'],
        },
      },
  };