const fileDrop = document.getElementById('container')
const compressButton = document.getElementById('CompressBtn')
const download = document.getElementById('download-Link')
const Compressedt = document.getElementById('Compressedt')
const downloadBtn = document.getElementById('downloadBtn')
const Details = document.getElementById('Details')
const reader = new FileReader 
let selectedFile = null



compressButton.addEventListener('click', 
    (e)=>{
        if(!selectedFile){
            return
        }

        reader.onload = function(e){
            const text = e.target.result
            const utf8Bytes = new TextEncoder().encode(text)
            const compressed = pako.gzip(utf8Bytes)
            const blob = new Blob([compressed], {type: 'application/gzip'})
            const url = URL.createObjectURL(blob)
            console.log(url)
            const link = download
            link.href = url
            link.style.display = 'inline-block'

            // Compressedt.innerHTML =
            // `${(compressed.length/1024).toFixed(2)}KB</p>
            // ${(compressed.length/1024*1024).toFixed(2)}MB</p>
            // `
        reader.readAsText(selectedFile)
        downloadBtn.style.display = 'block'
    }
    }
    
)



fileDrop.addEventListener("drop", (e) => {
    e.preventDefault()

    const files = e.dataTransfer.files
    const file = files[0]
    
    //console.log(file, files.length)

    if (files.length > 1){
        compressButton.disable = true
        download.disable = true

        fileDrop.textContent = 'ERROR: cannot process more than one file at a time'
        fileDrop.style.color = 'red'
        compressButton.style.display = 'none'
        download.style.display = 'none'

        return
    }

    else {

        if (files.length === 1){
            fileDrop.textContent = 'file dropped'
            fileDrop.style.color = 'green'
            selectedFile = file
            //check if file type is supported by the type property
        }
    }

    //    if (reader.error){
    //         fileDrop.textContent = 'There was an error uploading your file'
    //     }

    //     if(reader.EMPTY){
    //     fileDrop.textContent = 'No files dropped'
    //     }

    //     if (reader.LOADING){
    //         fileDrop.textContent = 'loading...'
    //     }

    Details.innerHTML = `
    <p><strong> File name:</strong> </p>
    <p>${file.name}</p> 
    <p><strong> File size: </strong> </p>
    <p>${(file.size/(1024*1024)).toFixed(2)}MB </p>
    <p>${(file.size/(1024)).toFixed(2)}KB</p>
    <p><strong>File type: </strong></p> 
    <p>${file.type}</p>`
});



// Create a preview function


fileDrop.addEventListener('dragover', (e)=>{
    e.preventDefault();
})

