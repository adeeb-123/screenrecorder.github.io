console.log("Screen Recording | By Adeeb Ahmad")

let btn = document.getElementById("btn");
// let btn2 = document.getElementById("btn2")
let img = document.getElementById("img")
let video = document.getElementById("video")

btn.addEventListener('click',()=>{
    start();
})

const start = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia(
        {
            video: {
                mediaSource: "screen"
            }
        }
    )

    const data = [];

    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (e) => {
        data.push(e.data)
    }
    mediaRecorder.start();
    mediaRecorder.onstop = (e) => {
        document.querySelector("video").src = URL.createObjectURL(
            new Blob(data, {
                type: data[0].type,
            })
        )
        // btn2.style.display = "block";
        img.style.display = "none";
        video.style.display = "block";
    }
}

// start();