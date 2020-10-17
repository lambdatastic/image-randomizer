import h from 'elementx'

import Images from './data/images.json'

const ShuffleButton = document.getElementById('shuffle')
const ImgContainer = document.getElementById('container')

const genImageUrl = (img) => `/static/images/${img}`

const getRandomImg = () => {
    const idx = Math.floor(Math.random() * ImageElements.length)
    return ImageElements[idx]
}

ShuffleButton.onclick = () => {
    ImgContainer.replaceChild(getRandomImg(), ImgContainer.firstChild)
}

const ImageElements = Images.map((x) => {
    return h.img({
        src: genImageUrl(x)
    })
})

ImgContainer.appendChild(getRandomImg())