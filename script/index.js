window.addEventListener('scroll', e=>{
    const header = document.querySelector('.ramanji-header')
    let scroll = scrollY
    if (scroll > header.offsetHeight) {
        header.classList.add('height-15')
        header.classList.add('toggle')
        header.classList.remove('height-20')
    }else{
        header.classList.add('height-20')
        header.classList.remove('height-15')
        header.classList.remove('toggle')
    }
})

const skills = [
    {name: 'HTML', img: 'html.png'}, {name: 'CSS', img: 'css.png'}, {name: 'Javascript', img: 'javascript.png'},
    {name: 'PHP', img: 'php.png'}, {name: 'MySQL', img: 'mysql.png'}, {name: 'Python', img: 'python.png'},
]

let skillString = ''
skills.forEach(({name, img}, index) => {
    skillString+= `
        <div class="col-2 col-l-3 col-m-4 col-s-6 padding-all-10">
            <div class="flex-column align-items-center">
                <img src="./images/skills/${img}" alt="" class="img" />
            </div>
            <br />
            <div class="center-text font-helvetica bold-text">${name}</div>
        </div>
    `
})
document.querySelector('#skills-images').innerHTML = skillString

const projects = [
    {
        title: 'Starbucks Landing Page',
        description: "Starbucks landing page prototype using HTM, CSS, JAVASCRIPT",
        image: './images/starbucks.png',
        buttons: [
            {name: 'View', github: false, link:'./starbucks/index.htm'},
            {name: 'Github', github: true, link:'https://www.github.com/muscoff/starbucks'},
        ]
    },
]

let projectString = ''

projects.forEach(({title, description, image, buttons}, index) => {
    projectString += `
        <div class="proj-div padding-all-20">
            <div class="width-100 height-55 margin-auto">
                <img src="${image}" class="img" />
            </div>
            <br />
            <div class="white-text font-helvetica">
                <div class="center-text uppercase bold-text">${title}</div><br />
                <div>${description}</div><br />
                <div class="flex-row-reverse">
    `
    buttons.forEach(({name, github, link}) => {
        projectString+= `
        <a href="${link}" target="_blank" style="margin-right: ${github ? '10px' : 'none'}" class="visit">${name}</a>
        `
    })

    projectString += `
                </div>
            </div>
        </div><br /><br />
    `
})

document.querySelector('#project-items').innerHTML = projectString