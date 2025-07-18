const fileDrop = document.getElementById('container')

fileDrop.addEventListener("drop", (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    console.log(files)

    if(files.length === 0){
    fileDrop.textContent = 'No files dropped'
    }

    if(files.length > 0){
        fileDrop.textContent = 'file dropped'
    }
});

fileDrop.addEventListener('dragover', (e)=>{
    e.preventDefault();
})