// function to generate markdown for README
function generateMarkdown(data) {
  return `
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
# ${data.title}
**Version ${data.version}**
### ${data.description}
## User Story
${data.userStory}
## Installation Command
${data.installation}  
### Test Commands
${data.test}

## LICENSE & COPYRIGHT
${data.license}



Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



&copy; Git Hub User Name: ${data.github}
<a href="https://github.com/${data.github}/${data.title}/">***Finish Product: ${data.title}***</a>
For more information or questions 
Email me @ ${data.email}
--
### Example of what the end result should look like 
  
  
  
  
  
  

`;
}

module.exports = generateMarkdown;
