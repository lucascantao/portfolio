const projects = document.querySelectorAll('.project');

const ResumeIDS = []

projects.forEach(project => {

    ResumeIDS.push(project.attributes.Id.value + '-resume')

    project.addEventListener('click', () => {
        const ResumeId = project.attributes.Id.value + '-resume'
        const projectResume = document.getElementById(ResumeId)
        projectResume.classList.toggle('hide')
    })
} )
