const abstract = ['Take an abstract picture, ',
                  'Take a concrete (non-abstract) picture, ',
                  'Take a picture (abstract or concrete), '];
const theme = ["theme 'portrait', ",
               "theme 'landscape', ",
               "theme 'plants', ",
               "theme 'animals', ",
               "theme 'odd objects', ",
               "theme 'common objects', ",
               "theme of your choice, "];
const lighting = ['with natural light, ',
                  'with artificial light, ',
                  'combining natural and artificial light, ',
                  'lighting of your choice, '];
const contrast = ['high contrast, ',
                  'low contrast, ',
                  'contrast of your choice, '];
const colors = ['colored ',
                'in black-and-white ',
                'duotoned ' ,
                'colors of your choice '];
const lens = ['and using a normal lens.',
              'and using an angular lens.',
              'and using a telephoto lens.',
              'and using a lens of your choice.']

function selectTextPiece(component) {
    const item = Math.floor(Math.random()*component.length);
    return component[item];
};