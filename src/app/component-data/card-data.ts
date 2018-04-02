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
  '.enroll-card{\n' +
  '  margin: 20px;\n' +
  '  font-size: 14px;\n' +
  '  background-color: white;\n' +
  '  width: 400px;\n' +
  '  height: 520px;\n' +
  '  border-radius: 20px;\n' +
  '  box-shadow:0 5px 20px rgba(0, 0, 0, 0.05);\n' +
  '  display: flex;\n' +
  '  flex-direction: column;\n' +
  '  align-items: center;\n' +
  '  padding: 0 20px;\n' +
  '  &:hover img{\n' +
  '    transform: scale(1.1);\n' +
  '  }\n' +
  '}\n' +
  '.img-section{\n' +
  '  border-top-left-radius: 20px;\n' +
  '  border-top-right-radius: 20px;\n' +
  '  overflow: hidden;\n' +
  '  img{\n' +
  '    transition: all 1s ease-in-out;\n' +
  '  }\n' +
  '\n' +
  '}\n' +
  '.enroll-card:hover{\n' +
  '\n' +
  '}\n' +
  '.enroll{\n' +
  '  padding: 20px;\n' +
  '  background-color: #fafafa;\n' +
  '}\n' +
  '.enroll h4{\n' +
  '  margin: 14px;\n' +
  '}'
}]
