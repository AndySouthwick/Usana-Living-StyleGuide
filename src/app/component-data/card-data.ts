export const cardData = [{
  name: 'topCardData',
  rules: '<h3>Rules for Cards</h3>' +
  '<p>Image dimensions for cards is 414x328 keeping to this size will insure that the images are the same height' +
  ' for all cards </p>',
  html: ' \n' +
        '<div  class="top-level-card-container">\n' +
        '  <div  class="card-container">\n' +
        '    <div  class="card-inner">\n' +
        '      <div  class="card-bg-container">\n' +
        '        <div class="card-bg">\n' +
        '          <img  class="img-fluid" src="#">\n' +
        '        </div>\n' +
        '        <h3  class="card-text1">Card Header</h3>\n' +
        '      </div>\n' +
        '      <div  class="card-content-container">\n' +
        '        <p  class="card-text2">content for card</p>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '    <div  class="card-link">\n' +
        '      <a  class="btn btn-primary" href="#" target="_blank">\n' +
        '        Learn More\n' +
        '      </a>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>',
  css: ' \n' +
  '@import "~sass/variables";\n' +
  '@import "~sass/mixins";\n' +
  '.card-container {\n' +
  '  margin:0 20px 0 20px;\n' +
  '  text-align: center;\n' +
  '  border-radius: 10px;\n' +
  '  box-shadow: 0 15px 30px $tintedglass;\n' +
  '  background-color: #fff;\n' +
  '  position: relative;\n' +
  '  padding-bottom: 20px;\n' +
  '}\n' +
  '.card-bg-container,\n' +
  '.card-container,\n' +
  '.card-bg img {\n' +
  '  width: 320px;\n' +
  '}\n' +
  '.card-container,\n' +
  '.card-bg img {\n' +
  '  width: 320px;\n' +
  '}\n' +
  '.card-bg img {\n' +
  '  height: auto;\n' +
  '  border-radius: 10px 10px 0 0;\n' +
  '}\n' +
  '.card-bg-container {\n' +
  '  position: relative;\n' +
  '}\n' +
  '.card-inner {\n' +
  '  overflow: hidden;\n' +
  '}\n' +
  ':host[card-type] .card-container {\n' +
  '  box-shadow: 0 15px 30px $tintedglass;\n' +
  '}\n' +
  '.card-text1 {\n' +
  '  position: relative;\n' +
  '  color: #333;\n' +
  '  padding: 0 20px;\n' +
  '  font-weight: 500;\n' +
  '  font-size: 1.35rem;\n' +
  '  line-height: 1.35rem;\n' +
  '}\n' +
  '.card-text1:empty {\n' +
  '  display: none;\n' +
  '}\n' +
  '.card-content-container {\n' +
  '  position: relative;\n' +
  '}\n' +
  '.card-text2 {\n' +
  '  margin: 1.25rem;\n' +
  '}\n' +
  ':host:not([card-type]) .card-text2 strong{\n' +
  '  text-align: right;\n' +
  '  display:block;\n' +
  '\n' +
  '}\n' +
  '@include media-breakpoint-down(sm) { /* mobile */\n' +
  '  .card-bg-container,\n' +
  '  .card-container,\n' +
  '  .card-bg img {\n' +
  '    width: 300px;\n' +
  '  }\n' +
  '  .card-container{\n' +
  '    margin: 5px;\n' +
  '  }\n' +
  '  .btn {\n' +
  '    width: 220px!important;\n' +
  '  }\n' +
  '}'
}]
