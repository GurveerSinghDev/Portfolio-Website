function showProjectDesc() {
    //hides the desc
    const descs = document.querySelectorAll('.project-desc');
    descs.forEach(desc => {
        desc.classList.remove('active');
    });

    //shows
    const selectedProject = document.getElementById('projectSelect').value;
    if (selectedProject) {
        document.getElementById(selectedProject).classList.add('active');
    }
}