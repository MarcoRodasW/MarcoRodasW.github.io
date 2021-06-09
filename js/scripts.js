const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');
const projects = document.querySelector('#projects');
const projectsContent = document.querySelector('#projects-content');

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#101116')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#101116')
    },
  })
})

projects.addEventListener('click', () => {
    const projectsbox = new WinBox({
        title: 'My Projects',
        width: '400px',
        height: '400px',
        top: 250,
        right: 50,
        bottom: 50,
        left: 450,
        mount: projectsContent,
        onfocus: function () {
          this.setBackground('#00aa00')
        },
        onblur: function () {
          this.setBackground('#101116')
        },
      })
})