import React, { useEffect, useState } from 'react';
import '../Style.css'


const dataCar = [
    {
        "id": 1,
        "title": "Crystal Black",
        "type": "Pearl",
        "img": "./images/icons/icon-black.jpg",
        "srcImg": "images-black/images-black-1/",
        "color": "Black",
        "price": "19,550",
        "engineType": "In-Line 4-Cylinder",
        "displacement": "1996 cc",
        "horsepower": "158 @ 6500 rpm",
        "torque": "138 lb-ft @ 4200 rpm",
        "redline": "6700 rpm",
        "wheels": [
            {
                "idWheel": 1,
                "srcImg": "images-black/images-black-1/"
            },
            {
                "idWheel": 2,
                "srcImg": "images-black/images-black-2/"
            },
            {
                "idWheel": 3,
                "srcImg": "images-black/images-black-3/"
            }
        ]
    },
    {
        "id": 2,
        "title": "Modern Steel",
        "type": "Metallic",
        "img": "./images/icons/icon-steel.jpg",
        "srcImg": "images-steel/images-steel-1/",
        "color": "Steel",
        "price": "20,550",
        "engineType": "In-Line 4-Cylinder",
        "displacement": "1996 cc",
        "horsepower": "158 @ 6500 rpm",
        "torque": "138 lb-ft @ 4200 rpm",
        "redline": "6700 rpm",
        "wheels": [
            {
                "idWheel": 1,
                "srcImg": "images-steel/images-steel-1/"
            },
            {
                "idWheel": 2,
                "srcImg": "images-steel/images-steel-2/"
            },
            {
                "idWheel": 3,
                "srcImg": "images-steel/images-steel-3/"
            }
        ]
    },
    {
        "id": 3,
        "title": "Lunar Silver",
        "type": "Metallic",
        "img": "./images/icons/icon-silver.jpg",
        "srcImg": "images-silver/images-silver-1/",
        "color": "Silver",
        "price": "21,550",
        "engineType": "In-Line 4-Cylinder",
        "displacement": "1996 cc",
        "horsepower": "158 @ 6500 rpm",
        "torque": "138 lb-ft @ 4200 rpm",
        "redline": "6700 rpm",
        "wheels": [
            {
                "idWheel": 1,
                "srcImg": "images-silver/images-silver-1/"
            },
            {
                "idWheel": 2,
                "srcImg": "images-silver/images-silver-2/"
            },
            {
                "idWheel": 3,
                "srcImg": "images-silver/images-silver-3/"
            }
        ]
    },
    {
        "id": 4,
        "title": "Rallye Red",
        "type": "Metallic",
        "img": "./images/icons/icon-red.jpg",
        "srcImg": "images-red/images-red-1/",
        "color": "Red",
        "price": "22,550",
        "engineType": "In-Line 4-Cylinder",
        "displacement": "1996 cc",
        "horsepower": "158 @ 6500 rpm",
        "torque": "138 lb-ft @ 4200 rpm",
        "redline": "6700 rpm",
        "wheels": [
            {
                "idWheel": 1,
                "srcImg": "images-red/images-red-1/"
            },
            {
                "idWheel": 2,
                "srcImg": "images-red/images-red-2/"
            },
            {
                "idWheel": 3,
                "srcImg": "images-red/images-red-3/"
            }
        ]
    }
]

function BaiTapChonXe(props) {


    const [car, setCar] = useState('')

    const handleCar = (car) => {
        setCar(car)
        setSrc(car.srcImg)
    }

    const [src, setSrc] = useState('images-black/images-black-1/')


    useEffect(() => {
        console.log('re-effect')
        let tagScript = document.createElement('script')
        tagScript.src = "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.5/js-cloudimage-360-view.min.js"
        document.getElementById('view360').appendChild(tagScript)
    }, [])

    useEffect(() => {
        let tagScript = document.createElement('script')
        tagScript.src = "https://cdn.scaleflex.it/filerobot/js-cloudimage-responsive/lazysizes.min.js?v4.1.6"
        document.getElementById('view360').appendChild(tagScript)
        // return () => {
        //     document.getElementById('view360').innerHTML = ''
        // }
    }, [src])

    return (

        <div className='container-fluid'>
            <br />
            {/* Thay doi mau xe - useState */}
            <div className='row'>
                <div className='col-7'>
                    <div id="currentCar" className="cloudimage-360" data-folder={'./images/' + `${src}`}
                        data-filename-x="civic-{index}.jpg" data-amount-x="8" ></div>
                    <div id='view360'></div>
                </div>
                <div className='col-5'>
                    <div className="card" style={{ width: "80%" }}>
                        <div className="card-header">Exterior Color</div>
                        <ul className="list-group list-group-flush">
                            {
                                dataCar.map((car, index) => {
                                    return (
                                        <li key={index} className="list-group-item" style={{ cursor: 'pointer' }} onClick={() => handleCar(car)} >
                                            <div className='row'>
                                                <div className='col-2'>
                                                    <img style={{ width: "100%" }} src={car.img} />
                                                </div>
                                                <div style={{ display: 'inline' }} className='col-10'>
                                                    <h5>{car.title}</h5>
                                                    <h6>{car.type}</h6>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>

            <div className='row'>
                <div className='col-7'>
                    <table className="table table-hover table-bordered ">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col" >Vehicle specifications
                                </th>
                                <th scope="col" >Value
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Color</th>
                                <td>{car.color}</td>
                            </tr>
                            <tr>
                                <th scope="row">Price</th>
                                <td>{car.price}</td>
                            </tr>
                            <tr>
                                <th scope="row">Engine Type</th>
                                <td>{car.engineType}</td>
                            </tr>
                            <tr>
                                <th scope="row">Displacement</th>
                                <td>{car.displacement}</td>
                            </tr>
                            <tr>
                                <th scope="row">Horsepower</th>
                                <td>{car.horsepower}</td>
                            </tr>
                            <tr>
                                <th scope="row">Torque</th>
                                <td>{car.torque}</td>
                            </tr>
                            <tr>
                                <th scope="row">Redline</th>
                                <td>{car.redline}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default BaiTapChonXe;