import React, { useState } from 'react';
import '../Style.css'
const dataGlass = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]

function BaiTapChonKinh() {
    const [glass, setGlass] = useState(0)

    const handleClick = () => {

    }

    return (
        <div style={{ background: 'url(https://alphagypsumboard.com/wp-content/uploads/2019/07/Background-website-01.jpg', minHeight: '100vh' }}>
            <div style={{ backgroundColor: 'rgb(0,0,0,0.3)', minHeigh: '100vh' }}>
                <div className='text-center'>
                    <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '20px' }}>
                        <h1 style={{ color: 'white' }}>TRY GLASSES APP ONLINE</h1>
                    </div>
                    <div className='text-center mt-5' style={{ background: 'url(./glassesImage/babe.jpg) no-repeat center / contain ', height: '400px' }}>
                        <div className='imgModel'>
                            <img style={{ opacity: '.9' }} className='imgGlass ' src={glass.url} alt="" />
                            <h3 style={{ margin: '0 auto', color: '#ccc', background: 'red', width: '300px' }}>{glass.name}</h3>
                        </div>
                    </div>


                    <div className='row justify-content-center' >
                        <div className='col-8 glassItem' style={{ height: '190px', backgroundColor: '#fff', margin: '110px 0' }}>
                            {
                                dataGlass.map((item, index) => {
                                    console.log('render' + index)
                                    return (
                                        <img key={index} onClick={() => handleClick(setGlass(item))} src={item.url} alt="" />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default BaiTapChonKinh;